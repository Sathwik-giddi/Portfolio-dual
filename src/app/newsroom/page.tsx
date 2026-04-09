"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, ArrowRight, Zap, Globe, TrendingUp } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";

// --- Fake Data ---
const newsItems = [
    {
        id: 1,
        date: "JAN 12, 2026",
        category: "FUNDING",
        title: "AdCoach Secures $50M Series B to Decentralize Ad Spend.",
        excerpt: "Led by Sequoia, with participation from Founders Fund. The capital will fuel our expansion into the Asian market and accelerate our autonomous bidding engine.",
        image: "https://images.unsplash.com/photo-1559136555-9303dff16302?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3", // Office/Meeting
        color: "text-lime-400"
    },
    {
        id: 2,
        date: "DEC 05, 2025",
        category: "PRODUCT",
        title: "Introducing Kinetic: The End of Static Banners.",
        excerpt: "Our new generative video engine automatically converts static assets into high-converting motion graphics. No editors required.",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3", // Abstract/Neon
        color: "text-pink-400"
    },
    {
        id: 3,
        date: "NOV 20, 2025",
        category: "PARTNERSHIP",
        title: "Snowflake x AdCoach: Real-Time Data Clean Rooms.",
        excerpt: "A strategic alliance to bring privacy-first attribution to the enterprise. Match first-party data without it ever leaving your warehouse.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2672&ixlib=rb-4.0.3", // Data/Tech
        color: "text-cyan-400"
    },
    {
        id: 4,
        date: "OCT 14, 2025",
        category: "CULTURE",
        title: "Why we banned meetings on Tuesdays.",
        excerpt: "Deep work is the only currency that matters. How our engineering team shipped in record time by eliminating context switching.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3", // Office
        color: "text-purple-400"
    },
    {
        id: 5,
        date: "SEP 01, 2025",
        category: "REPORT",
        title: "The State of ROAS 2025: Audio is the New Video.",
        excerpt: "Our annual industry report analyzing $2B in ad spend reveals a shocking shift towards programmatic audio.",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3", // Sound/Wave
        color: "text-orange-400"
    },
];

const tickerItems = ["BREAKING: SERIES B SECURED", "•", "NEW FEATURE: KINETIC VIDEO", "•", "HIRING: HEAD OF AI", "•", "GLOBAL EXPANSION", "•", "AdCoach LIVE", "•"];

export default function NewsroomPage() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth mouse follow
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        // Move image relative to viewport
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    };

    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-pink-500 selection:text-white overflow-hidden" onMouseMove={handleMouseMove}>

            {/* Ticker Tape */}
            <div className="fixed top-20 left-0 w-full bg-slate-900 z-40 overflow-hidden py-3 border-y border-white/10">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex whitespace-nowrap min-w-full"
                >
                    {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                        <span key={i} className="text-white font-mono text-xs font-bold mx-8 tracking-widest uppercase flex items-center gap-2">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Hover Image Preview (The "Ghost") */}
            <motion.div
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
            >
                {newsItems.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{
                            opacity: hoveredItem === item.id ? 1 : 0,
                            scale: hoveredItem === item.id ? 1 : 0.8,
                            rotate: hoveredItem === item.id ? 0 : -10
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute w-[400px] h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                    >
                        <img src={item.image} alt="preview" className="w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6`}>
                            <span className={`text-2xl font-black uppercase ${item.color}`}>{item.category}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <main className="pt-48 pb-32 container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row justify-between items-end gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-6 ml-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Live Feed</span>
                            </div>
                            <h1 className="text-8xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter text-slate-900">
                                The <span className="italic text-purple-600">Wire</span>
                            </h1>
                        </div>
                        <div className="md:text-right max-w-sm">
                            <p className="text-xl font-medium text-slate-600 leading-relaxed">
                                Latest transmission from the HQ. Breaking news, product drops, and classified intel.
                            </p>
                        </div>
                    </motion.div>

                    {/* Decorative Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-2 w-full bg-slate-900 mt-12 origin-left"
                    />
                </div>

                {/* The List View */}
                <div className="flex flex-col">
                    {newsItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className="group relative border-b border-slate-300 py-12 cursor-pointer transition-colors hover:bg-white/40 -mx-6 px-6 rounded-2xl"
                        >
                            <div className="grid md:grid-cols-12 gap-8 items-baseline">
                                {/* Date & Category */}
                                <div className="md:col-span-2 flex flex-col gap-2">
                                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-widest">
                                        {item.date}
                                    </span>
                                    <span className={`text-xs font-black uppercase tracking-widest ${item.color} opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0`}>
                                        {item.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="md:col-span-1">
                                    <ArrowRight className="w-6 h-6 -rotate-45 opacity-0 group-hover:opacity-100 transition-all text-slate-900 group-hover:rotate-0" />
                                </div>

                                <div className="md:col-span-6">
                                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 leading-[0.9] group-hover:translate-x-2 transition-transform duration-300">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg text-slate-500 max-w-xl group-hover:text-slate-900 transition-colors">
                                        {item.excerpt}
                                    </p>
                                </div>

                                {/* Action */}
                                <div className="md:col-span-3 text-right hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-slate-900 rounded-full text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-colors">
                                        Read Story
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Media Kit Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 bg-slate-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
                >
                    {/* Background Noise/Grid */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px]" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-6xl font-serif mb-8">Brand Assets & <br />Media Kit.</h2>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { label: "Logos", detail: "Vector & PNG" },
                                    { label: "Product Shots", detail: "Hi-Res UI" },
                                    { label: "Executive Team", detail: "Headshots" },
                                    { label: "B-Roll", detail: "4K Footage" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-2xl font-bold mb-1">{stat.label}</div>
                                        <div className="text-sm text-slate-400 font-mono uppercase">{stat.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Button className="h-16 px-10 text-lg rounded-full bg-white text-slate-900 hover:bg-lime-400 hover:text-slate-900 font-bold transition-all hover:scale-105">
                                <Download className="mr-2 w-5 h-5" /> Download Full Kit (ZIP)
                            </Button>
                            <p className="text-slate-500 text-sm max-w-xs text-center">
                                By downloading, you agree to our Brand Guidelines and Trademark Policy.
                            </p>
                        </div>
                    </div>
                </motion.section>

            </main>
            <Footer />
        </div>
    );
}
