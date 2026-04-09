
import OpenAI from 'openai';
import { logger } from '../config/logger.js';

// OpenRouter uses the OpenAI SDK
let openai: OpenAI | null = null;

export class AIService {
    /**
     * Initializes the OpenAI/OpenRouter client if not already initialized.
     */
    private static init() {
        if (!openai) {
            const API_KEY = process.env.OPENROUTER_API_KEY;
            if (!API_KEY) {
                // In production might want to throw, but for dev logged warning is okay if we handle it gracefully
                logger.warn('OPENROUTER_API_KEY is not configured');
                return false;
            }
            openai = new OpenAI({
                apiKey: API_KEY,
                baseURL: 'https://openrouter.ai/api/v1',
            });
        }
        return true;
    }

    /**
     * Sends a generic chat prompt to the LLM and returns the response text.
     */
    static async chat(prompt: string, systemRole = 'You are a helpful AI assistant.'): Promise<string> {
        try {
            if (!this.init() || !openai) {
                return "AI Service is not configured (Missing API Key).";
            }

            logger.debug('Sending prompt to AI', { promptLength: prompt.length });

            const completion = await openai.chat.completions.create({
                model: 'meta-llama/llama-3.2-3b-instruct:free', // Switching to lighter free model
                messages: [
                    { role: 'system', content: systemRole },
                    { role: 'user', content: prompt }
                ],
            });

            const response = completion.choices[0].message.content || 'No response generated.';
            return response;
        } catch (error: any) {
            logger.error('AI Chat Error', { error: error.message });

            // Mock Fallback for Development/Demo specific errors (429, 500, etc)
            if (process.env.NODE_ENV !== 'production') {
                logger.warn('Returning Mock Insight due to AI Error');
                return `**Trend**: Performance is stable with a slight upward trend in spend.\n**Diagnosis**: High CPC in the last 2 days suggests increased competition.\n**Action**: Consider refining the audience targeting to exclude low-performing segments.`;
            }

            throw new Error(`AI Request Failed: ${error.message}`);
        }
    }
}
