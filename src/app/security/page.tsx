"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server, Globe, EyeOff, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const securityFeatures = [
    {
        title: "SOC 2 Type II",
        description: "Certified operational security. We don't just meet standards; we crush them.",
        icon: FileCheck,
        gradient: "from-lime-200 to-emerald-200",
        text: "text-lime-900"
    },
    {
        title: "End-to-End Encryption",
        description: "AES-256 at rest. TLS 1.3 in transit. Your data is locked tighter than a vault.",
        icon: Lock,
        gradient: "from-blue-200 to-cyan-200",
        text: "text-blue-900"
    },
    {
        title: "Global Compliance",
        description: "GDPR, CCPA, & ISO 27001 ready. We speak the language of global privacy.",
        icon: Globe,
        gradient: "from-purple-200 to-pink-200",
        text: "text-purple-900"
    },
    {
        title: "Zero Trust Core",
        description: "Never trust, always verify. Strict identity checks for every single access request.",
        icon: Shield,
        gradient: "from-orange-200 to-red-200",
        text: "text-orange-900"
    },
    {
        title: "Data Sovereignty",
        description: "Your data stays where you want it. US, EU, or APAC residency options available.",
        icon: Server,
        gradient: "from-teal-200 to-green-200",
        text: "text-teal-900"
    },
    {
        title: "Anonymization",
        description: "Automatic PII stripping. We protect your users before the data even touches our metal.",
        icon: EyeOff,
        gradient: "from-indigo-200 to-violet-200",
        text: "text-indigo-900"
    },
];

export default function SecurityPage() {
    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-lime-400 selection:text-black overflow-hidden relative">

            {/* Global Noise Overlay */}
            <div className="fixed inset-0 bg-noise opacity-[0.04] pointer-events-none z-50 mix-blend-color-burn"></div>

            {/* Background Blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-lime-300/20 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-400/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            </div>

            <main className="relative z-10 pt-32 pb-20">

                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-md text-slate-900 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-8 border border-white/40 shadow-sm"
                        >
                            <Shield className="w-4 h-4 text-lime-600" />
                            <span>Fort Knox Grade</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-[8rem] font-serif font-medium tracking-tighter text-slate-900 leading-[0.9] md:leading-[0.85] mb-8"
                        >
                            Invincible <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-emerald-500 to-teal-500 animate-gradient-x">
                                Infrastructure.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
                        >
                            We protect your ad data with the same obsession we apply to performance.
                            Bank-grade security, built for the modern web.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col md:flex-row justify-center gap-4"
                        >
                            <Button className="h-14 px-8 rounded-full bg-slate-900 text-white text-lg font-bold hover:bg-black hover:scale-105 transition-all shadow-xl">
                                Download SOC 2 Report
                            </Button>
                            <Link href="/terms#privacy">
                                <Button variant="outline" className="h-14 px-8 rounded-full bg-white/50 backdrop-blur-md border-white/60 text-slate-900 text-lg font-bold hover:bg-white transition-all">
                                    View Privacy Policy
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {securityFeatures.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/60 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                    <feature.icon className={`w-7 h-7 ${feature.text}`} />
                                </div>
                                <h3 className="text-2xl font-serif text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Trust Monitor Section */}
                <section className="container mx-auto px-6">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-sm md:text-base font-bold text-lime-400 uppercase tracking-[0.2em] mb-12">Audited & Verified By</h2>

                            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
                                {["Deloitte", "Vanta", "Drata", "AWS"].map((partner) => (
                                    <h3 key={partner} className="text-3xl md:text-5xl font-serif text-white/90 mix-blend-screen hover:text-lime-400 transition-colors cursor-default">
                                        {partner}
                                    </h3>
                                ))}
                            </div>

                            <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-8">
                                <div className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="text-lime-400 w-5 h-5" />
                                    <span className="font-bold">99.99% Uptime SLA</span>
                                </div>
                                <div className="hidden md:block w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                                <div className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="text-lime-400 w-5 h-5" />
                                    <span className="font-bold">Real-time Threat Monitoring</span>
                                </div>
                                <div className="hidden md:block w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                                <div className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="text-lime-400 w-5 h-5" />
                                    <span className="font-bold">24/7 Incident Response</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
