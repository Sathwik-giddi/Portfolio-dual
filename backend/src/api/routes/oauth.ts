import { Router } from 'express';
import * as oauthController from '../controllers/oauth.js';
import * as metaPolicyController from '../controllers/meta-policy.js';
import { authenticateJWT } from '../../middleware/auth.js';

const router = Router();

// Initiation endpoints (Protected)
router.get('/facebook', authenticateJWT, oauthController.facebookInitiate);
router.get('/google', authenticateJWT, oauthController.googleInitiate);

// Callback endpoints (Redirected from Platforms)
router.get('/facebook/callback', authenticateJWT, oauthController.facebookCallback);
router.get('/google/callback', authenticateJWT, oauthController.googleCallback);

// Meta Policy Endpoints (Public)
router.post('/facebook/data-deletion', metaPolicyController.handleDataDeletion);
router.get('/privacy', metaPolicyController.getPrivacyPolicy);

export default router;
