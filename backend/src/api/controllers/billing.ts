import { type Request, type Response } from 'express';
import { type AuthRequest } from '../../middleware/auth.js';
import { BillingService } from '../../services/billing.js';
import { logger } from '../../config/logger.js';

/**
 * Creates a checkout session for a specific plan.
 */
export const createSession = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const { plan } = req.body;

    if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!['PRO', 'ENTERPRISE'].includes(plan)) {
        return res.status(400).json({ error: 'Invalid plan' });
    }

    try {
        const url = await BillingService.createCheckoutSession(userId, plan);
        res.json({ url });
    } catch (error: any) {
        logger.error('Failed to create checkout session', { userId, error: error.message });
        res.status(500).json({ error: 'Failed to create payment session' });
    }
};

/**
 * Handles Stripe webhook events.
 */
export const handleWebhook = async (req: Request, res: Response) => {
    const sig = req.headers['stripe-signature'] as string;

    try {
        // Note: req.body must be the raw buffer for signature verification
        await BillingService.handleWebhook(req.body, sig);
        res.json({ received: true });
    } catch (error: any) {
        logger.error('Webhook processing failed', { error: error.message });
        res.status(400).send(`Webhook Error: ${error.message}`);
    }
};
