
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env from backend root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { AIService } from '../services/ai.js';

async function testAI() {
    console.log('Testing OpenRouter AI Service...');

    const mockMetrics = [
        { date: new Date(), spend: 100, impressions: 5000, clicks: 120 }
    ];

    try {
        const insights = await AIService.generateInsights('Test Campaign', mockMetrics);
        console.log('✅ AI Response received:');
        console.log(insights);
    } catch (error: any) {
        console.error('❌ AI Service Error:', error.message);
    }
}

testAI();
