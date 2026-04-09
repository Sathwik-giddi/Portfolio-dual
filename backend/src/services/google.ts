import { GoogleAdsApi } from 'google-ads-api';
import axios from 'axios';
import { logger } from '../config/logger.js';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN || '';

export class GoogleService {
    /**
     * Generates the Google OAuth URL.
     */
    static getGoogleAuthUrl(redirectUri: string): string {
        const scope = 'https://www.googleapis.com/auth/adwords';
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&response_type=code&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`;

        logger.debug('Generated Google OAuth URL', { redirectUri });
        return url;
    }

    /**
     * Exchanges auth code for refresh token using axios for stability.
     */
    static async handleGoogleCallback(code: string, redirectUri: string) {
        try {
            logger.info('Exchanging Google auth code for tokens via OAuth2 API');

            const response = await axios.post('https://oauth2.googleapis.com/token', {
                code,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            });

            const { refresh_token } = response.data;

            if (!refresh_token) {
                logger.warn('Google auth response missing refresh token (likely already consent-given)');
                throw new Error('No refresh token returned. Please disconnect and reconnect your Google account.');
            }

            const client = new GoogleAdsApi({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                developer_token: DEVELOPER_TOKEN,
            });

            // Fetch accessible customers
            const responseCustomers = await client.listAccessibleCustomers(refresh_token) as any;
            const resourceNames = responseCustomers.resource_names || responseCustomers;

            if (!resourceNames || resourceNames.length === 0) {
                throw new Error('No Google Ads accounts found for this user.');
            }

            const firstResource = resourceNames[0];
            const customerId = firstResource.includes('/') ? firstResource.split('/')[1] : firstResource;

            logger.info(`Found ${resourceNames.length} Google Ads accounts`, { customerId });

            return {
                refreshToken: refresh_token,
                customerId,
            };
        } catch (error: any) {
            const errorMsg = error.response?.data || error.message;
            logger.error('Google OAuth Error', { error: errorMsg });
            throw new Error(`Google OAuth failed: ${error.message}`);
        }
    }

    /**
     * Fetches insights for a specific Google Ads customer.
     */
    static async getCustomerInsights(refreshToken: string, customerId: string) {
        try {
            logger.debug('Fetching insights for Google Ads Customer', { customerId });

            const client = new GoogleAdsApi({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                developer_token: DEVELOPER_TOKEN,
            });

            const customer = client.Customer({
                customer_id: customerId,
                refresh_token: refreshToken,
            });

            const results = await customer.report({
                entity: 'campaign',
                attributes: [
                    'campaign.id',
                    'campaign.name',
                    'campaign.status'
                ],
                metrics: [
                    'metrics.impressions',
                    'metrics.clicks',
                    'metrics.cost_micros',
                ],
                segments: ['segments.date'],
                date_constant: 'YESTERDAY',
            });

            return results.map((row: any) => ({
                campaignId: row.campaign.id?.toString() || '',
                campaignName: row.campaign.name || 'Untitled Campaign',
                impressions: row.metrics.impressions || 0,
                clicks: row.metrics.clicks || 0,
                spend: (row.metrics.cost_micros || 0) / 1000000,
                status: row.campaign.status || 'UNKNOWN',
            }));
        } catch (error: any) {
            logger.error('Google Ads Insights API Error', { customerId, error: error.message });
            throw error;
        }
    }
}
