"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Brain, Zap, Fingerprint, Loader2, CheckCircle, X, BarChart3, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const features = [
    {
        id: "brain",
        label: "Unified Intelligence",
        title: "Predictive Core",
        stat: "+400% ROAS",
        desc: "Ingests data from Meta, TikTok, and Google. Our models identify the winning signal in the noise.",
        detailedDesc: "The Predictive Core serves as the central nervous system of your ad stack. By aggregating cross-channel performance data into a single verified stream, it eliminates attribution conflicts and identifies the true drivers of conversion.",
        specs: ["Cross-Channel Attribution", "Real-Time Signal Processing", "Competitor Intelligence", "Custom Attribution Models"],
        icon: Brain,
        colSpan: "md:col-span-2",
        gradient: "from-purple-500/20 to-blue-500/20",
        delay: 0
    },
    {
        id: "creator",
        label: "Generative Studio",
        title: "Creative Studio",
        stat: "0.2s Latency",
        desc: "Text-to-Video that feels human. Auto-adjusts formatting for Reels, Stories, and Shorts.",
        detailedDesc: "Creative Studio allows you to produce high-fidelity creative assets at scale. From script generation to video rendering, our AI agents handle the heavy lifting, ensuring your brand never experiences ad fatigue.",
        specs: ["Text-to-Video Generation", "Auto-Resizing (9:16, 1:1, 16:9)", "Multilingual Dubbing", "Brand Voice Calibration"],
        icon: Sparkles,
        colSpan: "md:col-span-1",
        gradient: "from-pink-500/20 to-orange-500/20",
        delay: 0.2
    },
    {
        id: "oracle",
        label: "Predictive Bidding",
        title: "Bid Optimizer",
        stat: "98% Accuracy",
        desc: "Knows the clearing price before the auction starts. Never overpay for an impression again.",
        detailedDesc: "The Bid Optimizer predicts auction dynamics milliseconds before you bid. It analyzes historical clearing prices and current market density to ensure you win premium inventory at the lowest possible floor price.",
        specs: ["Bid Shading Algorithms", "Auction Pressure Analysis", "Win-Rate Prediction", "Budget Pacing Control"],
        icon: Zap,
        colSpan: "md:col-span-1",
        gradient: "from-blue-500/20 to-teal-500/20",
        delay: 0.3
    },
    {
        id: "identity",
        label: "Identity Resolution",
        title: "Identity Graph",
        stat: "1:1 Match",
        desc: "Cookie-less tracking that survives the privacy apocalypse.",
        detailedDesc: "The Identity Graph reconstructs user journeys in a post-cookie world. Using first-party server-side tagging and probabilistic matching, we resolve anonymous traffic into actionable user profiles without violating privacy compliance.",
        specs: ["Server-Side Tagging (CAPI)", "Probabilistic Matching", "GDPR/CCPA Compliant", "Device Graph Resolution"],
        icon: Fingerprint,
        colSpan: "md:col-span-2",
        gradient: "from-indigo-500/20 to-purple-500/20",
        delay: 0.4
    }
];

export function ValueProposition() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (selectedFeature) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedFeature]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section className="py-20 md:py-32 relative overflow-hidden" id="platform-features" ref={containerRef}>
            {/* Ambient Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>

            {/* Ambient Blobs */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 -right-64 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Editorial Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-[1px] w-12 bg-slate-900"></div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Capabilities</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.9]"
                    >
                        The <span className="italic text-purple-600">Engine</span> <br />
                        Under the Hood.
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={`card-${item.id}`} // Shared layout ID for seamless transition
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            onClick={() => setSelectedFeature(item)}
                            className={cn(
                                item.colSpan,
                                "group relative bg-white border border-slate-200 rounded-[2rem] p-10 overflow-hidden cursor-pointer shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)] hover:border-purple-300 transition-all duration-500"
                            )}
                        >
                            {/* Abstract Gradient Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                            <item.icon className="w-5 h-5 text-slate-900" />
                                        </div>
                                        <div className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full group-hover:bg-purple-600 transition-colors">
                                            {item.stat}
                                        </div>
                                    </div>

                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{item.label}</div>
                                    <h3 className="text-3xl font-serif text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-900/5 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-purple-600">
                                    <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-purple-50 border border-purple-200 px-4 py-3 rounded-full hover:bg-purple-100 transition-colors cursor-pointer shadow-sm">
                                        <Sparkles className="w-4 h-4" /> Learn More
                                    </span>
                                    <div className="p-2 rounded-full bg-slate-100 group-hover:bg-purple-100 transition-colors">
                                        <ArrowUpRight className="w-5 h-5 text-slate-900 group-hover:text-purple-600 group-hover:rotate-45 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Block (remains unchanged) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-3 bg-slate-900 rounded-[2rem] p-12 text-center relative overflow-hidden group cursor-pointer shadow-2xl shadow-purple-900/20"
                    >
                        <Link href="/platform" className="absolute inset-0 z-20" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl group-hover:bg-purple-500/50 transition-colors duration-700" />

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to upgrade your stack?</h3>
                            <p className="text-slate-300 text-xl mb-8 max-w-2xl">
                                Join the 500+ forward-thinking teams using the only engine built for the privacy-first era.
                            </p>
                            <div className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                                <span className="font-bold tracking-wide uppercase text-sm">See Full Platform</span>
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Feature Details Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFeature(null)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[90]"
                        />

                        {/* Modal Container */}
                        <div className="fixed inset-0 flex items-center justify-center z-[100] px-4 pointer-events-none">
                            <motion.div
                                layoutId={`card-${selectedFeature.id}`}
                                className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative pointer-events-auto"
                            >
                                <div className="absolute top-6 right-6 z-20">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setSelectedFeature(null); }}
                                        className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-slate-900" />
                                    </button>
                                </div>

                                <div className={`h-40 bg-gradient-to-br ${selectedFeature.gradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-noise opacity-20" />
                                    <div className="absolute bottom-6 left-8 flex items-end gap-4">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                            <selectedFeature.icon className="w-8 h-8 text-slate-900" />
                                        </div>
                                        <div className="mb-1">
                                            <div className="text-xs font-bold uppercase tracking-widest text-slate-700/60 mb-1">{selectedFeature.label}</div>
                                            <h3 className="text-3xl font-serif text-slate-900 leading-none">{selectedFeature.title}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10">
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        {selectedFeature.detailedDesc}
                                    </p>

                                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                                            <BarChart3 className="w-4 h-4" /> Technical Specs
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedFeature.specs?.map((spec, i) => (
                                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    {spec}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 flex justify-end">
                                        <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-purple-600 hover:text-purple-800 transition-colors">
                                            View Documentation <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

        </section>
    );
}
