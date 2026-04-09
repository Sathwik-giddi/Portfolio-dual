"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/footer";
import { useRef } from "react";
import { Activity, Box, Sun } from "lucide-react";

const team = [
    { name: "Eoin Hinchy", role: "CEO", color: "bg-blue-200" },
    { name: "Thomas Kinsella", role: "COO", color: "bg-purple-200" },
    { name: "Sarah O'Connor", role: "Product", color: "bg-pink-200" },
    { name: "Michael Chen", role: "Engineering", color: "bg-green-200" },
    { name: "Alex Rivera", role: "Design", color: "bg-orange-200" },
    { name: "Sam Lee", role: "Marketing", color: "bg-yellow-200" },
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yStart = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] overflow-hidden" ref={containerRef}>

            {/* Global Noise */}
            <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay z-50"></div>

            {/* Cinematic Hero */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

                <motion.div style={{ y: yStart }} className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-[10vw] leading-[0.85] font-serif font-medium tracking-tighter text-slate-900 mb-8">
                            Architects of <br />
                            <span className="italic text-purple-600 block transform -rotate-2">Attention</span>
                        </h1>
                    </motion.div>
                </motion.div>
            </section>

            {/* Visual Narrative */}
            <div className="relative py-32 md:py-64 container mx-auto px-6 max-w-6xl">

                {/* Step 1: The Signal */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-64 relative group">
                    {/* Massive Number */}
                    <div className="absolute -top-32 -left-20 text-[20vw] font-serif text-slate-900/5 select-none z-0 leading-none">01</div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="w-full md:w-1/2 relative z-10"
                    >
                        {/* Abstract Visual: Waveform */}
                        <div className="aspect-square bg-white rounded-[3rem] shadow-2xl border border-purple-100 flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                            <div className="flex items-center gap-1 h-32">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: ["20%", "80%", "20%"] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                        className="w-4 bg-slate-900 rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="w-full md:w-1/2 relative z-10 pl-10"
                    >
                        <h2 className="text-6xl font-serif text-slate-900 mb-6">The Signal.</h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-light max-w-md">
                            The internet became loud. Brands started shouting. We built algorithms that hear the frequency others miss.
                        </p>
                    </motion.div>
                </div>

                {/* Step 2: The Engine */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-64 relative group">
                    <div className="absolute -top-32 -right-20 text-[20vw] font-serif text-slate-900/5 select-none z-0 leading-none">02</div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="w-full md:w-1/2 relative z-10"
                    >
                        {/* Abstract Visual: 3D Grid */}
                        <div className="aspect-square bg-slate-900 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <Box className="w-32 h-32 text-purple-400 stroke-1" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="w-full md:w-1/2 relative z-10 pr-10 text-right md:text-left"
                    >
                        <h2 className="text-6xl font-serif text-slate-900 mb-6">The Engine.</h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-light max-w-md ml-auto md:ml-0">
                            We don't buy media. We engineer outcomes. Our agents trade on 40 exchanges simultaneously.
                        </p>
                    </motion.div>
                </div>

                {/* Step 3: The Future */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-32 relative group">
                    <div className="absolute -top-32 -left-20 text-[20vw] font-serif text-slate-900/5 select-none z-0 leading-none">03</div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="w-full md:w-1/2 relative z-10"
                    >
                        {/* Abstract Visual: The Orb */}
                        <div className="aspect-square bg-white rounded-[3rem] shadow-2xl border border-orange-100 flex items-center justify-center overflow-hidden relative">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-48 h-48 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full blur-[60px]"
                            />
                            <div className="relative z-10">
                                <Sun className="w-24 h-24 text-slate-900 stroke-1" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="w-full md:w-1/2 relative z-10 pl-10"
                    >
                        <h2 className="text-6xl font-serif text-slate-900 mb-6">The Future.</h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-light max-w-md">
                            A world where ads aren't interruptions—they're answers. Relevant, timely, and respectful.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Team Yearbook */}
            <section className="py-32 overflow-hidden bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4">The Talent</h2>
                    <p className="font-mono text-slate-500 uppercase tracking-widest">Global Optimizers</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 px-4">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: (i % 2 === 0 ? -3 : 3) }}
                            whileInView={{ opacity: 1, rotate: (i % 2 === 0 ? -3 : 3) }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                            className="relative w-64 h-80 bg-white p-4 shadow-lg flex flex-col transition-all duration-300 ease-out"
                        >
                            <div className={`flex-1 ${member.color} mb-4 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500`}>
                                <div className="w-full h-full flex items-center justify-center text-8xl font-serif text-white/50 select-none">
                                    {member.name[0]}
                                </div>
                            </div>
                            <div className="font-serif text-2xl text-slate-900 leading-none mb-1">{member.name}</div>
                            <div className="font-mono text-xs uppercase text-slate-500 tracking-wider">{member.role}</div>

                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/80 transform -rotate-2 opacity-80 shadow-sm backdrop-blur-sm" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Big Stats */}
            <section className="py-32 text-center">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { val: "1.2B", lbl: "Managed" },
                            { val: "50k", lbl: "Campaigns" },
                            { val: "24/7", lbl: "Uptime" },
                            { val: "100%", lbl: "Bootstrapped" },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-6xl md:text-8xl font-serif text-slate-900 tracking-tight">{s.val}</div>
                                <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-purple-600 mt-2">{s.lbl}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
