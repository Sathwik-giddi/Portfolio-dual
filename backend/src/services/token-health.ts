import { prisma } from '../config/db.js';
import { logger } from '../config/logger.js';

// Meta long-lived tokens are valid for 60 days (5,184,000 seconds)
const META_TOKEN_LIFESPAN_DAYS = 60;
const WARNING_THRESHOLD_DAYS = 15;

export class TokenHealthService {
    /**
     * Checks the health of all connected account tokens.
     */
    static async checkAllTokens() {
        logger.info('Starting token health check...');
        const accounts = await prisma.connectedAccount.findMany();

        for (const account of accounts) {
            try {
                await this.evaluateAccountHealth(account);
            } catch (error: any) {
                logger.error(`Error checking health for account ${account.id}`, { error: error.message });
            }
        }
        logger.info('Token health check completed.');
    }

    /**
     * Evaluates the health of a specific account based on token age.
     */
    private static async evaluateAccountHealth(account: any) {
        const now = new Date();
        const updatedAt = new Date(account.updatedAt);

        // Calculate days passed since last token update
        const diffTime = Math.abs(now.getTime() - updatedAt.getTime());
        const daysPassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const daysRemaining = META_TOKEN_LIFESPAN_DAYS - daysPassed;

        if (daysRemaining <= 0) {
            logger.warn('Token EXPIRED for account', {
                accountId: account.id,
                platform: account.platform,
                platformAccountId: account.platformAccountId
            });
            // Here you could update a DB status like 'EXPIRED'
        } else if (daysRemaining <= WARNING_THRESHOLD_DAYS) {
            logger.info('Token expiring soon', {
                accountId: account.id,
                daysRemaining,
                platform: account.platform
            });
            // Here you could trigger a notification or prompt for re-auth
        } else {
            logger.debug('Token is healthy', {
                accountId: account.id,
                daysRemaining
            });
        }
    }
}
