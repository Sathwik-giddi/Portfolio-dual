import { type Response } from 'express';
import { prisma } from '../../config/db.js';
import { type AuthRequest } from '../../middleware/auth.js';
import { AIService } from '../../services/ai.js';
import { UsageService } from '../../services/usage.js';
import { logger } from '../../config/logger.js';



export const getSummary = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const summary = await prisma.campaignMetric.aggregate({
            where: {
                campaign: {
                    connectedAccount: {
                        userId,
                    },
                },
            },
            _sum: {
                spend: true,
                impressions: true,
                clicks: true,
            },
        });

        const totalSpend = Number(summary._sum.spend || 0);
        const totalImpressions = summary._sum.impressions || 0;
        const totalClicks = summary._sum.clicks || 0;
        const ctr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;

        if (userId) {
            UsageService.track(userId, 'VIEW_DASHBOARD', {
                spend: totalSpend,
                platform_mix: 'meta+google'
            });
        }

        res.json({
            totalSpend,
            totalImpressions,
            totalClicks,
            ctr: parseFloat(ctr.toFixed(2)),
        });
    } catch (error: any) {
        logger.error('Failed to fetch analytics summary', { userId, error: error.message });
        res.status(500).json({ error: 'Failed to fetch summary' });
    }
};

export const getPerformance = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const { date_from, date_to } = req.query;

    try {
        const metrics = await prisma.campaignMetric.groupBy({
            by: ['date'],
            where: {
                campaign: {
                    connectedAccount: {
                        userId,
                    },
                },
                date: {
                    gte: date_from ? new Date(date_from as string) : undefined,
                    lte: date_to ? new Date(date_to as string) : undefined,
                },
            },
            _sum: {
                spend: true,
                impressions: true,
                clicks: true,
            },
            orderBy: {
                date: 'asc',
            },
        });

        const formattedMetrics = metrics.map((m) => ({
            date: m.date.toISOString().split('T')[0],
            spend: Number(m._sum.spend || 0),
            impressions: m._sum.impressions || 0,
            clicks: m._sum.clicks || 0,
        }));

        res.json(formattedMetrics);
    } catch (error: any) {
        logger.error('Failed to fetch performance metrics', { userId, error: error.message });
        res.status(500).json({ error: 'Failed to fetch performance data' });
    }
};

export const getCampaignsList = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    try {
        const campaigns = await prisma.campaign.findMany({
            where: {
                connectedAccount: {
                    userId,
                },
            },
            include: {
                metrics: {
                    orderBy: {
                        date: 'desc',
                    },
                    take: 1,
                },
            },
        });

        const formattedCampaigns = campaigns.map((c) => ({
            id: c.id,
            name: c.name,
            platform: c.platform,
            status: c.status,
            latestMetrics: c.metrics[0] || null,
        }));

        res.json(formattedCampaigns);
    } catch (error: any) {
        logger.error('Failed to fetch campaigns list', { userId, error: error.message });
        res.status(500).json({ error: 'Failed to fetch campaigns' });
    }
};

export const getAIInsights = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;
    const { campaign_id } = req.query;

    if (!campaign_id || typeof campaign_id !== 'string') {
        return res.status(400).json({ error: 'campaign_id is required' });
    }

    try {
        const campaign = await prisma.campaign.findUnique({
            where: { id: campaign_id },
            include: {
                metrics: {
                    orderBy: { date: 'desc' },
                    take: 7,
                },
            },
        });

        if (!campaign) {
            return res.status(404).json({ error: 'Campaign not found' });
        }

        // Verify ownership
        const account = await prisma.connectedAccount.findUnique({
            where: { id: campaign.connectedAccountId },
        });

        if (account?.userId !== userId) {
            return res.status(403).json({ error: 'Unauthorized to view this campaign' });
        }

        const insights = await AIService.generateInsights(campaign.name, campaign.metrics);

        if (userId) {
            UsageService.track(userId, 'GENERATE_INSIGHT', {
                campaignId: campaign.id,
                campaignName: campaign.name
            });
        }

        res.json({ campaignId: campaign.id, insights });
    } catch (error: any) {
        logger.error('Failed to generate AI insights', { userId, campaignId: campaign_id, error: error.message });
        res.status(500).json({ error: 'Failed to generate insights', details: error.message });
    }
};
