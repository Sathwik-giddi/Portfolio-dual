import cron from 'node-cron';
import { syncQueue } from '../config/queue.js';
import { logger } from '../config/logger.js';
import { TokenHealthService } from './token-health.js';

export const initScheduler = () => {
    logger.info('Initializing scheduler...');

    // Global Sync every 6 hours (Queue based)
    cron.schedule('0 */6 * * *', async () => {
        try {
            logger.info('Scheduling Global Sync Job');
            await syncQueue.add('sync-all', {}, {
                removeOnComplete: true,
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 5000,
                },
            });
        } catch (error: any) {
            logger.error('Scheduler Error (Queue Add)', { error: error.message });
        }
    });

    // Token Health Check every 24 hours (Midnight)
    cron.schedule('0 0 * * *', async () => {
        try {
            await TokenHealthService.checkAllTokens();
        } catch (error: any) {
            logger.error('Scheduler Error (Token Health)', { error: error.message });
        }
    });

    logger.info('Scheduler initialized.');
};
