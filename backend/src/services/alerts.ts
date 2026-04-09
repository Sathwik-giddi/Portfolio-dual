import { prisma } from '../config/db.js';
import { logger } from '../config/logger.js';

export class AlertService {
    /**
     * Detects significant changes in metrics and persists alerts as Notifications.
     */
    static async detectAnomalies(userId: string, campaignName: string, current: any, previous: any) {
        if (!previous) return;

        const spendChange = this.calculateChange(current.spend, previous.spend);
        const clicksChange = this.calculateChange(current.clicks, previous.clicks);

        if (spendChange > 0.5) {
            const msg = `Significant SPEND increase for ${campaignName} (${(spendChange * 100).toFixed(0)}% increase)`;
            logger.warn(`ALERT: ${msg}`, { current: current.spend, previous: previous.spend });

            await (prisma as any).notification.create({
                data: {
                    userId,
                    type: 'ALERT',
                    message: msg,
                },
            });
        }

        if (clicksChange < -0.5 && previous.clicks > 10) {
            const msg = `Significant CLICKS drop for ${campaignName} (${Math.abs(clicksChange * 100).toFixed(0)}% decrease)`;
            logger.warn(`ALERT: ${msg}`, { current: current.clicks, previous: previous.clicks });

            await (prisma as any).notification.create({
                data: {
                    userId,
                    type: 'ALERT',
                    message: msg,
                },
            });
        }
    }

    private static calculateChange(current: number, previous: number): number {
        if (previous === 0) return current > 0 ? 1 : 0;
        return (current - previous) / previous;
    }
}
