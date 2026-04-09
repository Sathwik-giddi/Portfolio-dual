import { Router } from 'express';
import * as analyticsController from '../controllers/analytics.js';
import { authenticateJWT } from '../../middleware/auth.js';

const router = Router();

// All analytics routes are protected
router.use(authenticateJWT);

router.get('/summary', analyticsController.getSummary);
router.get('/performance', analyticsController.getPerformance);
router.get('/campaigns', analyticsController.getCampaignsList);
router.get('/ai-insights', analyticsController.getAIInsights);

export default router;
