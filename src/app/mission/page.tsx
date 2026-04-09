"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/footer";
import { Zap, Target, PenTool, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MissionPage() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-purple-300 selection:text-black">



            {/* Core Question & Answer */}
            <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-white opacity-50" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Zap className="w-3 h-3 fill-current" />
                        <span>The Simple Truth</span>
                    </div>
                    <h1 className="text-5xl md:text-9xl font-sans font-extrabold text-slate-900 tracking-tight mb-6 md:mb-8 leading-tight pb-8 md:pb-12 md:pr-20 drop-shadow-sm">
                        What does <br />
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 pr-4 animate-gradient-x">it actually do?</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
                        It stops you from guessing. It automates the three hardest parts of modern growth.
                    </p>
                </motion.div>
            </section>

            {/* Pillar 1: HOSTING */}
            <section className="py-20 md:py-32 border-t border-slate-200 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div>
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                            <Target className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6">1. Cross-Platform Hosting.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Stop juggling accounts. We integrate directly with the Big Three. Connect your own Meta, Google, and TikTok ad accounts into one "God View" dashboard.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Meta (Facebook & Instagram)
                            </li>
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                YouTube (Google Ads) & TikTok
                            </li>
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Up to 2 Accounts per Platform (Premium)
                            </li>
                        </ul>
                    </div>
                    <div className="h-[300px] md:h-[400px] bg-slate-100 rounded-[2rem] md:rounded-[3rem] relative border border-slate-200 flex items-center justify-center">
                        {/* Visual: Platform Icons */}
                        {/* Visual: Real Platform Logos */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                            {/* Addictive Glow Orb */}
                            <div className="absolute w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[40px] md:blur-[80px] opacity-40 animate-pulse" />

                            <div className="relative w-full max-w-[300px] h-[200px] flex items-center justify-center">
                                {[
                                    {
                                        id: "tiktok",
                                        src: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
                                        className: "w-20 h-20 md:w-28 md:h-28 bg-black rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 absolute top-1/2 left-1/2 -translate-x-[110%] -translate-y-1/2 -rotate-12 hover:rotate-0 hover:scale-110 hover:z-50 z-10 transition-all duration-300 ease-out border border-white/10"
                                    },
                                    {
                                        id: "youtube",
                                        src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
                                        className: "w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 absolute top-1/2 left-1/2 -translate-x-[-10%] -translate-y-[60%] rotate-12 hover:rotate-0 hover:scale-110 hover:z-50 z-10 transition-all duration-300 ease-out"
                                    },
                                    {
                                        id: "meta",
                                        src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
                                        className: "w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-indigo-500/20 p-5 md:p-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-110 hover:z-50 transition-all duration-300 ease-out"
                                    }
                                ].map((logo) => (
                                    <div
                                        key={logo.id}
                                        className={`${logo.className} cursor-pointer group flex items-center justify-center`}
                                    >
                                        <img
                                            src={logo.src}
                                            alt={logo.id}
                                            className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillar 2: AI VIDEO */}
            <section className="py-32 border-t border-slate-200 bg-[#F0EBFA]">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 h-[400px] bg-white rounded-[3rem] overflow-hidden relative shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10" />
                        <motion.div
                            style={{ scale }}
                            className="absolute inset-0 flex items-center justify-center p-8"
                        >
                            <div className="w-full max-w-sm bg-slate-900 rounded-2xl shadow-2xl p-4 border border-slate-800">
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Prompt:</div>
                                <div className="text-purple-400 font-mono text-sm mb-4">"Futuristic sneakers floating in neon void..."</div>
                                <div className="aspect-video bg-black rounded overflow-hidden mb-2 relative group">
                                    <video
                                        src="/nike_ad_loop.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover scale-110"
                                    />
                                    <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>
                                    {/* Overlay to simulate generation lines */}
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-scan" />
                                </div>
                                <div className="flex justify-between items-center text-xs text-slate-400">
                                    <span>Generating Video...</span>
                                    <span>98%</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
                            <PenTool className="w-8 h-8 text-purple-600" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">2. AI Video Generation.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Don't hire a studio. Just type. Our generative engine builds high-conversion video ads from simple text prompts.
                            It understands your product and visualizes it instantly.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                Text-to-Video Engine
                            </li>
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                Instant Creative Suggestions
                            </li>
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                Host up to 3 Videos (Premium)
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pillar 3: UNIFIED INSIGHT */}
            <section className="py-32 border-t border-slate-200 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8">
                            <BarChart3 className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">3. Global Command Center.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            One dashboard for every single ad. Whether it's on TikTok, Reels, or YouTube, see it all in one place.
                            Our AI Chatbot watches your data 24/7 and tells you exactly *why* an ad is failing and how to fix it.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                Unified "God View" Dashboard
                            </li>
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                AI Performance Analyst Chatbot
                            </li>
                            <li className="flex items-center gap-3 text-slate-900 font-medium">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                Available Worldwide
                            </li>
                        </ul>
                    </div>
                    <div className="h-[400px] bg-slate-900 rounded-[3rem] overflow-hidden relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        {/* Abstract UI: Chatbot Interaction */}
                        <div className="w-3/4 space-y-4 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-slate-800 text-slate-200 p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-xs"
                            >
                                Why is my TikTok ROAS dropping?
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="bg-green-500 text-slate-900 p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-xs font-bold shadow-lg"
                            >
                                Your hook rate dropped by 15%. Try cutting the intro by 2 seconds.
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-slate-900 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to automate?</h2>
                    <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                        Launch Campaign <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
