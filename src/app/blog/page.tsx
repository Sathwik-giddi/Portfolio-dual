"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code, Zap, Lightbulb, Clock, Tag, Archive, BookOpen, History } from "lucide-react";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useState, MouseEvent } from "react";
import Link from "next/link";

// --- Fake Data ---
const posts = [
    {
        id: 1,
        title: "Scaling to 1M requests/sec with Rust.",
        excerpt: "How we replaced our entire bidding engine with a custom Rust microservice architecture.",
        category: "Engineering",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3", // Code
        color: "text-orange-500",
        tags: ["#Rust", "#HighScale", "#Systems"]
    },
    {
        id: 2,
        title: "Designing Dark Mode for Daylight.",
        excerpt: "Why true black isn't always the answer. A deep dive into contrast ratios and ambient light adaptation.",
        category: "Product Design",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3", // Cyberpunk
        color: "text-cyan-500",
        tags: ["#UI/UX", "#Accessibility", "#Color"]
    },
    {
        id: 3,
        title: "The Death of the Daily Standup.",
        excerpt: "Async-first communication: How we reclaimed 40% of our engineering time.",
        category: "Team Culture",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3", // Team
        color: "text-purple-500",
        tags: ["#RemoteWork", "#Productivity"]
    },
    {
        id: 4,
        title: "From Redux to Zustland: A Migration Story.",
        excerpt: "Simplifying state management in a complex dashboard application.",
        category: "Engineering",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3", // React
        color: "text-blue-500",
        tags: ["#React", "#State", "#Frontend"]
    },
    {
        id: 5,
        title: "The Philosophy of 'Good Enough' Deployments.",
        excerpt: "Why perfect is the enemy of shipped. Our CI/CD pipeline strategy.",
        category: "DevOps",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=2688&ixlib=rb-4.0.3", // Server
        color: "text-emerald-500",
        tags: ["#CI/CD", "#Infrastructure"]
    },
    {
        id: 6,
        title: "Generative Ad Creative: Beneath the Hood.",
        excerpt: "Explaining the latent diffusion models powering our new Studio feature.",
        category: "AI Research",
        readTime: "15 min",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2565&ixlib=rb-4.0.3", // AI
        color: "text-pink-500",
        tags: ["#AI", "#Generative", "#ML"]
    }
];

const archivedPosts = [
    {
        id: "a1",
        year: "2023",
        title: "Project Genesis: The First Commit.",
        excerpt: "Looking back at the original monolithic chaos that started it all.",
        category: "Origin Story"
    },
    {
        id: "a2",
        year: "2023",
        title: "Why we rejected 'Black Box' algorithms.",
        excerpt: "The founding principle of transparency that cost us our first client.",
        category: "Philosophy"
    },
    {
        id: "a3",
        year: "2022",
        title: "The v0.1 UI: A Post-Mortem.",
        excerpt: "Screenshots from the graveyard. What we learned from our ugliest interface.",
        category: "Design History"
    }
];

export default function BlogPage() {
    const [hoveredPost, setHoveredPost] = useState<number | null>(null);
    const [showArchives, setShowArchives] = useState(false);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    };

    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-cyan-300 selection:text-black" onMouseMove={handleMouseMove}>

            {/* The Floating Polaroid Preview */}
            <motion.div
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "20px",
                    translateY: "20px",
                }}
                className="fixed top-0 left-0 z-50 pointer-events-none hidden lg:block"
            >
                {posts.map((post) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{
                            opacity: hoveredPost === post.id ? 1 : 0,
                            scale: hoveredPost === post.id ? 1 : 0.8,
                            rotate: hoveredPost === post.id ? 12 : -5,
                            y: hoveredPost === post.id ? 0 : 20
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute w-[320px] bg-white p-3 pb-8 shadow-2xl rotate-3 rounded-sm border border-slate-200"
                    >
                        <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden mb-4 relative grayscale hover:grayscale-0 transition-all">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            <div className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                                {post.readTime}
                            </div>
                        </div>
                        <div className="px-2">
                            <div className={`text-xs font-black uppercase tracking-widest ${post.color} mb-1`}>
                                {post.category}
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono text-slate-400">{tag}</span>
                                ))}
                            </div>
                        </div>
                        {/* Tape Effect */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-100/80 backdrop-blur-sm rotate-2 shadow-sm" />
                    </motion.div>
                ))}
            </motion.div>

            <main className="pt-40 pb-32 container mx-auto px-6 max-w-5xl">

                <div className="mb-32 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block"
                    >
                        <span className="bg-white/50 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 inline-block">
                            Engineering & Product
                        </span>
                    </motion.div>
                    <h1 className="text-7xl md:text-9xl font-serif text-slate-900 tracking-tighter leading-[0.8] mb-8">
                        The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">Log</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                        A collection of thoughts on high-scale systems, generative design, and the future of programmatic advertising.
                    </p>
                </div>

                <div className="flex flex-col gap-px bg-slate-200 border-t border-b border-slate-200">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            onMouseEnter={() => setHoveredPost(post.id)}
                            onMouseLeave={() => setHoveredPost(null)}
                            className="group relative bg-[#F0EBFA] hover:bg-white transition-colors duration-300 py-12 px-4 md:px-8 cursor-pointer overflow-hidden"
                        >
                            {/* Hover Accent Line */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${post.color.replace('text', 'bg')} scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center`} />

                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10">

                                <div className="md:w-3/12">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-mono text-xs text-slate-400 group-hover:text-slate-900 transition-colors">
                                            0{post.id}
                                        </span>
                                        <div className={`h-px w-8 bg-slate-300 group-hover:w-12 transition-all ${post.color.replace('text', 'bg')}`} />
                                    </div>
                                    <span className={`text-xs font-black uppercase tracking-widest ${post.color} opacity-60 group-hover:opacity-100`}>
                                        {post.category}
                                    </span>
                                </div>

                                <div className="md:w-7/12">
                                    <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-3 group-hover:translate-x-2 transition-transform duration-300 leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-500 text-lg group-hover:text-slate-700 transition-colors max-w-xl">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="md:w-2/12 text-right opacity-0 group-hover:opacity-100 transition-opacity flex justify-end items-center">
                                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all group-hover:scale-110">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 text-center pb-20">
                    <div className="inline-block p-1 border border-slate-200 rounded-full bg-white relative z-20">
                        <Button
                            onClick={() => setShowArchives(!showArchives)}
                            variant="ghost"
                            className="rounded-full px-8 h-12 text-slate-500 hover:text-slate-900 font-bold tracking-widest uppercase text-xs flex items-center gap-2"
                        >
                            {showArchives ? <BookOpen className="w-4 h-4" /> : <Archive className="w-4 h-4" />}
                            {showArchives ? "Close Archives" : "Load Archives"}
                        </Button>
                    </div>

                    <AnimatePresence>
                        {showArchives && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-20 pb-0 max-w-4xl mx-auto text-left">
                                    <div className="flex items-center gap-4 mb-12">
                                        <div className="h-px flex-1 bg-slate-300 dashed" />
                                        <span className="font-mono text-xs uppercase text-slate-400">Restricted Access // Historical Data</span>
                                        <div className="h-px flex-1 bg-slate-300 dashed" />
                                    </div>

                                    <div className="grid gap-6">
                                        {archivedPosts.map((post) => (
                                            <motion.div
                                                key={post.id}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                className="group flex gap-8 p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-all cursor-not-allowed opacity-70 hover:opacity-100"
                                            >
                                                <div className="hidden md:block w-32 pt-1">
                                                    <div className="font-mono text-xs text-slate-400 mb-1">{post.year}</div>
                                                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">{post.category}</div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-serif text-slate-800 mb-2 group-hover:text-black flex items-center gap-2">
                                                        <History className="w-4 h-4 text-slate-400" />
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 font-mono">{post.excerpt}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-12 text-center">
                                        <p className="font-mono text-[10px] text-slate-400 uppercase">
                                            End of Record. Some files may be corrupted or redacted.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </main>
            <Footer />
        </div>
    );
}
