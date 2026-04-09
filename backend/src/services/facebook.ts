import { FacebookAdsApi, AdAccount, User } from 'facebook-nodejs-business-sdk';
import axios from 'axios';
import { logger } from '../config/logger.js';

const APP_ID = process.env.META_APP_ID || '';
const APP_SECRET = process.env.META_APP_SECRET || '';

export class FacebookService {
    /**
     * Generates the Facebook OAuth dialog URL.
     */
    static getFacebookAuthUrl(redirectUri: string): string {
        // Mock Mode Handler
        if (process.env.META_APP_ID === 'mock_meta_app_id') {
            logger.info('Using Mock Meta OAuth URL');
            // We append the real redirectUri so the mock page knows where to send the code back
            return `${process.env.META_REDIRECT_URI}?redirect_uri=${encodeURIComponent(redirectUri)}`;
        }

        const scopes = ['ads_read', 'read_insights', 'public_profile'];
        const url = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&scope=${scopes.join(',')}&response_type=code`;

        logger.debug('Generated Facebook OAuth URL', { redirectUri });
        return url;
    }

    /**
     * Exchanges authorization code for a long-lived access token and fetches the first ad account.
     */
    static async handleFacebookCallback(code: string, redirectUri: string) {
        // Mock Mode Handler
        if (process.env.META_APP_ID === 'mock_meta_app_id') {
            logger.info('Handling Mock Meta Callback');

            // Allow any code starting with 'mock_code_'
            if (!code.startsWith('mock_code_')) {
                throw new Error('Invalid mock authorization code. Code must start with "mock_code_"');
            }

            return {
                accessToken: 'mock_access_token_' + Date.now(),
                adAccountId: 'act_mock_123456789',
                accountName: 'Mock Meta Ad Account'
            };
        }

        try {
            logger.info('Exchanging Facebook auth code for tokens');

            // 1. Exchange code for short-lived token
            const shortLivedResponse = await axios.get(
                `https://graph.facebook.com/v18.0/oauth/access_token`,
                {
                    params: {
                        client_id: APP_ID,
                        client_secret: APP_SECRET,
                        redirect_uri: redirectUri,
                        code,
                    },
                }
            );

            const shortLivedToken = shortLivedResponse.data.access_token;
            logger.info('Successfully obtained short-lived Facebook token');

            // 2. Exchange short-lived token for long-lived token
            const longLivedResponse = await axios.get(
                `https://graph.facebook.com/v18.0/oauth/access_token`,
                {
                    params: {
                        grant_type: 'fb_exchange_token',
                        client_id: APP_ID,
                        client_secret: APP_SECRET,
                        fb_exchange_token: shortLivedToken,
                    },
                }
            );

            const longLivedToken = longLivedResponse.data.access_token;
            logger.info('Successfully obtained long-lived Facebook token');

            // 3. Use the token to fetch user's ad accounts
            FacebookAdsApi.init(longLivedToken);
            const me = await new User('me').getAdAccounts(['name', 'account_id']);

            if (me.length === 0) {
                logger.warn('User connected Meta but has no Ad Accounts');
                throw new Error('No ad accounts found for this user.');
            }

            logger.info(`Found ${me.length} Ad Accounts for user`, { firstAccount: me[0]?.id });

            const firstAccount = me[0];

            return {
                accessToken: longLivedToken,
                adAccountId: firstAccount.id, // This is 'act_ID'
                accountName: firstAccount.name,
            };
        } catch (error: any) {
            const errorMsg = error.response?.data || error.message;
            logger.error('Facebook OAuth Error', { error: errorMsg });
            throw new Error(`Facebook OAuth failed: ${error.message}`);
        }
    }

    /**
     * Fetches campaigns for a specific ad account.
     */
    static async getCampaigns(accessToken: string, adAccountId: string) {
        // Mock Mode
        if (accessToken.startsWith('mock_')) {
            logger.info('Returning Mock Campaigns');
            return [
                {
                    id: 'mock_campaign_1',
                    name: 'Retargeting - Summer Sale',
                    status: 'ACTIVE',
                    daily_budget: '5000', // cents
                    objective: 'CONVERSIONS'
                },
                {
                    id: 'mock_campaign_2',
                    name: 'Prospecting - Lookalike 1%',
                    status: 'ACTIVE',
                    daily_budget: '10000',
                    objective: 'OUTCOME_SALES'
                }
            ];
        }

        try {
            FacebookAdsApi.init(accessToken);
            const account = new AdAccount(adAccountId);
            const campaigns = await account.getCampaigns(
                ['id', 'name', 'status', 'daily_budget', 'objective'],
                { limit: 50 }
            );
            return campaigns.map((c: any) => ({
                id: c.id,
                name: c.name,
                status: c.status,
                daily_budget: c.daily_budget,
                objective: c.objective
            }));
        } catch (error: any) {
            logger.error('Facebook API Error (getCampaigns)', { error: error.message });
            throw error;
        }
    }

    /**
     * Fetches ads for a campaign.
     */
    static async getAds(accessToken: string, campaignId: string) {
        // Mock Mode
        if (accessToken.startsWith('mock_')) {
            logger.info(`Returning Mock Ads for campaign ${campaignId}`);
            return [
                {
                    id: `mock_ad_${campaignId}_1`,
                    name: 'Video_Creative_A_v1',
                    status: 'ACTIVE',
                    creative: { id: 'mock_creative_1' }
                },
                {
                    id: `mock_ad_${campaignId}_2`,
                    name: 'Static_Image_B_v2',
                    status: 'PAUSED',
                    creative: { id: 'mock_creative_2' }
                }
            ];
        }

        // Real API implementation (omitted for brevity as we are focusing on mock flow, but good to have signature)
        try {
            FacebookAdsApi.init(accessToken);
            // In real API we usually fetch ads by AdAccount or Campaign. 
            // Fetching by Campaign:
            // const campaign = new Campaign(campaignId);
            // const ads = await campaign.getAds(...)

            // For simplicity in this mock-heavy phase, we'll throw if not mock for now or implement basic
            // const ads = await new Campaign(campaignId).getAds(['id', 'name', 'status', 'creative']);
            // return ads;
            throw new NotImplementedError("Real getAds not fully verified yet");
        } catch (error: any) {
            logger.error('Facebook API Error (getAds)', { error: error.message });
            throw error;
        }
    }

    /**
     * Fetches metrics (insights) broken down by Ad for a specific date range (defaults to yesterday/today).
     */
    static async getAdMetrics(accessToken: string, adAccountId: string) {
        // Mock Mode
        if (accessToken.startsWith('mock_')) {
            logger.info('Returning Mock Ad Metrics');
            const date = new Date().toISOString().split('T')[0]; // Today
            return [
                {
                    ad_id: 'mock_ad_mock_campaign_1_1',
                    campaign_id: 'mock_campaign_1',
                    impressions: '1500',
                    clicks: '85',
                    spend: '45.50',
                    conversions: '5',
                    video_p75_watched_actions: [{ value: '400' }], // Mock video views type structure
                    ctr: '5.67',
                    cpc: '0.54',
                    date_start: date,
                    date_stop: date
                },
                {
                    ad_id: 'mock_ad_mock_campaign_1_2',
                    campaign_id: 'mock_campaign_1',
                    impressions: '800',
                    clicks: '12',
                    spend: '10.00',
                    conversions: '0',
                    video_p75_watched_actions: [],
                    ctr: '1.50',
                    cpc: '0.83',
                    date_start: date,
                    date_stop: date
                },
                {
                    ad_id: 'mock_ad_mock_campaign_2_1',
                    campaign_id: 'mock_campaign_2',
                    impressions: '5000',
                    clicks: '200',
                    spend: '120.00',
                    conversions: '15',
                    video_p75_watched_actions: [{ value: '1200' }],
                    ctr: '4.00',
                    cpc: '0.60',
                    date_start: date,
                    date_stop: date
                }
            ];
        }

        try {
            FacebookAdsApi.init(accessToken);
            const account = new AdAccount(adAccountId);
            const insights = await account.getInsights(
                ['ad_id', 'campaign_id', 'impressions', 'clicks', 'spend', 'conversions', 'video_p75_watched_actions', 'ctr', 'cpc'],
                {
                    date_preset: 'yesterday',
                    level: 'ad',
                }
            );
            return insights;
        } catch (error: any) {
            logger.error('Facebook API Error (getAdMetrics)', { error: error.message });
            throw error;
        }
    }

    /**
     * Fetches insights for a specific ad account.
     */
    static async getAdAccountInsights(accessToken: string, adAccountId: string) {
        // Mock Mode Handler
        if (accessToken.startsWith('mock_')) {
            logger.info('Returning Mock Campaign Insights');
            return [
                {
                    campaignId: 'mock_campaign_1',
                    campaignName: 'Retargeting - Summer Sale',
                    impressions: 2300,
                    clicks: 97,
                    spend: 55.50
                },
                {
                    campaignId: 'mock_campaign_2',
                    campaignName: 'Prospecting - Lookalike 1%',
                    impressions: 5000,
                    clicks: 200,
                    spend: 120.00
                }
            ];
        }

        try {
            logger.debug('Fetching insights for Ad Account', { adAccountId });
            FacebookAdsApi.init(accessToken);
            const account = new AdAccount(adAccountId);
            const insights = await account.getInsights(
                ['campaign_name', 'campaign_id', 'impressions', 'clicks', 'spend'],
                {
                    date_preset: 'yesterday',
                    level: 'campaign',
                }
            );

            return insights.map((insight: any) => ({
                campaignId: insight.campaign_id,
                campaignName: insight.campaign_name,
                impressions: parseInt(insight.impressions) || 0,
                clicks: parseInt(insight.clicks) || 0,
                spend: parseFloat(insight.spend) || 0,
            }));
        } catch (error: any) {
            logger.error('Facebook Insights API Error', { adAccountId, error: error.message });
            throw error;
        }
    }
}

class NotImplementedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotImplementedError";
    }
}
