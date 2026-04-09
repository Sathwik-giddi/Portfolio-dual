import express, { Router } from 'express';
import * as billingController from '../controllers/billing.js';
import { authenticateJWT } from '../../middleware/auth.js';

const router = Router();

// Checkout Session (Protected)
router.post('/create-session', authenticateJWT, billingController.createSession);

// Webhook (Public, needs RAW body)
router.post('/webhook', express.raw({ type: 'application/json' }), billingController.handleWebhook);

export default router;
