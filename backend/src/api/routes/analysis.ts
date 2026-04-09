
import { Router } from 'express';
import { authenticateJWT } from '../../middleware/auth.js';
import { AnalysisService } from '../../services/analysis.js';
import { logger } from '../../config/logger.js';
import { prisma } from '../../config/db.js';

const router = Router();

// POST /analysis/trigger
// Triggers an AI analysis for the connected Meta account of the logged-in user
router.post('/trigger', authenticateJWT, async (req: any, res) => {
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
            return res.status(404).json({ error: 'No connected Meta account found for this user. Connect an account first.' });
        }

        logger.info(`Triggering AI Analysis for user ${userId}, account ${connectedAccount.id}`);

        const result = await AnalysisService.analyzeAccount(connectedAccount.id);

        res.json({
            message: 'Analysis completed successfully',
            stats: result
        });

    } catch (error: any) {
        logger.error('Analysis Request Failed', { error: error.message });
        res.status(500).json({ error: error.message });
    }
});

export default router;
