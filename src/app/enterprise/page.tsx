"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Server, CheckCircle2, FileText, Activity, Terminal } from "lucide-react";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { cn } from "@/lib/utils";

// --- Components ---

// 1. Holographic Shield / Tilt Card
const SecurityCard = () => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (isMobile) return;
        const rect = ref.current!.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: isMobile ? 0 : rotateX,
                rotateY: isMobile ? 0 : rotateY,
                transformStyle: isMobile ? "flat" : "preserve-3d"
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/60 w-full max-w-md mx-auto group perspective-1000"
        >
            {/* Holographic Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" style={{ mixBlendMode: 'overlay' }} />

            <div className="flex items-center gap-4 mb-8 border-b border-slate-100/50 pb-6 relative z-10">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100 shadow-inner">
                    <Shield className="w-7 h-7 text-green-600" />
                </div>
                <div>
                    <div className="font-bold text-slate-900 text-lg">SOC 2 Type II</div>
                    <div className="text-xs font-mono text-green-600 bg-green-50 px-2 py-0.5 rounded inline-block border border-green-100">
                        STATUS: VERIFIED
                    </div>
                </div>
            </div>

            <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between text-sm p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                    <span className="text-slate-600 font-medium flex items-center gap-2"><Lock className="w-3 h-3" /> Encryption</span>
                    <span className="font-mono text-xs font-bold text-slate-900">AES-256-GCM</span>
                </div>
                <div className="flex items-center justify-between text-sm p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                    <span className="text-slate-600 font-medium flex items-center gap-2"><Activity className="w-3 h-3" /> Uptime</span>
                    <span className="font-mono text-xs font-bold text-green-600">99.999%</span>
                </div>
                <div className="flex items-center justify-between text-sm p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                    <span className="text-slate-600 font-medium flex items-center gap-2"><Terminal className="w-3 h-3" /> Audit Log</span>
                    <span className="font-mono text-xs font-bold text-slate-900">IMMUTABLE</span>
                </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-2xl opacity-20 pointer-events-none animate-pulse" />
        </motion.div>
    );
};

// 2. Active Status Features
const StatusFeature = ({ label, index }: { label: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white hover:border-green-200 hover:bg-green-50/30 transition-all group cursor-default"
        >
            <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{label}</span>
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-green-600 transition-colors">Active</span>
                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-green-500 transition-colors shadow-[0_0_8px_rgba(34,197,94,0)] group-hover:shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            </div>
        </motion.div>
    );
};

import { Globe } from "@/components/ui/globe";

// 3. WebGL Hyrbid Globe
const DataGlobe = () => {
    return (
        <div className="relative w-full h-[450px] md:h-[800px] flex items-center justify-center overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#0A0A0A] border border-slate-800 shadow-2xl group">

            {/* Map Background (Abstract Dots) */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '15px 15px' }} />

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-purple-900/30 via-transparent to-transparent opacity-60" />

            {/* The Cobe Globe */}
            <div className="relative z-10 w-full h-full flex items-center justify-center scale-110 md:scale-125 pt-10 md:pt-20">
                <Globe className="opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-1000" />
            </div>

            {/* UI Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Left Status */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                    <div className="flex items-center gap-3 text-green-400 font-mono text-[10px] md:text-xs mb-1 md:mb-2">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        SYSTEM OPTIMAL
                    </div>
                    <div className="text-white font-bold text-sm md:text-lg">Global Mesh Active</div>
                </div>

                {/* Bottom Right Metrics */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex flex-wrap justify-end gap-2 md:gap-4 max-w-[200px] md:max-w-none">
                    {["99.99% Uptime", "12ms Latency", "4.2k Nodes"].map((metric, i) => (
                        <div key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] md:text-xs font-mono text-slate-300 whitespace-nowrap">
                            {metric}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const features = [
    "SAML 2.0 / SSO Enforcement",
    "Audit Logs & Retention (7 Years)",
    "Role-Based Access Control (RBAC)",
    "Dedicated Private Cloud Options",
    "Priority 24/7 Support with SLA",
    "Custom MSA & Legal Frameworks"
];

export default function EnterprisePage() {
    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-green-300 selection:text-black">
            <main className="pt-24 md:pt-32 pb-20">

                {/* Hero */}
                <section className="container mx-auto px-6 mb-20 md:mb-32">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6 md:mb-8"
                            >
                                <Shield className="w-3 h-3 text-green-400" /> Enterprise
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-8xl font-serif font-medium tracking-tighter text-slate-900 mb-6 md:mb-8 leading-[0.9]"
                            >
                                Scale without <br />
                                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">compromise.</span>
                            </motion.h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed mb-8 md:mb-10">
                                The security, compliance, and performance controls required by the Fortune 500.
                            </p>

                            {/* Status Grid */}
                            <div className="grid gap-3 max-w-lg">
                                {features.map((feature, i) => (
                                    <StatusFeature key={i} index={i} label={feature} />
                                ))}
                            </div>

                            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                                <Button className="bg-slate-900 text-white rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform w-full sm:w-auto">
                                    Contact Sales
                                </Button>
                                <Button variant="outline" className="rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest border-slate-300 w-full sm:w-auto">
                                    <FileText className="w-4 h-4 mr-2" /> Certifications
                                </Button>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 order-1 lg:order-2 perspective-1000">
                            {/* The Floating Shield Card */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-emerald-200 rounded-full blur-[60px] md:blur-[100px] opacity-30" />
                                <SecurityCard />
                            </div>
                        </div>

                    </div>
                </section>

                {/* Global Data Map */}
                <section className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-8 md:mb-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-serif text-slate-900">Sovereign by Design</h2>
                    </div>
                    <DataGlobe />
                </section>

            </main>
            <Footer />
        </div>
    );
}
