import { type Request, type Response } from 'express';
import { prisma } from '../../config/db.js';
import { FacebookService } from '../../services/facebook.js';
import { GoogleService } from '../../services/google.js';
import { encrypt } from '../../services/encryption.js';
import { type AuthRequest } from '../../middleware/auth.js';
import { logger } from '../../config/logger.js';

const META_REDIRECT_URI = process.env.META_REDIRECT_URI || 'http://localhost:5000/api/oauth/callback/meta';
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:5000/api/oauth/callback/google';

export const facebookInitiate = (req: AuthRequest, res: Response) => {
    logger.info('User initiated Facebook connection', { userId: req.user?.userId });
    const url = FacebookService.getFacebookAuthUrl(META_REDIRECT_URI);
    res.json({ url });
};

export const googleInitiate = (req: AuthRequest, res: Response) => {
    logger.info('User initiated Google connection', { userId: req.user?.userId });
    const url = GoogleService.getGoogleAuthUrl(GOOGLE_REDIRECT_URI);
    res.json({ url });
};

export const facebookCallback = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const { code } = req.query;

        if (!code || typeof code !== 'string') {
            logger.warn('Facebook callback received without code', { userId });
            return res.status(400).json({ error: 'Authorization code is required' });
        }

        if (!userId) {
            logger.error('Facebook callback received without authenticated user');
            return res.status(401).json({ error: 'User not authenticated' });
        }

        logger.info('Processing Facebook OAuth callback', { userId });

        // 1. Exchange code for long-lived token and ad account info
        const { accessToken, adAccountId, accountName } = await FacebookService.handleFacebookCallback(
            code,
            META_REDIRECT_URI
        );

        // 2. Encrypt sensitive data
        const encryptedToken = encrypt(accessToken);

        // 3. Save to ConnectedAccount
        const connectedAccount = await prisma.connectedAccount.upsert({
            where: {
                userId_platform_platformAccountId: {
                    userId,
                    platform: 'meta',
                    platformAccountId: adAccountId,
                },
            },
            update: {
                encryptedAccessToken: encryptedToken,
                lastSyncedAt: new Date(),
            },
            create: {
                userId,
                platform: 'meta',
                platformAccountId: adAccountId,
                encryptedAccessToken: encryptedToken,
            },
        });

        logger.info('Meta account connected and tokens stored securely', {
            userId,
            accountId: connectedAccount.id,
            platformAccountId: adAccountId
        });

        res.json({
            status: 'success',
            message: 'Meta account connected successfully',
            account: {
                id: connectedAccount.id,
                platformAccountId: adAccountId,
                accountName,
            },
        });
    } catch (error: any) {
        logger.error('Failed to connect Meta account during callback', {
            userId,
            error: error.message,
            stack: error.stack
        });
        res.status(500).json({ error: 'Failed to connect Meta account', details: error.message });
    }
};

export const googleCallback = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const { code } = req.query;

        if (!code || typeof code !== 'string') {
            logger.warn('Google callback received without code', { userId });
            return res.status(400).json({ error: 'Authorization code is required' });
        }

        if (!userId) {
            logger.error('Google callback received without authenticated user');
            return res.status(401).json({ error: 'User not authenticated' });
        }

        logger.info('Processing Google OAuth callback', { userId });

        // 1. Exchange code for refresh token and customer ID
        const { refreshToken, customerId } = await GoogleService.handleGoogleCallback(
            code,
            GOOGLE_REDIRECT_URI
        );

        // 2. Encrypt sensitive data
        const encryptedToken = encrypt(refreshToken);

        // 3. Save to ConnectedAccount
        const connectedAccount = await prisma.connectedAccount.upsert({
            where: {
                userId_platform_platformAccountId: {
                    userId,
                    platform: 'google',
                    platformAccountId: customerId,
                },
            },
            update: {
                encryptedAccessToken: encryptedToken,
                lastSyncedAt: new Date(),
            },
            create: {
                userId,
                platform: 'google',
                platformAccountId: customerId,
                encryptedAccessToken: encryptedToken,
            },
        });

        logger.info('Google account connected and refresh token stored securely', {
            userId,
            accountId: connectedAccount.id,
            platformAccountId: customerId
        });

        res.json({
            status: 'success',
            message: 'Google account connected successfully',
            account: {
                id: connectedAccount.id,
                platformAccountId: customerId,
            },
        });
    } catch (error: any) {
        logger.error('Failed to connect Google account during callback', {
            userId,
            error: error.message,
            stack: error.stack
        });
        res.status(500).json({ error: 'Failed to connect Google account', details: error.message });
    }
};
