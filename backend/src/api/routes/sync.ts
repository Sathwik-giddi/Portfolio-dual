
import { Router } from 'express';
import { authenticateJWT } from '../../middleware/auth.js';
import { MetaSyncService } from '../../services/metaSync.js';
import { logger } from '../../config/logger.js';
import { prisma } from '../../config/db.js';

const router = Router();

// POST /sync/meta
// Triggers a manual sync for the connected Meta account of the logged-in user
router.post('/meta', authenticateJWT, async (req: any, res) => {
    try {
        const userId = req.user.id;

        // Find the connected Meta account for this user
        const connectedAccount = await prisma.connectedAccount.findFirst({
            where: {
                userId: userId,
                platform: 'meta'
            }
        });

        if (!connectedAccount) {
            return res.status(404).json({ error: 'No connected Meta account found for this user.' });
        }

        logger.info(`Triggering manual Meta sync for user ${userId}, account ${connectedAccount.id}`);

        const result = await MetaSyncService.syncAccount(connectedAccount.id);

        res.json({
            message: 'Sync completed successfully',
            details: result
        });

    } catch (error: any) {
        logger.error('Manual Sync Failed', { error: error.message });
        res.status(500).json({ error: error.message });
    }
});

export default router;
