
import { Router } from 'express';
import { authenticateJWT } from '../../middleware/auth.js';
import { prisma } from '../../config/db.js';
import { logger } from '../../config/logger.js';

const router = Router();

// GET /dashboard
// Returns aggregated stats and insights for the main dashboard
router.get('/', authenticateJWT, async (req: any, res) => {
    try {
        const userId = req.user.id;

        // 1. Check for Connected Account
        const connectedAccount = await prisma.connectedAccount.findFirst({
            where: {
                userId: userId,
                platform: 'meta'
            }
        });

        if (!connectedAccount) {
            return res.json({
                connected: false,
                summary: null,
                trends: [],
                insights: []
            });
        }

        // 2. Aggregate Metrics (Last 7 Days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const metrics = await prisma.campaignMetric.findMany({
            where: {
                campaign: {
                    connectedAccountId: connectedAccount.id
                },
                date: {
                    gte: sevenDaysAgo
                }
            },
            orderBy: { date: 'asc' }
        });

        // Calculate Totals
        const summary = {
            spend: metrics.reduce((acc, m) => acc + parseFloat(m.spend.toString()), 0),
            impressions: metrics.reduce((acc, m) => acc + m.impressions, 0),
            clicks: metrics.reduce((acc, m) => acc + m.clicks, 0),
            conversions: metrics.reduce((acc, m) => acc + m.conversions, 0),
            roas: 0 // Placeholder logic (Revenue / Spend) - we don't have revenue yet
        };

        // Calculate Trends (Group by Date)
        const trendsMap = new Map<string, any>();
        metrics.forEach(m => {
            const dateKey = m.date.toISOString().split('T')[0];
            if (!trendsMap.has(dateKey)) {
                trendsMap.set(dateKey, { date: dateKey, spend: 0, impressions: 0, clicks: 0, conversions: 0 });
            }
            const agg = trendsMap.get(dateKey);
            agg.spend += parseFloat(m.spend.toString());
            agg.impressions += m.impressions;
            agg.clicks += m.clicks;
            agg.conversions += m.conversions;
        });
        const trends = Array.from(trendsMap.values()).sort((a, b) => a.date.localeCompare(b.date));


        // 3. Fetch Latest AI Insights
        const insights = await prisma.aiInsight.findMany({
            where: { userId: userId },
            orderBy: { generatedAt: 'desc' },
            take: 3,
            include: {
                campaign: { select: { name: true } }
            }
        });

        res.json({
            connected: true,
            accountName: connectedAccount.platformAccountId, // Or fetch name from Graph API if stored
            summary,
            trends,
            insights: insights.map(i => ({
                id: i.id,
                text: i.insightText,
                campaignName: i.campaign?.name || 'General',
                severity: i.severity,
                date: i.generatedAt
            }))
        });

    } catch (error: any) {
        logger.error('Dashboard Stats Error', { error: error.message });
        res.status(500).json({ error: 'Failed to fetch dashboard data' });
    }
});

export default router;
