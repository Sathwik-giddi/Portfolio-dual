"use client";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, X, Zap, Crown, Sparkles, Star, ArrowUpRight, Flame } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, MouseEvent, useEffect } from "react";
import Link from "next/link";

// --- Components ---

function TiltCard({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    function onMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onClick={onClick}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX: isMobile ? 0 : rotateX,
                rotateY: isMobile ? 0 : rotateY,
                transformStyle: isMobile ? "flat" : "preserve-3d"
            }}
            className={`relative transition-all duration-200 ease-out hover:z-50 ${className}`}
        >
            {children}
        </motion.div>
    );
}

const pricingItems = [
    {
        id: "base",
        name: "Base",
        price: "$15",
        sticker: "ENTRY",
        stickerColor: "bg-lime-400 rotate-12",
        desc: "Essential ad hosting for single accounts.",
        features: ["1 Account per Platform", "Host 1 Video", "Basic Platform Insights", "Global Audience Access"],
        gradient: "from-lime-200 via-emerald-200 to-teal-200",
        shadow: "shadow-lime-200/50",
        icon: Zap,
        accent: "text-lime-700"
    },
    {
        id: "premium",
        name: "Premium",
        price: "$50",
        sticker: "ELITE",
        stickerColor: "bg-pink-500 -rotate-6 text-white",
        desc: "Multi-account power with advanced generation.",
        features: ["2 Accounts per Platform", "Host 3 Videos", "AI Video Generation", "AI Analyst Chatbot", "Meta + YT + TikTok"],
        gradient: "from-pink-200 via-purple-200 to-indigo-200",
        shadow: "shadow-purple-200/50",
        icon: Crown,
        accent: "text-purple-700"
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "$299",
        sticker: "AGENCY",
        stickerColor: "bg-blue-500 rotate-3 text-white",
        desc: "Unlimited scale for agencies and power teams.",
        features: ["Unlimited Accounts", "Unlimited Videos", "Prioritized Generation", "API Access", "White Label Reports", "24/7 Dedicated Support"],
        gradient: "from-blue-200 via-cyan-200 to-sky-200",
        shadow: "shadow-blue-200/50",
        icon: Star,
        accent: "text-blue-600"
    },
    {
        id: "custom",
        name: "Custom",
        price: "Talk to Us",
        sticker: "V.I.P.",
        stickerColor: "bg-slate-900 -rotate-12 text-white",
        desc: "Bespoke infrastructure for global brands.",
        features: ["Custom Integrations", "Private Cloud", "SLA Guarantees", "Audit Logs", "Role-Based Access", "Dedicated Engineering"],
        gradient: "from-slate-200 via-gray-200 to-zinc-200",
        shadow: "shadow-gray-200/50",
        icon: Sparkles,
        accent: "text-slate-700"
    }
];

export default function PricingPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#F0EBFA] font-sans overflow-x-hidden selection:bg-lime-400 selection:text-black">
            {/* Global Noise */}
            <div className="fixed inset-0 bg-noise opacity-[0.04] pointer-events-none z-50 mix-blend-color-burn"></div>

            {/* Background Mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-400/20 rounded-full blur-[60px] md:blur-[100px] animate-blob" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-pink-400/20 rounded-full blur-[60px] md:blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-lime-300/20 rounded-full blur-[60px] md:blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <main className="relative z-10 pt-24 pb-20 md:pt-32 md:pb-32 container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        className="inline-block mb-6 relative"
                    >
                        <span className="absolute -top-6 -right-4 md:-right-8 bg-lime-400 text-black text-[10px] md:text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest rotate-12 shadow-md border-2 border-black">
                            Enterprise Ready
                        </span>
                        <h1 className="text-5xl md:text-[9rem] font-serif font-medium text-slate-900 leading-[0.9] md:leading-[0.8] tracking-tighter mix-blend-darken">
                            Choose Your <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 animate-gradient-x">Weapon.</span>
                        </h1>
                    </motion.div>
                    <p className="text-lg md:text-2xl font-medium text-slate-600 max-w-xl mx-auto mt-4 md:mt-8 px-4">
                        No hidden fees. No corporate BS. Just pure, unadulterated growth power.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-8 max-w-[90rem] mx-auto perspective-1000">
                    {pricingItems.map((item, i) => (
                        <TiltCard
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className="cursor-pointer group"
                        >
                            <motion.div
                                layoutId={`card-${item.id}`}
                                className={`relative h-auto min-h-[550px] md:min-h-[580px] rounded-[2rem] md:rounded-[2.5rem] border-[3px] border-white/40 bg-white/30 backdrop-blur-md md:backdrop-blur-2xl overflow-hidden ${item.shadow} shadow-2xl`}
                            >
                                {/* Active Gradient Mesh Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                                {/* 3D Content Layer */}
                                <div className="relative z-10 h-full p-6 md:p-10 flex flex-col transform translate-z-20">
                                    {/* Header Row */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-white/60">
                                            <item.icon className={`w-8 h-8 ${item.accent}`} />
                                        </div>
                                        {/* Sticker */}
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 20 }}
                                            className={`${item.stickerColor} px-4 py-2 font-black text-xs md:text-sm uppercase tracking-widest shadow-lg border-2 border-white/20`}
                                        >
                                            {item.sticker}
                                        </motion.div>
                                    </div>

                                    {/* Main Title */}
                                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2 tracking-tight">{item.name}</h2>
                                    <p className="text-sm md:text-base font-medium text-slate-700 opacity-80 mb-6 md:mb-8 text-balance">{item.desc}</p>

                                    {/* Bento Grid Features */}
                                    <div className="grid grid-cols-2 gap-3 mb-auto">
                                        {item.features.map((feat, idx) => (
                                            <div key={idx} className={`bg-white/40 backdrop-blur-sm p-3 rounded-xl border border-white/40 text-xs md:text-sm font-bold text-slate-800 flex items-center gap-2 ${idx === 0 ? 'col-span-2' : ''}`}>
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                                                {feat}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price & CTA */}
                                    <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-900/10 flex items-end justify-between">
                                        <div>
                                            <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{item.price}</span>
                                            <span className="text-xs md:text-sm font-bold text-slate-500 ml-1">/mo</span>
                                        </div>
                                        <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-black transition-all">
                                            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>

            </main>

            {/* Electric Modal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-3xl"
                        />

                        {pricingItems.map(item => item.id === selectedId && (
                            <motion.div
                                layoutId={`card-${item.id}`}
                                key={item.id}
                                className={`relative w-full max-w-4xl h-[90vh] md:h-[85vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-2xl flex flex-col md:flex-row`}
                            >
                                {/* Left: The Lava Lamp Side */}
                                <div className={`w-full md:w-5/12 h-[30%] md:h-auto relative overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-soft-light" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-t from-white/20 to-transparent rotate-45 blur-3xl animate-pulse" />

                                    <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
                                        <div className="bg-white/30 backdrop-blur-md w-fit p-3 md:p-4 rounded-2xl border border-white/50">
                                            <item.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-900" />
                                        </div>
                                        <div>
                                            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[0.8] mb-4">{item.name}</h2>
                                            <div className="inline-block bg-slate-900 text-white px-4 py-1.5 text-xs md:text-sm font-black uppercase tracking-widest rounded-full">
                                                {item.sticker}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: The Details */}
                                <div className="w-full md:w-7/12 p-8 md:p-12 bg-white flex flex-col relative h-[70%] md:h-auto overflow-y-auto">
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-20"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-8">What's in the box?</h3>
                                        <div className="space-y-4">
                                            {[
                                                item.id === "base" ? "Basic Ad Hosting" : item.id === "premium" ? "AI Video Generation" : item.id === "enterprise" ? "Unlimited AI Generation" : "Custom AI Models",
                                                item.id === "base" ? "Basic Dashboard" : item.id === "premium" ? "AI Analyst Chatbot" : item.id === "enterprise" ? "Dedicated Account Manager" : "24/7 Eng Support",
                                                "Meta (FB/Insta) Hosting",
                                                "YouTube (Google Ads) Hosting",
                                                "TikTok Ad Hosting",
                                                item.id === "base" ? "Standard Access" : item.id === "custom" ? "Private Cloud" : item.id === "enterprise" ? "White Label Reports" : "Global Audience Access",
                                                `Limit: ${item.id === "base" ? "1 Account" : item.id === "premium" ? "2 Accounts" : item.id === "enterprise" ? "Unlimited" : "Custom"}/Platform`
                                            ].map((feat, i) => (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 + (i * 0.05) }}
                                                    key={i}
                                                    className="flex items-center gap-4 group p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-default"
                                                >
                                                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${item.gradient} bg-opacity-20 shrink-0`}>
                                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-slate-900" />
                                                    </div>
                                                    <span className="text-base md:text-lg font-bold text-slate-700 group-hover:text-black">{feat}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 border-t-2 border-dashed border-slate-100 pt-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Total Monthly</span>
                                            <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{item.price}</span>
                                        </div>
                                        <Link href="/signup">
                                            <Button className="w-full h-16 md:h-20 text-lg md:text-xl font-black uppercase tracking-widest rounded-2xl md:rounded-3xl bg-slate-900 text-white hover:bg-black hover:scale-[1.02] transition-all shadow-xl flex items-center justify-between px-8">
                                                <span>Secure Plan</span>
                                                <ArrowUpRight className="w-6 h-6" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
