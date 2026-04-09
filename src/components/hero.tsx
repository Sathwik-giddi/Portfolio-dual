"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 10]);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#F0EBFA]" ref={containerRef}>

            {/* Ambient Noise */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto px-6 relative z-10 pt-20">

                {/* Floating Elements (The Portal) */}
                <motion.div style={{ y: y1 }} className="absolute top-0 right-0 md:-right-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] opacity-40 md:animate-blob pointer-events-none" />
                <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 md:-left-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-pink-400 to-orange-300 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] opacity-40 md:animate-blob animation-delay-2000 pointer-events-none" />

                <div className="relative z-20 flex flex-col items-center text-center">

                    {/* Badge */}


                    {/* Massive Typography */}
                    {/* Massive Typography */}
                    <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl leading-[0.95] md:leading-[0.9] font-serif font-medium tracking-tighter text-slate-900 mix-blend-darken mb-6 md:mb-10 text-center md:text-left max-w-5xl">
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                        >
                            Automate Your&nbsp;
                        </motion.span>
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="block italic text-purple-600"
                        >
                            Ad Revenue
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-8 px-4 md:px-0"
                    >
                        <div className="h-[1px] w-12 bg-slate-900 hidden md:block" />
                        <p className="text-base md:text-xl text-slate-600 max-w-lg text-center md:text-left font-light leading-relaxed text-balance">
                            Stop guessing. Start engineering. The AI-driven platform that optimizes your campaigns 24/7.
                        </p>
                    </motion.div>

                    {/* Main CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-8 md:mt-12 flex flex-col items-center gap-4 w-full sm:flex-row sm:w-auto"
                    >
                        <Link
                            href="/signup"
                            className="w-full sm:w-auto group relative px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-medium overflow-hidden shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex justify-center"
                        >
                            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative flex items-center gap-2">
                                Start Free <ArrowRight className="w-5 h-5" />
                            </span>
                        </Link>

                        <Link
                            href="/platform"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 border border-purple-100 rounded-full text-lg font-medium hover:bg-purple-50 hover:border-purple-200 transition-all shadow-sm flex items-center justify-center gap-2"
                        >
                            View Live Demo
                        </Link>


                    </motion.div>
                </div>

                {/* Right Content - Abstract Visual Composition */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-[600px] h-[600px] pointer-events-none">
                    {/* Floating Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, rotate: 12 }}
                        animate={{ opacity: 1, x: 0, rotate: 6 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute top-20 right-20 w-64 h-80 bg-white rounded-3xl shadow-2xl shadow-purple-900/10 border border-white/60 backdrop-blur-xl p-6 flex flex-col gap-4 z-20"
                    >
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                            <div className="w-6 h-6 bg-purple-500 rounded-full" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-slate-100 rounded-full" />
                            <div className="h-4 w-2/3 bg-slate-100 rounded-full" />
                        </div>
                        <div className="mt-auto h-24 bg-purple-50 rounded-xl border border-purple-100 relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-purple-200/50 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, rotate: -12 }}
                        animate={{ opacity: 1, x: -40, rotate: -6 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="absolute bottom-40 right-60 w-56 h-64 bg-slate-900 rounded-3xl shadow-xl p-6 border border-slate-700 z-10"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="h-2 w-12 bg-slate-700 rounded-full" />
                            <div className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        </div>
                        <div className="flex gap-2 items-end h-32">
                            <div className="w-1/4 h-2/3 bg-slate-700 rounded-t-lg" />
                            <div className="w-1/4 h-full bg-purple-500 rounded-t-lg shadow-lg shadow-purple-500/30" />
                            <div className="w-1/4 h-1/2 bg-slate-700 rounded-t-lg" />
                            <div className="w-1/4 h-3/4 bg-slate-700 rounded-t-lg" />
                        </div>
                    </motion.div>
                </div>

                {/* Abstract 3D Element Placeholder */}
                <motion.div
                    style={{ rotate }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border-[1px] border-slate-900/5 rounded-full z-0 pointer-events-none"
                />
            </div>
        </section >
    );
}
