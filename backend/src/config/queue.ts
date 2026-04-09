import { Queue, Worker } from 'bullmq';
import { Redis } from 'ioredis';
import { SyncService } from '../services/sync.js';
import { logger } from './logger.js';

// const connection = new Redis({
//     host: process.env.REDIS_HOST || 'localhost',
//     port: Number(process.env.REDIS_PORT) || 6379,
//     maxRetriesPerRequest: null,
// });

export const syncQueue = { add: () => { } } as any; // new Queue('sync-queue', { connection: connection as any });

export const initQueueWorker = () => {
    const worker = new Worker(
        'sync-queue',
        async (job) => {
            logger.info('Processing sync job', { jobId: job.id, type: job.name });

            try {
                if (job.name === 'sync-all') {
                    await SyncService.syncAllAccounts();
                } else if (job.name === 'sync-meta') {
                    // Logic for specific platform syncs could go here if we split them
                    await SyncService.syncAllMetaAccounts();
                } else if (job.name === 'sync-google') {
                    await SyncService.syncAllGoogleAccounts();
                }
            } catch (error: any) {
                logger.error('Job failed', { jobId: job.id, error: error.message });
                throw error;
            }
        },
        { connection: connection as any }
    );

    worker.on('completed', (job) => {
        logger.info('Job completed', { jobId: job.id });
    });

    worker.on('failed', (job, err) => {
        logger.error('Job failed completely', { jobId: job?.id, error: err.message });
    });

    logger.info('Queue worker initialized');
};
