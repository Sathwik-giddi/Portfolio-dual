
import { prisma } from '../config/db.js';
import { FacebookService } from './facebook.js';
import { decrypt } from './encryption.js';
import { logger } from '../config/logger.js';

export class MetaSyncService {
    /**
     * Syncs a specific Connected Account.
     * Fetches Campaigns -> Ads -> Metrics and upserts them into the DB.
     */
    static async syncAccount(connectedAccountId: string) {
        logger.info(`Starting Meta Sync for account: ${connectedAccountId}`);

        const account = await prisma.connectedAccount.findUnique({
            where: { id: connectedAccountId },
        });

        if (!account) {
            throw new Error(`Connected Account not found: ${connectedAccountId}`);
        }

        if (account.platform !== 'meta') {
            throw new Error(`Account ${connectedAccountId} is not a meta account`);
        }

        try {
            const accessToken = decrypt(account.encryptedAccessToken);
            const adAccountId = account.platformAccountId;

            logger.info(`Fetching data for Ad Account: ${adAccountId}`);

            // 1. Fetch Campaigns
            const campaigns = await FacebookService.getCampaigns(accessToken, adAccountId);
            logger.info(`Fetched ${campaigns.length} campaigns`);

            for (const camp of campaigns) {
                // Upsert Campaign
                await prisma.campaign.upsert({
                    where: {
                        connectedAccountId_platformCampaignId: {
                            connectedAccountId: account.id,
                            platformCampaignId: camp.id
                        }
                    },
                    update: {
                        name: camp.name,
                        status: camp.status,
                        dailyBudget: camp.daily_budget ? (parseInt(camp.daily_budget) / 100).toString() : null // Convert cents to dollars if present
                    },
                    create: {
                        connectedAccountId: account.id,
                        platformCampaignId: camp.id,
                        name: camp.name,
                        status: camp.status,
                        dailyBudget: camp.daily_budget ? (parseInt(camp.daily_budget) / 100).toString() : null,
                        platform: 'meta',
                        currency: 'USD' // Mock default
                    }
                });

                // 2. Fetch Ads for this Campaign
                // Note: In real API we might batch this differently, but for mock logical flow this works
                const ads = await FacebookService.getAds(accessToken, camp.id);

                // Get internal DB Campaign ID for linking
                const dbCampaign = await prisma.campaign.findUnique({
                    where: {
                        connectedAccountId_platformCampaignId: {
                            connectedAccountId: account.id,
                            platformCampaignId: camp.id
                        }
                    }
                });

                if (!dbCampaign) continue;

                for (const ad of ads) {
                    await prisma.ad.upsert({
                        where: {
                            campaignId_platformAdId: {
                                campaignId: dbCampaign.id,
                                platformAdId: ad.id
                            }
                        },
                        update: {
                            name: ad.name,
                            status: ad.status,
                            creativeId: ad.creative?.id
                        },
                        create: {
                            campaignId: dbCampaign.id,
                            platformAdId: ad.id,
                            name: ad.name,
                            status: ad.status,
                            creativeId: ad.creative?.id
                        }
                    });
                }
            }

            // 3. Fetch Ad Metrics (at account level then map, or ad level)
            // The FacebookService.getAdMetrics returns granular data
            const adMetrics = await FacebookService.getAdMetrics(accessToken, adAccountId);
            logger.info(`Fetched ${adMetrics.length} ad metric records`);

            for (const metric of adMetrics) {
                // We need to find the internal Ad ID to link the metric
                // We can look it up by platformAdId + campaignId connection
                // For efficiency in a loop, we might cache this, but for now we query.

                // First find the ad in our DB
                // Since platformAdId is unique per campaign in our schema (but really unique globally usually),
                // we'll try to find it.
                // However, our schema `@@unique([campaignId, platformAdId])` requires campaignId.
                // The metric usually contains campaign_id too.

                // 1. Find Campaign
                const dbCampaign = await prisma.campaign.findFirst({
                    where: {
                        connectedAccountId: account.id,
                        platformCampaignId: metric.campaign_id
                    }
                });

                if (!dbCampaign) {
                    logger.warn(`Campaign not found for metric: ${metric.campaign_id}`);
                    continue;
                }

                // 2. Find Ad
                const dbAd = await prisma.ad.findUnique({
                    where: {
                        campaignId_platformAdId: {
                            campaignId: dbCampaign.id,
                            platformAdId: metric.ad_id
                        }
                    }
                });

                if (!dbAd) {
                    logger.warn(`Ad not found for metric: ${metric.ad_id}`);
                    continue;
                }

                // 3. Upsert Metric
                // video_p75_watched_actions is a list of actions, we sum value
                const videoViews = metric.video_p75_watched_actions?.reduce((acc: number, item: any) => acc + (parseInt(item.value) || 0), 0) || 0;

                const date = new Date(metric.date_start); // ISO YYYY-MM-DD

                await prisma.adMetric.upsert({
                    where: {
                        adId_date: {
                            adId: dbAd.id,
                            date: date
                        }
                    },
                    update: {
                        impressions: parseInt(metric.impressions) || 0,
                        clicks: parseInt(metric.clicks) || 0,
                        spend: parseFloat(metric.spend) || 0,
                        conversions: parseInt(metric.conversions) || 0,
                        videoViews: videoViews,
                        ctr: parseFloat(metric.ctr) || 0,
                        cpc: parseFloat(metric.cpc) || 0
                    },
                    create: {
                        adId: dbAd.id,
                        date: date,
                        impressions: parseInt(metric.impressions) || 0,
                        clicks: parseInt(metric.clicks) || 0,
                        spend: parseFloat(metric.spend) || 0,
                        conversions: parseInt(metric.conversions) || 0,
                        videoViews: videoViews,
                        ctr: parseFloat(metric.ctr) || 0,
                        cpc: parseFloat(metric.cpc) || 0
                    }
                });
            }

            // 4. Aggregate and Upsert Campaign Metrics
            // AnalysisService relies on CampaignMetric, so we must populate it.
            // We can aggregate from the fetched adMetrics.
            const campaignMetricsMap = new Map<string, any>();

            for (const metric of adMetrics) {
                const key = `${metric.campaign_id}_${metric.date_start}`;
                if (!campaignMetricsMap.has(key)) {
                    campaignMetricsMap.set(key, {
                        campaignId: metric.campaign_id,
                        date: metric.date_start,
                        impressions: 0,
                        clicks: 0,
                        spend: 0,
                        conversions: 0
                    });
                }
                const agg = campaignMetricsMap.get(key);
                agg.impressions += parseInt(metric.impressions) || 0;
                agg.clicks += parseInt(metric.clicks) || 0;
                agg.spend += parseFloat(metric.spend) || 0;
                agg.conversions += parseInt(metric.conversions) || 0;
            }

            for (const agg of campaignMetricsMap.values()) {
                const dbCampaign = await prisma.campaign.findFirst({
                    where: {
                        connectedAccountId: account.id,
                        platformCampaignId: agg.campaignId
                    }
                });

                if (!dbCampaign) continue;

                const date = new Date(agg.date);

                await prisma.campaignMetric.upsert({
                    where: {
                        campaignId_date: {
                            campaignId: dbCampaign.id,
                            date: date
                        }
                    },
                    update: {
                        impressions: agg.impressions,
                        clicks: agg.clicks,
                        spend: agg.spend,
                        conversions: agg.conversions
                    },
                    create: {
                        campaignId: dbCampaign.id,
                        date: date,
                        impressions: agg.impressions,
                        clicks: agg.clicks,
                        spend: agg.spend,
                        conversions: agg.conversions
                    }
                });
            }

            // Update Last Synced At
            await prisma.connectedAccount.update({
                where: { id: account.id },
                data: { lastSyncedAt: new Date() }
            });

            logger.info('Meta Sync Completed Successfully');
            return { success: true, count: campaigns.length };

        } catch (error: any) {
            logger.error('Meta Sync Failed', { error: error.message });
            throw error;
        }
    }
}
