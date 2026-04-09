import { prisma } from '../config/db.js';
import { logger } from '../config/logger.js';

export class UsageService {
    /**
     * Tracks a user interaction event.
     */
    static async track(userId: string, eventType: string, metadata: any = {}) {
        try {
            // Fire-and-forget: we don't await this to avoid blocking the response
            (prisma as any).usageEvent.create({
                data: {
                    userId,
                    eventType,
                    metadata,
                },
            }).catch((err: any) => {
                logger.error('Failed to track usage event', { userId, eventType, error: err.message });
            });

            logger.debug('Usage event tracked', { userId, eventType });
        } catch (error: any) {
            logger.error('Usage tracking error', { error: error.message });
        }
    }
}
