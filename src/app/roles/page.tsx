"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Users, BarChart, Code, ArrowRight, Activity, Terminal, Shield, Command, Globe, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Components ---

// 1. Growth Marketer Visualization (Live Bars)
const GrowthViz = () => {
    return (
        <div className="w-full h-full flex flex-col justify-end p-8 relative overflow-hidden">
            {/* Abstract Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Floating Metrics */}
            <div className="absolute top-8 right-8 flex gap-4">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs font-mono">
                    ROAS <span className="text-lime-400">4.2x</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs font-mono">
                    CTR <span className="text-lime-400">2.8%</span>
                </div>
            </div>

            <div className="flex items-end justify-between gap-4 h-64 relative z-10">
                {[45, 70, 50, 90, 60, 85, 100].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: "10%" }}
                        animate={{ height: [`${h}%`, `${h - 10}%`, `${h}%`] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg opacity-90 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    />
                ))}
            </div>
        </div>
    );
};

// 2. Data Engineer Visualization (Typing Terminal)
const DataViz = () => {
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const cmd1 = "> pip install adcoach-sdk";
    const cmd2 = "[SUCCESS] Installed v1.4.2 (1.2s)";

    useEffect(() => {
        let t1: NodeJS.Timeout;
        let t2: NodeJS.Timeout;

        // Reset
        setLine1("");
        setLine2("");

        // Type line 1
        let i = 0;
        t1 = setInterval(() => {
            if (i < cmd1.length) {
                setLine1(prev => prev + cmd1.charAt(i));
                i++;
            } else {
                clearInterval(t1);
                // Type line 2 after delay
                t2 = setTimeout(() => {
                    setLine2(cmd2);
                }, 500);
            }
        }, 50);

        return () => { clearInterval(t1); clearTimeout(t2); };
    }, []);

    return (
        <div className="w-full h-full bg-[#0D0D0D] p-8 font-mono text-xs md:text-sm text-green-400 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500" />
            </div>

            <div className="relative z-10 space-y-4">
                <div className="opacity-50"># Establishing secure pipeline...</div>
                <div className="flex items-center gap-2">
                    <span className="text-purple-400">$</span>
                    {line1}<span className="animate-pulse bg-green-400 w-2 h-4 block" />
                </div>
                {line2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white">
                        {line2}
                    </motion.div>
                )}
                {line2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
                        <span className="text-purple-400">$</span> <span className="italic opacity-50">awaiting events...</span>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

// 3. Executive Visualization (Holographic Orb)
const ExecViz = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-slate-900">
            {/* Rotating Rings */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20 / i, repeat: Infinity, ease: "linear" }}
                    className={`absolute border border-white/${20 - (i * 5)} rounded-full`}
                    style={{ width: `${i * 150}px`, height: `${i * 150}px` }}
                />
            ))}

            {/* Center Core */}
            <div className="relative z-10 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                    <Command className="w-12 h-12 text-white" />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 bg-white/10 text-white backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20"
            >
                Vision 2026
            </motion.div>
        </div>
    );
};


const roles = [
    {
        id: "growth",
        title: "Growth Marketers",
        subtitle: "The Optimization Engine",
        desc: "Stop guessing. Predictive models that tell you exactly where to allocate for maximum ROAS.",
        icon: BarChart,
        color: "bg-blue-600",
        viz: GrowthViz,
        features: ["Auto-Bid Adjustments", "Cross-Channel Cap", "CAPI Integration"]
    },
    {
        id: "engineer",
        title: "Data Engineers",
        subtitle: "The Pipeline Architects",
        desc: "Headless architecture. Pipe raw event data directly into Snowflake without the ETL headache.",
        icon: Terminal,
        color: "bg-purple-600",
        viz: DataViz,
        features: ["GraphQL API", "Python SDKs", "99.99% SLA"]
    },
    {
        id: "exec",
        title: "Executive Leadership",
        subtitle: "The Visionary Command",
        desc: "One dashboard to rule them all. High-level visibility into spend efficiency and velocity.",
        icon: Command,
        color: "bg-slate-900",
        viz: ExecViz,
        features: ["Global Spend View", "Team Velocity", "Forecast AI"]
    }
];

const roleDetails = {
    growth: {
        legal: "Budget Optimization",
        protocol: "Smart Bidding Active",
        steps: [
            "Connecting to ad platforms...",
            "Analyzing performance trends...",
            "Optimizing budget allocation...",
            "Ready to maximize ROI."
        ],
        warning: "Note: AI will automatically adjust bids to improve results."
    },
    engineer: {
        legal: "Enterprise Security",
        protocol: "Secure Data Pipeline",
        steps: [
            "Connecting to data warehouse...",
            "Verifying encryption...",
            "Syncing live events...",
            "Connection established securely."
        ],
        warning: "Secure: Your data stream is encrypted and private."
    },
    exec: {
        legal: "Executive Overview",
        protocol: "Live Dashboard",
        steps: [
            "Gathering global data...",
            "Calculating growth metrics...",
            "Generating summary...",
            "Dashboard operating live."
        ],
        warning: "Private: Visible only to authorized leadership."
    }
};

export default function RolesPage() {
    const [activeRole, setActiveRole] = useState("growth");
    const [modalOpen, setModalOpen] = useState(false);
    const [processing, setProcessing] = useState(false);

    // Details for the currently active role
    const details = roleDetails[activeRole as keyof typeof roleDetails];
    const activeRoleData = roles.find(r => r.id === activeRole);

    const handleInitialize = () => {
        setModalOpen(true);
        setProcessing(true);
        // Simulate a loading sequence
        setTimeout(() => setProcessing(false), 2000);
    };

    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-purple-300 selection:text-black relative">

            <main className="pt-24 md:pt-32 pb-20 container mx-auto px-6 min-h-screen flex flex-col">

                {/* Minimal Header */}
                <header className="mb-8 md:mb-12 flex justify-between items-end">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Workspaces</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tight">
                            Command <span className="italic text-slate-400">Decks.</span>
                        </h1>
                    </div>
                </header>

                {/* The Interactive Deck */}
                <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 h-auto lg:h-[600px]">
                    {roles.map((role) => {
                        const isActive = activeRole === role.id;
                        return (
                            <motion.div
                                key={role.id}
                                layout
                                onClick={() => setActiveRole(role.id)}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                className={cn(
                                    "relative rounded-[2rem] overflow-hidden cursor-pointer transition-colors duration-500 will-change-transform",
                                    isActive ? "flex-[3] bg-white shadow-2xl h-auto min-h-[600px] lg:h-auto" : "flex-[1] bg-white/40 hover:bg-white/60 h-[100px] lg:h-auto"
                                )}
                            >
                                {/* Collapsed Vertical/Horizontal Label */}
                                <div className={cn(
                                    "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                                )}>
                                    <h3 className="text-xl md:text-2xl font-serif text-slate-900 lg:-rotate-90 whitespace-nowrap opacity-50 font-bold uppercase tracking-widest">
                                        {role.title.split(" ")[0]}
                                    </h3>
                                </div>

                                {/* Expanded Content */}
                                <div className={cn(
                                    "absolute inset-0 flex flex-col lg:flex-row transition-opacity duration-500",
                                    isActive ? "opacity-100 delay-100 static lg:absolute" : "opacity-0 pointer-events-none"
                                )}>

                                    {/* Left: Info */}
                                    <div className="w-full lg:w-5/12 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 md:mb-8">
                                                <role.icon className={cn("w-5 h-5 md:w-6 md:h-6 text-slate-900")} />
                                            </div>
                                            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-purple-600 mb-2">{role.subtitle}</div>
                                            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6 leading-[1.1]">{role.title}</h2>
                                            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-sm">
                                                {role.desc}
                                            </p>
                                        </div>

                                        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
                                            {role.features.map((feat, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                                    <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wide">{feat}</span>
                                                </div>
                                            ))}
                                            <div className="pt-6">
                                                <Button
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Prevent card click logic
                                                        handleInitialize();
                                                    }}
                                                    className="rounded-full bg-slate-900 text-white px-6 md:px-8 h-10 md:h-12 uppercase tracking-widest text-[10px] md:text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-2 w-full md:w-auto justify-center"
                                                >
                                                    Initialize Deck <ArrowRight className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Viz (The Portal) */}
                                    <div className="w-full lg:w-7/12 bg-slate-100 relative overflow-hidden min-h-[300px] lg:min-h-0">
                                        <role.viz />
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </main>

            {/* THE LEGAL / RICH MODAL */}
            <AnimatePresence>
                {modalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        />

                        {/* Card */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-[#0D0D0D] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm"
                        >
                            {/* Header Strip */}
                            <div className="bg-slate-900 px-6 py-3 flex items-center justify-between border-b border-slate-800">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Terminal className="w-4 h-4" />
                                    <span className="text-xs uppercase tracking-widest font-bold">System Activation</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-8 text-slate-300 space-y-6">

                                <div>
                                    <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">Target Environment</div>
                                    <div className="text-white text-lg font-bold flex items-center gap-2">
                                        {activeRoleData?.title}
                                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-[10px] rounded border border-purple-500/30">ACTIVE</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800/50 space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Protocol:</span>
                                        <span className="text-green-400 font-bold">{details.protocol}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Legal:</span>
                                        <span className="text-blue-400 font-bold">{details.legal}</span>
                                    </div>
                                </div>

                                <div className="space-y-2 font-mono text-xs">
                                    <div className="text-slate-500 mb-2"># Initialization Log:</div>
                                    {details.steps.map((step, i) => (
                                        <motion.div
                                            key={step}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.8 }}
                                        >
                                            <span className="text-purple-500 mr-2">➜</span>
                                            {step}
                                        </motion.div>
                                    ))}
                                    {processing && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 3.5, repeat: Infinity }}
                                            className="text-slate-500 animate-pulse"
                                        >
                                            _
                                        </motion.div>
                                    )}
                                </div>

                                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-500 text-xs flex gap-3 items-start">
                                    <Shield className="w-4 h-4 shrink-0 mt-0.5" />
                                    <div>{details.warning}</div>
                                </div>

                            </div>

                            {/* Footer / Actions */}
                            <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end gap-3">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2 hover:bg-slate-800 rounded text-slate-400 text-xs font-bold uppercase tracking-widest transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
                                >
                                    Confirm Authorization
                                </button>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
