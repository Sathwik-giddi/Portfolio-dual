import { type Request, type Response } from 'express';
import { logger } from '../../config/logger.js';
import crypto from 'node:crypto';

/**
 * Meta Policy Controller
 * Handles mandatory requirements for Meta App Review.
 */
export const handleDataDeletion = async (req: Request, res: Response) => {
    try {
        const signedRequest = req.body.signed_request;
        if (!signedRequest) {
            return res.status(400).json({ error: 'signed_request is required' });
        }

        const appSecret = process.env.META_APP_SECRET || '';

        // Split the signed request
        const [encodedSig, payload] = signedRequest.split('.');

        // Decode data
        const sig = Buffer.from(encodedSig.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
        const data = JSON.parse(Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());

        // Verify signature
        const expectedSig = crypto.createHmac('sha256', appSecret).update(payload).digest();

        if (!crypto.timingSafeEqual(sig, expectedSig)) {
            logger.warn('Invalid Meta data deletion signature');
            return res.status(400).json({ error: 'Invalid signature' });
        }

        logger.info('Meta Data Deletion Request received', { userId: data.user_id });

        // In a real app, you would queue a deletion job for this user's platform data.
        // For now, we return the confirmation URL as required by Meta.
        const confirmationCode = crypto.randomBytes(16).toString('hex');
        const url = `${process.env.APP_URL || 'http://localhost:5000'}/api/meta/deletion-status?code=${confirmationCode}`;

        res.json({
            url,
            confirmation_code: confirmationCode,
        });
    } catch (error: any) {
        logger.error('Meta Data Deletion Error', { error: error.message });
        res.status(500).json({ error: 'Failed to process deletion request' });
    }
};

export const getPrivacyPolicy = (req: Request, res: Response) => {
    res.json({
        project: 'ADS.ai',
        privacy_policy: `
      ADS.ai respects your privacy. We only access your Meta and Google Ads data
      to provide performance insights and analytics. We do not sell your data.
      You can request data deletion at any time through our platform or via Meta's
      data deletion callback.
    `,
        data_usage: [
            'Fetch campaign metrics for performance analysis',
            'Generate AI-driven recommendations',
            'Monitor for budget anomalies'
        ],
        contact: 'support@ads.ai'
    });
};
