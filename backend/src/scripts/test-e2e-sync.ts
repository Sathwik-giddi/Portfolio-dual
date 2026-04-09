
import axios from 'axios';
import { prisma } from '../config/db.js';

const API_URL = 'http://localhost:5001/api';
const EMAIL = 'nothing@gmail.com';
const PASSWORD = 'welcome@123';

async function runTest() {
    try {
        console.log('--- Starting E2E Mock Sync Test ---');

        // 1. Login
        console.log('1. Logging in...');
        const loginRes = await axios.post(`${API_URL}/auth/login`, {
            email: EMAIL,
            password: PASSWORD
        });
        const token = loginRes.data.token;
        console.log('✅ Logged in. Token obtained.');

        // 2. Connect Mock Meta Account (Simulate Callback)
        console.log('2. Linking Mock Meta Account...');
        // The callback expects a 'code' query param. 
        // For mock flow, code must start with 'mock_code_'
        await axios.get(`${API_URL}/oauth/facebook/callback?code=mock_code_test_123`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Mock Meta Account Linked.');

        // 3. Trigger Sync
        console.log('3. Triggering Manual Sync...');
        const syncRes = await axios.post(`${API_URL}/sync/meta`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Sync Response:', syncRes.data);

        // 4. Verify DB Data
        console.log('4. Verifying Database Records...');
        const campaigns = await prisma.campaign.findMany();
        const ads = await prisma.ad.findMany();
        const metrics = await prisma.adMetric.findMany();

        console.log(`- Campaigns: ${campaigns.length}`);
        console.log(`- Ads: ${ads.length}`);
        console.log(`- Metrics: ${metrics.length}`);

        if (campaigns.length > 0 && ads.length > 0 && metrics.length > 0) {
            console.log('🎉 SUCCESS: Data synced successfully!');
        } else {
            console.error('❌ FAILURE: Data missing in DB.');
            process.exit(1);
        }

        // 5. Trigger AI Analysis
        console.log('5. Triggering AI Analysis...');
        const analysisRes = await axios.post(`${API_URL}/analysis/trigger`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Analysis Response:', analysisRes.data);

        // 6. Verify Insights
        console.log('6. Verifying AI Insights...');
        const insights = await prisma.aiInsight.findMany();
        console.log(`- Insights Generated: ${insights.length}`);

        if (insights.length > 0) {
            console.log('🎉 SUCCESS: AI Insights generated!');
            console.log('--- Insight Example ---');
            console.log(insights[0].insightText);
            console.log('-----------------------');
        } else {
            console.error('❌ FAILURE: No insights found.');
            process.exit(1);
        }

    } catch (error: any) {
        console.error('❌ Test Failed:', error.response?.data || error.message);
        process.exit(1);
    }
}

runTest();

