import Stripe from 'stripe';
import { prisma } from '../config/db.js';
import { logger } from '../config/logger.js';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
    apiVersion: '2025-01-27' as any,
});

export class BillingService {
    /**
     * Creates a Stripe Checkout Session for a subscription.
     */
    static async createCheckoutSession(userId: string, plan: 'PRO' | 'ENTERPRISE') {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new Error('User not found');

        let stripeCustomerId = user.stripeCustomerId;

        if (!stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: user.email,
                metadata: { userId },
            });
            stripeCustomerId = customer.id;
            await prisma.user.update({
                where: { id: userId },
                data: { stripeCustomerId },
            });
        }

        const priceId = plan === 'PRO' ? process.env.STRIPE_PRICE_PRO : process.env.STRIPE_PRICE_ENTERPRISE;

        if (!priceId) throw new Error(`Price ID for ${plan} not configured`);

        const session = await stripe.checkout.sessions.create({
            customer: stripeCustomerId,
            payment_method_types: ['card'],
            line_items: [{ price: priceId, quantity: 1 }],
            mode: 'subscription',
            success_url: `${process.env.FRONTEND_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/billing`,
            metadata: { userId, plan },
        });

        return session.url;
    }

    /**
     * Handles Stripe Webhooks.
     */
    static async handleWebhook(payload: string, sig: string) {
        let event;

        try {
            event = stripe.webhooks.constructEvent(
                payload,
                sig,
                process.env.STRIPE_WEBHOOK_SECRET || ''
            );
        } catch (err: any) {
            logger.error('Stripe Webhook Signature Verification Failed', { error: err.message });
            throw new Error(`Webhook Error: ${err.message}`);
        }

        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object as Stripe.Checkout.Session;
                await this.handleSubscriptionSuccess(session);
                break;
            case 'customer.subscription.deleted':
                const subscription = event.data.object as Stripe.Subscription;
                await this.handleSubscriptionDeleted(subscription);
                break;
            default:
                logger.debug(`Unhandled Stripe event type ${event.type}`);
        }
    }

    private static async handleSubscriptionSuccess(session: Stripe.Checkout.Session) {
        const userId = session.metadata?.userId;
        const plan = session.metadata?.plan;

        if (userId && plan) {
            await prisma.user.update({
                where: { id: userId },
                data: { subscriptionPlan: plan },
            });
            logger.info('User subscription updated', { userId, plan });
        }
    }

    private static async handleSubscriptionDeleted(subscription: Stripe.Subscription) {
        const customerId = subscription.customer as string;
        const user = await prisma.user.findUnique({ where: { stripeCustomerId: customerId } });

        if (user) {
            await prisma.user.update({
                where: { id: user.id },
                data: { subscriptionPlan: 'FREE' },
            });
            logger.info('User subscription cancelled', { userId: user.id });
        }
    }
}
