"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Heart, Users, Zap, Globe, Sparkles } from "lucide-react";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";

// --- Components ---

// 1. Magnetic Job Row
function JobRow({ job, index }: { job: any; index: number }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        const rect = ref.current!.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Pull effect
        x.set(distanceX * 0.1);
        y.set(distanceY * 0.1);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href="#"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative block"
        >
            <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 group-hover:shadow-2xl group-hover:border-purple-200 group-hover:bg-white" />

            {/* Active Glow Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[2px]" />

            <div className="relative z-10 p-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex w-12 h-12 bg-slate-50 rounded-full items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                        <span className="text-lg font-serif italic text-slate-400 group-hover:text-purple-600">
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-1">
                            {job.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                            <span className="uppercase tracking-wider">{job.team}</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            <span>{job.location}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] bg-gradient-to-br ${i === 1 ? 'from-pink-400 to-rose-400' : i === 2 ? 'from-purple-400 to-indigo-400' : 'from-blue-400 to-cyan-400'}`} />
                        ))}
                    </div>
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </motion.a>
    );
}

// 2. Culture Cubes (CSS 3D ish)
const CultureCard = ({ title, desc, delay, gradient }: { title: string, desc: string, delay: number, gradient: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
        >
            <div className={`absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse`} />

            {/* Animated Abstract Shape */}
            <div className="h-48 mb-6 relative flex items-center justify-center">
                <div className={`w-24 h-24 bg-gradient-to-tr ${gradient} rounded-2xl opacity-80 backdrop-blur-md shadow-2xl transform rotate-12 group-hover:rotate-45 transition-transform duration-700 ease-in-out`} />
                <div className={`absolute w-24 h-24 border-2 border-slate-900/10 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-700`} />
            </div>

            <h3 className="text-2xl font-serif text-slate-900 mb-3 relative z-10">{title}</h3>
            <p className="text-slate-600 leading-relaxed relative z-10 font-medium">
                {desc}
            </p>
        </motion.div>
    );
};

const jobs = [
    { title: "Senior Software Engineer", team: "Engineering", location: "San Francisco" },
    { title: "Product Designer", team: "Design", location: "Remote, US" },
    { title: "Enterprise Account Executive", team: "Sales", location: "London, UK" },
    { title: "Developer Advocate", team: "Marketing", location: "New York, NY" },
    { title: "Staff ML Engineer", team: "Engineering", location: "San Francisco" },
    { title: "Head of Talent", team: "People", location: "Dublin, IE" },
];

export default function CareersPage() {
    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-pink-500 selection:text-white overflow-x-hidden">

            <main className="pt-32 pb-20">

                {/* Hero */}
                <section className="container mx-auto px-6 mb-32 text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-full blur-[120px] opacity-30 pointer-events-none animate-blob" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-slate-900/10 bg-white/50 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
                            We are hiring builders
                        </span>
                        <h1 className="text-7xl md:text-[8rem] font-serif font-medium tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                            Construct the <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x">
                                Impossible.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                            Join the team building the operating system for the attention economy.
                            <br className="hidden md:block" /> No politics. Just shipping.
                        </p>
                    </motion.div>
                </section>

                {/* Culture Grid */}
                <section className="container mx-auto px-6 mb-40">
                    <div className="grid md:grid-cols-3 gap-6">
                        <CultureCard
                            title="Obsess over impact"
                            desc="We measure output, not hours. If you can ship a feature in 2 hours that changes the business, take the rest of the week off."
                            delay={0.1}
                            gradient="from-blue-400 to-cyan-300"
                        />
                        <CultureCard
                            title="Radical Candor"
                            desc="Feedback is the breakfast of champions. We challenge ideas directly, but we care personally. Zero passive aggression."
                            delay={0.2}
                            gradient="from-purple-400 to-pink-300"
                        />
                        <CultureCard
                            title="Ownership Mandate"
                            desc="You are the CEO of your domain. You don't need permission to fix a bug, optimize a query, or improve a design."
                            delay={0.3}
                            gradient="from-orange-400 to-yellow-300"
                        />
                    </div>
                </section>

                {/* The Magnet Job List */}
                <section className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-end justify-between mb-16 px-2">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">Open Roles</h2>
                            <p className="text-slate-500 text-lg">Come do the best work of your life.</p>
                        </div>
                        <Button variant="outline" className="rounded-full px-6 border-slate-200 hidden md:flex">
                            View all 14 positions
                        </Button>
                    </div>

                    <div className="space-y-6">
                        {jobs.map((job, idx) => (
                            <JobRow key={idx} job={job} index={idx} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-400 text-sm font-medium mb-4">Don't see your role?</p>
                        <Button className="bg-slate-900 text-white rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-slate-900/20">
                            Pitch us a role <Sparkles className="ml-2 w-4 h-4 text-yellow-400" />
                        </Button>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
