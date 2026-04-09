"use client";

import {
    ShoppingBag, Landmark, Laptop, Stethoscope, X, ArrowRight, Activity, Globe, ShieldCheck,
    Plane, Car, Home, Gamepad2, GraduationCap, Film, Utensils, Briefcase, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const industries = [
    {
        id: "ecomm",
        name: "E-commerce",
        icon: ShoppingBag,
        description: "Scale your campaigns dynamically with inventory.",
        features: ["Product launch optimization", "Cart abandonment recovery"],
        details: {
            useCase: "Dynamic Catalog Ads",
            stats: "35% higher ROAS",
            workflow: "Automatically syncs with Shopify/Magento to generate creative for top-selling SKUs instantly.",
        },
        color: "text-rose-500",
        bg: "bg-rose-50",
        border: "border-rose-100",
        gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
        id: "finance",
        name: "Finance",
        icon: Landmark,
        description: "Secure, compliant, and high-value lead generation.",
        features: ["Compliance-aware ads", "Risk-adjusted analysis"],
        details: {
            useCase: "Lead Scoring & Compliance",
            stats: "20% lower CAC",
            workflow: "AI pre-scans ad copy for regulatory keywords (FINRA/SEC) before publishing.",
        },
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        gradient: "from-blue-600/20 to-cyan-500/20"
    },
    {
        id: "tech",
        name: "SaaS & Tech",
        icon: Laptop,
        description: "Drive demos and free trials with precision.",
        features: ["Lead gen optimization", "CAC reduction"],
        details: {
            useCase: "B2B Account Targeting",
            stats: "2.5x Pipeline Velocity",
            workflow: "Ingest G2 Intent data to trigger hyper-personalized Linkedin & Meta campaigns.",
        },
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
        gradient: "from-purple-600/20 to-indigo-500/20"
    },
    {
        id: "health",
        name: "Healthcare",
        icon: Stethoscope,
        description: "Patient acquisition with strict privacy standards.",
        features: ["Patient education", "Provider targeting"],
        details: {
            useCase: "HIPAA-Compliant Patient Flows",
            stats: "40% increase in bookings",
            workflow: "Privacy-first audience modeling that respects PII while finding high-intent patients.",
        },
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        gradient: "from-emerald-600/20 to-teal-500/20"
    },
    {
        id: "travel",
        name: "Travel",
        icon: Plane,
        description: "Fill vacancies with dynamic pricing ads.",
        features: ["Real-time pricing insertion", "Destination retargeting"],
        details: {
            useCase: "Dynamic Destination Ads",
            stats: "15% Higher Occupancy",
            workflow: "Connects to booking engine to serve ads only for routes/dates with unsold inventory.",
        },
        color: "text-sky-500",
        bg: "bg-sky-50",
        border: "border-sky-100",
        gradient: "from-sky-500/20 to-blue-500/20"
    },
    {
        id: "auto",
        name: "Automotive",
        icon: Car,
        description: "Drive test drives for local inventory.",
        features: ["VIN-specific ads", "Geo-fenced dealerships"],
        details: {
            useCase: "Local Inventory Ads",
            stats: "3x More Store Visits",
            workflow: "Automatically promotes vehicles currently on the lot to users within a 15-mile radius.",
        },
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-100",
        gradient: "from-red-600/20 to-orange-500/20"
    },
    {
        id: "realestate",
        name: "Real Estate",
        icon: Home,
        description: "Showcase properties to high-intent buyers.",
        features: ["Listing automation", "Open house promotion"],
        details: {
            useCase: "Geo-Fenced Listings",
            stats: "50% Faster Closing",
            workflow: "Triggers Instagram Stories ads for open houses to users browsing competitor listings.",
        },
        color: "text-stone-600",
        bg: "bg-stone-50",
        border: "border-stone-100",
        gradient: "from-stone-500/20 to-slate-500/20"
    },
    {
        id: "education",
        name: "Education",
        icon: GraduationCap,
        description: "Boost enrollment with student-first messaging.",
        features: ["Application deadlines", "Alumni targeting"],
        details: {
            useCase: "Enrollment Nurture",
            stats: "22% More Applications",
            workflow: "Sequenced video ads that guide prospective students from awareness to application submission.",
        },
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        border: "border-yellow-100",
        gradient: "from-yellow-500/20 to-orange-500/20"
    }
];

export function IndustrySolutions() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="py-32 relative overflow-hidden" id="solutions">
            {/* Background Matrix */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="px-5 py-2 rounded-full border border-slate-900/10 bg-white/40 backdrop-blur-xl text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm mb-4">
                            Sectors
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif text-slate-900 mb-6"
                    >
                        The Crystal Matrix
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
                        Select your industry to reveal the tailored data architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry) => (
                        <motion.div
                            layoutId={`card-${industry.id}`}
                            key={industry.id}
                            onClick={() => setSelectedId(industry.id)}
                            className={cn(
                                "group relative overflow-hidden rounded-[2.5rem] p-10 cursor-pointer transition-all duration-500",
                                "bg-white/40 backdrop-blur-2xl border border-white/60",
                                "hover:bg-white/60 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
                            )}
                        >
                            {/* Hover Gradient Bloom */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            <div className="relative z-10 flex flex-col h-full min-h-[320px]">
                                {/* Icon Jewel */}
                                <motion.div
                                    layoutId={`icon-${industry.id}`}
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg border border-white/80 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"
                                >
                                    <industry.icon className={`w-6 h-6 ${industry.color}`} />
                                </motion.div>

                                <motion.h3
                                    layoutId={`title-${industry.id}`}
                                    className="text-3xl font-serif text-slate-900 mb-4 leading-none"
                                >
                                    {industry.name}
                                </motion.h3>

                                <motion.p
                                    layoutId={`desc-${industry.id}`}
                                    className="text-slate-600 text-sm font-medium leading-relaxed mb-auto"
                                >
                                    {industry.description}
                                </motion.p>

                                {/* Bottom Features (Reveal on Hover) */}
                                <div className="mt-8 border-t border-slate-900/5 pt-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <ul className="space-y-2">
                                        {industry.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                                                <div className={`w-1.5 h-1.5 rounded-full ${industry.color.replace('text', 'bg')}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-slate-900/40 backdrop-blur-lg z-50 cursor-pointer"
                            />
                            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
                                {industries.filter(i => i.id === selectedId).map(industry => (
                                    <motion.div
                                        layoutId={`card-${industry.id}`}
                                        key={industry.id}
                                        className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col md:flex-row h-[70vh] md:h-[600px]"
                                    >
                                        {/* Close Button */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                            className="absolute top-8 right-8 z-50 p-3 bg-white/50 hover:bg-white rounded-full transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>

                                        {/* Left: Identity */}
                                        <div className={`w-full md:w-5/12 p-12 bg-slate-50 relative overflow-hidden flex flex-col justify-between`}>
                                            <div className={`absolute -top-32 -left-32 w-96 h-96 ${industry.bg.replace('bg-', 'bg-')} bg-opacity-50 blur-[100px]`} />

                                            <div className="relative z-10">
                                                <motion.div layoutId={`icon-${industry.id}`} className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-10">
                                                    <industry.icon className={`w-10 h-10 ${industry.color}`} />
                                                </motion.div>
                                                <motion.h3 layoutId={`title-${industry.id}`} className="text-5xl font-serif text-slate-900 mb-6">{industry.name}</motion.h3>
                                                <motion.p layoutId={`desc-${industry.id}`} className="text-lg text-slate-600 font-medium">{industry.description}</motion.p>
                                            </div>

                                            <div className="relative z-10">
                                                <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Impact</div>
                                                <div className={`text-6xl font-serif ${industry.color}`}>{industry.details.stats}</div>
                                            </div>
                                        </div>

                                        {/* Right: Technical Specs */}
                                        <div className="w-full md:w-7/12 p-12 bg-white flex flex-col justify-center">
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <div className="mb-10">
                                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                                                        <Activity className="w-3 h-3" /> Use Case
                                                    </div>
                                                    <h4 className="text-3xl font-serif text-slate-900 mb-4">{industry.details.useCase}</h4>
                                                    <p className="text-slate-600 text-lg leading-relaxed">{industry.details.workflow}</p>
                                                </div>

                                                <div className="grid gap-3">
                                                    {industry.features.map(feat => (
                                                        <div key={feat} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                                            <div className={`w-8 h-8 rounded-full ${industry.bg} flex items-center justify-center`}>
                                                                <Sparkles className={`w-4 h-4 ${industry.color}`} />
                                                            </div>
                                                            <span className="font-bold text-slate-700">{feat}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-10 pt-8 border-t border-slate-100">
                                                    <button className="w-full py-4 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
                                                        View {industry.name} Case Studies
                                                    </button>
                                                </div>
                                            </motion.div>
                                        </div>

                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
