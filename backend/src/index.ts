import 'dotenv/config'; // Must be first
import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import { prisma } from './config/db.js';
import authRoutes from './api/routes/auth.js';
import oauthRoutes from './api/routes/oauth.js';
import analyticsRoutes from './api/routes/analytics.js';
import notificationRoutes from './api/routes/notification.js';
import billingRoutes from './api/routes/billing.js';
import syncRoutes from './api/routes/sync.js';
import analysisRoutes from './api/routes/analysis.js';
import dashboardRoutes from './api/routes/dashboard.js';
import { initScheduler } from './services/scheduler.js';
import { initQueueWorker } from './config/queue.js';


const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
// Order is important: billing routes have their own raw body parser
app.use('/api/billing', billingRoutes);
app.use(express.json());

// Initialize Scheduler & Worker
initScheduler();
// // initQueueWorker();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/oauth', oauthRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/sync', syncRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Health Check
app.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'ADS.ai Backend'
    });
});

// Basic Root Route
app.get('/', (req: Request, res: Response) => {
    res.send('ADS.ai Backend API is running.');
});

async function startServer() {
    try {
        await prisma.$connect();
        console.log('Successfully connected to the database.');

        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    }
}

startServer();
