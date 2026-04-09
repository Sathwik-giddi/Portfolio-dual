
import { prisma } from '../config/db.js';
import { AIService } from './ai.js';
import { logger } from '../config/logger.js';

export class AnalysisService {
    /**
     * Triggers AI analysis for a specific Connected Account.
     * Iterates through campaigns and generates insights based on recent performance.
     */
    static async analyzeAccount(connectedAccountId: string) {
        logger.info(`Starting AI Analysis for account: ${connectedAccountId}`);

        const account = await prisma.connectedAccount.findUnique({
            where: { id: connectedAccountId },
            include: {
                campaigns: {
                    where: { status: 'ACTIVE' }, // Only analyze active campaigns
                    include: {
                        metrics: {
                            orderBy: { date: 'desc' },
                            take: 7 // Last 7 days
                        }
                    }
                }
            }
        });

        if (!account) {
            throw new Error(`Connected Account not found: ${connectedAccountId}`);
        }

        const stats = {
            analyzed: 0,
            insightsGenerated: 0,
            failed: 0
        };

        // Analyze each campaign
        for (const campaign of account.campaigns) {
            try {
                stats.analyzed++;

                if (campaign.metrics.length < 1) {
                    logger.debug(`Skipping campaign ${campaign.name} - Not enough data points (${campaign.metrics.length})`);
                    continue;
                }

                // Construct Prompt
                const metricsSummary = campaign.metrics
                    .map(m => `- Date: ${m.date.toISOString().split('T')[0]}, Spend: $${m.spend}, Impr: ${m.impressions}, Clicks: ${m.clicks}, Conv: ${m.conversions}`)
                    .join('\n');

                const prompt = `
                    Analyze the performance of the following ad campaign and provide actionable optimization advice.
                    
                    **Campaign**: "${campaign.name}"
                    **Daily Budget**: $${campaign.dailyBudget || 'N/A'}
                    
                    **Last 7 Days Metrics**:
                    ${metricsSummary}
                    
                    **Instructions**:
                    1. **Identify the Trend**: Is performance (CPA, CTR, ROAS) improving or declining?
                    2. **Diagnose the Root Cause**: e.g., "High CPC suggests audience saturation" or "Low CTR indicates creative fatigue".
                    3. **Recommend ONE High-Impact Action**: Be specific (e.g., "Pause ads with CTR < 0.8%", "Increase budget by 20%").
                    
                    **Output Format**:
                    Provide the response in plain text with a clear "Insight" and "Recommended Action" section. Keep it concise (under 50 words).
                `;

                // Call AI
                const insightText = await AIService.chat(prompt, 'You are an expert Ad Performance Analyst.');

                // Store Insight
                await prisma.aiInsight.create({
                    data: {
                        userId: account.userId,
                        campaignId: campaign.id,
                        insightText: insightText,
                        severity: 'medium', // Default, could be determined by AI in JSON mode
                        generatedAt: new Date()
                    }
                });

                stats.insightsGenerated++;
                logger.info(`Generated insight for campaign: ${campaign.name}`);

            } catch (error: any) {
                stats.failed++;
                console.error('CRITICAL ANALYSIS ERROR:', error);
                logger.error(`Failed to analyze campaign ${campaign.id}`, { error: error.message });
            }
        }

        logger.info('AI Analysis Completed', stats);
        return stats;
    }
}
