"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/footer";
import { Quote, Star, TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

// --- Components ---

// 1. Infinite Logo Marquee
const LogoMarquee = () => {
    const logos = [
        "Shopify", "Notion", "Loom", "Intercom", "Figma", "Linear", "Vercel", "Stripe", "Airbnb", "Coinbase"
    ];

    return (
        <div className="relative flex overflow-hidden py-10 group">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F0EBFA] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F0EBFA] to-transparent z-10" />

            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="flex gap-16 whitespace-nowrap"
            >
                {[...logos, ...logos, ...logos].map((logo, i) => (
                    <span key={i} className="text-3xl font-bold text-slate-300 hover:text-purple-600 transition-colors uppercase tracking-tight cursor-default">
                        {logo}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

// 2. Testimonial Card
const TestimonialCard = ({ quote, index }: { quote: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-white/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/60 hover:bg-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
        >
            {/* Background Glow */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${quote.glow} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

            <div className="relative z-10">
                {/* Header: Logo & Metric */}
                <div className="flex items-start justify-between mb-8">
                    <div className="px-3 py-1 bg-white/50 backdrop-blur-md rounded-lg border border-white/50 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        {quote.company}
                    </div>
                    <div className="flex items-center gap-2 text-green-600 bg-green-50/80 px-3 py-1 rounded-full border border-green-100">
                        <quote.metricIcon className="w-4 h-4" />
                        <span className="text-xs font-bold font-mono">{quote.metric}</span>
                    </div>
                </div>

                {/* Quote */}
                <div className="mb-10 relative">
                    <Quote className="absolute -top-4 -left-4 w-10 h-10 text-slate-900/5 group-hover:text-purple-500/20 transition-colors duration-500" />
                    <p className="text-xl md:text-2xl font-serif text-slate-900 leading-relaxed relative z-10">
                        "{quote.text}"
                    </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-white shadow-lg overflow-hidden relative">
                        <img src={quote.avatar} alt={quote.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="font-bold text-slate-900 text-lg">{quote.author}</div>
                        <div className="text-sm text-slate-500 font-medium">{quote.role}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


const quotes = [
    {
        text: "We moved from vanity metrics to real profit attribution in weeks. The ROAS lift was undeniable.",
        author: "Sarah Jenkins",
        role: "CMO, TechFlow",
        company: "TechFlow",
        metric: "+310% ROAS",
        metricIcon: TrendingUp,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        glow: "from-blue-400 to-cyan-300"
    },
    {
        text: "The automation capabilities alone saved us 20 hours a week of manual bidding work. It's like having an extra team member.",
        author: "Marcus Chen",
        role: "Head of Growth, ScaleUp",
        company: "ScaleUp",
        metric: "20hrs Saved/Wk",
        metricIcon: Clock,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        glow: "from-purple-400 to-pink-300"
    },
    {
        text: "Finally, a platform that understands regulatory compliance for fintech without sacrificing performance.",
        author: "Elena Rodriguez",
        role: "VP Marketing, SecureBank",
        company: "SecureBank",
        metric: "Zero Incidents",
        metricIcon: ShieldCheck,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
        glow: "from-green-400 to-emerald-300"
    },
    {
        text: "The AI creative suggestions are surprisingly good. They often outperform our agency-designed assets by a wide margin.",
        author: "David Kim",
        role: "Director of UA, GameStudio",
        company: "GameStudio",
        metric: "2.5x CTR Lift",
        metricIcon: Zap,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        glow: "from-orange-400 to-yellow-300"
    }
];

export default function CustomersPage() {
    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-purple-300 selection:text-black">

            <main className="pt-32 pb-20">

                {/* Hero */}
                <section className="container mx-auto px-6 mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-8"
                    >
                        <div className="bg-white/50 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 shadow-sm">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            Customer Success
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-serif font-medium tracking-tighter text-slate-900 mb-6"
                    >
                        The Wall of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Love</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16 font-light">
                        Don't just take our word for it. <br />
                        See how fast-moving teams are scaling with AdCoach.
                    </p>
                </section>

                {/* Logo Marquee */}
                <section className="mb-32 border-y border-white/20 bg-white/20 backdrop-blur-sm">
                    <LogoMarquee />
                </section>

                {/* Testimonials Grid */}
                <section className="container mx-auto px-6 max-w-7xl mb-32">
                    <div className="grid md:grid-cols-2 gap-8">
                        {quotes.map((quote, idx) => (
                            <TestimonialCard key={idx} quote={quote} index={idx} />
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-6 text-center">
                    <div className="py-20 relative rounded-[3rem] overflow-hidden bg-slate-900 text-white">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto px-4">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to write your story?</h2>
                            <p className="text-slate-300 text-lg mb-10">
                                Join 5,000+ marketers scaling their reach today.
                            </p>
                            <button className="bg-white text-slate-900 rounded-full px-10 py-5 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
