import { prisma } from '../config/db.js';
import { FacebookService } from './facebook.js';
import { GoogleService } from './google.js';
import { decrypt } from './encryption.js';
import { AlertService } from './alerts.js';
import { logger } from '../config/logger.js';

export class SyncService {
    /**
     * Syncs data for all connected accounts (Meta & Google).
     */
    static async syncAllAccounts() {
        logger.info('Starting Global synchronization job');
        await Promise.allSettled([
            this.syncAllMetaAccounts(),
            this.syncAllGoogleAccounts()
        ]);
        logger.info('Global synchronization job completed');
    }

    /**
     * Syncs all Meta accounts.
     */
    static async syncAllMetaAccounts() {
        logger.info('Starting Meta synchronization job');
        const accounts = await prisma.connectedAccount.findMany({
            where: { platform: 'meta' },
        });

        for (const account of accounts) {
            try {
                await this.syncMetaAccount(account.id);
            } catch (error: any) {
                logger.error(`Failed to sync Meta account`, { accountId: account.id, error: error.message });
            }
        }
    }

    /**
     * Syncs all Google accounts.
     */
    static async syncAllGoogleAccounts() {
        logger.info('Starting Google Ads synchronization job');
        const accounts = await prisma.connectedAccount.findMany({
            where: { platform: 'google' },
        });

        for (const account of accounts) {
            try {
                await this.syncGoogleAccount(account.id);
            } catch (error: any) {
                logger.error(`Failed to sync Google account`, { accountId: account.id, error: error.message });
            }
        }
    }

    /**
     * Syncs data for a specific Meta account.
     */
    static async syncMetaAccount(connectedAccountId: string) {
        const account = await prisma.connectedAccount.findUnique({
            where: { id: connectedAccountId },
        });

        if (!account) throw new Error('Connected account not found');

        const accessToken = decrypt(account.encryptedAccessToken);
        const adAccountId = account.platformAccountId;

        const insights = await FacebookService.getAdAccountInsights(accessToken, adAccountId);

        for (const insight of insights) {
            const campaign = await prisma.campaign.upsert({
                where: {
                    connectedAccountId_platformCampaignId: {
                        connectedAccountId: account.id,
                        platformCampaignId: insight.campaignId,
                    },
                },
                update: {
                    name: insight.campaignName,
                    status: 'ACTIVE',
                },
                create: {
                    connectedAccountId: account.id,
                    platformCampaignId: insight.campaignId,
                    name: insight.campaignName,
                    status: 'ACTIVE',
                    platform: 'meta',
                },
            });

            const date = new Date();
            date.setDate(date.getDate() - 1); // Yesterday
            const dateStr = date.toISOString().split('T')[0];

            if (dateStr) {
                const previousDate = new Date(dateStr);
                previousDate.setDate(previousDate.getDate() - 1);

                const previousMetric = await prisma.campaignMetric.findUnique({
                    where: {
                        campaignId_date: {
                            campaignId: campaign.id,
                            date: previousDate,
                        },
                    },
                });

                await prisma.campaignMetric.upsert({
                    where: {
                        campaignId_date: {
                            campaignId: campaign.id,
                            date: new Date(dateStr),
                        },
                    },
                    update: {
                        impressions: insight.impressions,
                        clicks: insight.clicks,
                        spend: insight.spend,
                    },
                    create: {
                        campaignId: campaign.id,
                        date: new Date(dateStr),
                        impressions: insight.impressions,
                        clicks: insight.clicks,
                        spend: insight.spend,
                    },
                });

                // Detect anomalies
                await AlertService.detectAnomalies(account.userId, campaign.name, insight, previousMetric);
            }
        }

        await prisma.connectedAccount.update({
            where: { id: connectedAccountId },
            data: { lastSyncedAt: new Date() },
        });
    }

    /**
     * Syncs data for a specific Google Ads account.
     */
    static async syncGoogleAccount(connectedAccountId: string) {
        const account = await prisma.connectedAccount.findUnique({
            where: { id: connectedAccountId },
        });

        if (!account) throw new Error('Connected account not found');

        const refreshToken = decrypt(account.encryptedAccessToken);
        const customerId = account.platformAccountId;

        const insights = await GoogleService.getCustomerInsights(refreshToken, customerId);

        for (const insight of insights) {
            const campaign = await prisma.campaign.upsert({
                where: {
                    connectedAccountId_platformCampaignId: {
                        connectedAccountId: account.id,
                        platformCampaignId: insight.campaignId,
                    },
                },
                update: {
                    name: insight.campaignName,
                    status: insight.status.toUpperCase(),
                },
                create: {
                    connectedAccountId: account.id,
                    platformCampaignId: insight.campaignId,
                    name: insight.campaignName,
                    status: insight.status.toUpperCase(),
                    platform: 'google',
                },
            });

            const date = new Date();
            date.setDate(date.getDate() - 1); // Yesterday
            const dateStr = date.toISOString().split('T')[0];

            if (dateStr) {
                const previousDate = new Date(dateStr);
                previousDate.setDate(previousDate.getDate() - 1);

                const previousMetric = await prisma.campaignMetric.findUnique({
                    where: {
                        campaignId_date: {
                            campaignId: campaign.id,
                            date: previousDate,
                        },
                    },
                });

                await prisma.campaignMetric.upsert({
                    where: {
                        campaignId_date: {
                            campaignId: campaign.id,
                            date: new Date(dateStr),
                        },
                    },
                    update: {
                        impressions: insight.impressions,
                        clicks: insight.clicks,
                        spend: insight.spend,
                    },
                    create: {
                        campaignId: campaign.id,
                        date: new Date(dateStr),
                        impressions: insight.impressions,
                        clicks: insight.clicks,
                        spend: insight.spend,
                    },
                });

                // Detect anomalies
                await AlertService.detectAnomalies(account.userId, campaign.name, insight, previousMetric);
            }
        }

        await prisma.connectedAccount.update({
            where: { id: connectedAccountId },
            data: { lastSyncedAt: new Date() },
        });
    }
}
