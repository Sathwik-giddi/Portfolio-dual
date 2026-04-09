import { type Response } from 'express';
import { prisma } from '../../config/db.js';
import { type AuthRequest } from '../../middleware/auth.js';
import { logger } from '../../config/logger.js';

/**
 * Fetches all notifications for the authenticated user.
 */
export const getNotifications = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const notifications = await (prisma as any).notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });

        res.json(notifications);
    } catch (error: any) {
        logger.error('Failed to fetch notifications', { userId, error: error.message });
        res.status(500).json({ error: 'Failed to fetch notifications' });
    }
};

/**
 * Marks a specific notification as read.
 */
export const markAsRead = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const { id } = req.params;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const notification = await (prisma as any).notification.findFirst({
            where: { id: id as string, userId },
        });

        if (!notification) {
            return res.status(404).json({ error: 'Notification not found' });
        }

        await (prisma as any).notification.update({
            where: { id: id as string },
            data: { read: true },
        });

        res.json({ success: true });
    } catch (error: any) {
        logger.error('Failed to update notification', { userId, notificationId: id, error: error.message });
        res.status(500).json({ error: 'Failed to update notification' });
    }
};

/**
 * Marks all user notifications as read.
 */
export const markAllAsRead = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    try {
        await (prisma as any).notification.updateMany({
            where: { userId, read: false },
            data: { read: true },
        });

        res.json({ success: true });
    } catch (error: any) {
        logger.error('Failed to mark all notifications as read', { userId, error: error.message });
        res.status(500).json({ error: 'Failed to update notifications' });
    }
};
