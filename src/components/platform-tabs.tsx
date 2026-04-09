"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Bot, BarChart3, Shield, Activity, Lock, Cpu } from "lucide-react";

const tabs = [
    {
        id: "engine",
        label: "Core Engine",
        desc: "The central nervous system for your ad operations. Connects to all major ad networks via secure OAuth.",
        icon: Database,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: "ai",
        label: "AI Studio",
        desc: "Generative AI that analyzes performance trends and suggests creative optimizations automatically.",
        icon: Bot,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        id: "analytics",
        label: "Live Analytics",
        desc: "Real-time dashboards that aggregate cross-channel metrics into a single source of truth.",
        icon: BarChart3,
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    },
    {
        id: "security",
        label: "Bank-Grade Security",
        desc: "SOC 2 Type II certified. We process purely anonymized data streams with strict retention policies.",
        icon: Shield,
        color: "text-green-500",
        bg: "bg-green-500/10"
    }
];

export function PlatformTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="py-32 relative z-10">
            <div className="container mx-auto px-6">

                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">Built for <span className="italic text-purple-600">Scale</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
                        Orchestrate complex campaigns across multiple channels with a platform designed for volume.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Navigation Tabs */}
                    <div className="lg:w-1/3 flex flex-col gap-4">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="group relative cursor-pointer"
                            >
                                <div className={`p-6 rounded-2xl transition-all duration-300 border border-transparent ${activeTab === tab.id ? 'bg-white shadow-lg border-purple-100/50' : 'hover:bg-white/50'}`}>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className={`p-2 rounded-lg ${tab.bg} ${tab.color}`}>
                                            <tab.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className={`font-serif text-xl ${activeTab === tab.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                                            {tab.label}
                                        </h3>
                                    </div>
                                    <AnimatePresence>
                                        {activeTab === tab.id && (
                                            <motion.p
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="text-slate-600 pl-[3.25rem] text-sm leading-relaxed overflow-hidden"
                                            >
                                                {tab.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                                {/* Active Pill Indicator */}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute left-0 top-6 bottom-6 w-1 bg-purple-600 rounded-r-full"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Visual Stage */}
                    <div className="lg:w-2/3">
                        <div className="relative aspect-[4/3] md:aspect-[16/9] bg-slate-900 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden border border-slate-800">
                            {/* Bezel Gloss */}
                            <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] border border-white/5 z-20" />

                            {/* Inner Screen */}
                            <div className="relative w-full h-full bg-slate-950 rounded-[2.25rem] overflow-hidden">
                                {/* Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

                                <AnimatePresence mode="wait">
                                    {activeTab === 'engine' && (
                                        <motion.div
                                            key="engine"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex items-center justify-center p-12"
                                        >
                                            {/* Pulsing Core Node */}
                                            <div className="relative">
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] animate-pulse" />
                                                <div className="relative z-10 w-32 h-32 bg-slate-900 border border-blue-500/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                                                    <div className="w-24 h-24 rounded-full border border-blue-500/30 flex items-center justify-center">
                                                        <Cpu className="w-10 h-10 text-blue-400" />
                                                    </div>
                                                </div>
                                                {/* Satellite nodes */}
                                                {[0, 1, 2, 3].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 w-64 h-64 border border-dashed border-blue-500/10 rounded-full" // Orbit paths
                                                        style={{ rotate: i * 45 }}
                                                    >
                                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'ai' && (
                                        <motion.div
                                            key="ai"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 p-8 font-mono text-sm leading-relaxed text-purple-300 overflow-hidden"
                                        >
                                            <motion.div
                                                initial={{ y: 0 }}
                                                animate={{ y: -200 }}
                                                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                                                className="space-y-2 opacity-70"
                                            >
                                                {Array.from({ length: 20 }).map((_, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <span className="text-slate-600">{i + 10}</span>
                                                        <span>
                                                            {i % 3 === 0 ? ">> Optimizing creative assets..." :
                                                                i % 3 === 1 ? ">> Generating new copy variants..." :
                                                                    ">> Testing audience segment A/B..."}
                                                        </span>
                                                        <span className="text-green-400">Done</span>
                                                    </div>
                                                ))}
                                            </motion.div>
                                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
                                        </motion.div>
                                    )}

                                    {activeTab === 'analytics' && (
                                        <motion.div
                                            key="analytics"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex items-end justify-between p-12 gap-4"
                                        >
                                            {[40, 70, 50, 90, 60, 80, 95].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                                                    className="w-full bg-pink-500/80 rounded-t-lg relative group"
                                                >
                                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-slate-900 text-xs px-2 py-1 rounded font-bold">
                                                        {h}%
                                                    </div>
                                                </motion.div>
                                            ))}
                                            <div className="absolute inset-x-12 bottom-12 h-[1px] bg-slate-800" />
                                        </motion.div>
                                    )}

                                    {activeTab === 'security' && (
                                        <motion.div
                                            key="security"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex items-center justify-center p-12"
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
                                                <Lock className="w-32 h-32 text-green-500 opacity-80" strokeWidth={1} />

                                                {/* Scanning Line */}
                                                <motion.div
                                                    animate={{ top: ["0%", "100%", "0%"] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    className="absolute left-0 right-0 h-[2px] bg-green-400 shadow-[0_0_20px_rgba(74,222,128,1)]"
                                                />
                                            </div>
                                            <div className="absolute bottom-12 text-green-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                                                System Secure
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
