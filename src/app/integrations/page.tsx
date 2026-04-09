"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight, Search, PlusCircle, Command, MessageSquare, Database, BarChart3, Globe, Trello, Slack, Mail, Zap } from "lucide-react";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const categories = ["All", "CRM", "Social", "Analytics", "Project Mgmt"];

const integrations = [
    {
        id: "salesforce",
        name: "Salesforce",
        category: "CRM",
        description: "Sync leads and opportunities automatically.",
        icon: Database,
        color: "text-blue-500",
        shadow: "hover:shadow-blue-500/20",
        border: "hover:border-blue-200"
    },
    {
        id: "hubspot",
        name: "HubSpot",
        category: "CRM",
        description: "Bi-directional data sync for marketing automation.",
        icon: Globe,
        color: "text-orange-500",
        shadow: "hover:shadow-orange-500/20",
        border: "hover:border-orange-200"
    },
    {
        id: "slack",
        name: "Slack",
        category: "Social",
        description: "Get real-time alerts on campaign performance.",
        icon: Slack,
        color: "text-purple-500",
        shadow: "hover:shadow-purple-500/20",
        border: "hover:border-purple-200"
    },
    {
        id: "meta",
        name: "Meta Ads",
        category: "Social",
        description: "Direct API connection for ad creation and reporting.",
        icon: Zap,
        color: "text-blue-600",
        shadow: "hover:shadow-blue-600/20",
        border: "hover:border-blue-200"
    },
    {
        id: "tiktok",
        name: "TikTok",
        category: "Social",
        description: "Manage creative assets and audience targeting.",
        icon: MessageSquare, // Placeholder
        color: "text-pink-500",
        shadow: "hover:shadow-pink-500/20",
        border: "hover:border-pink-200"
    },
    {
        id: "google",
        name: "Google Analytics",
        category: "Analytics",
        description: "Enrich your conversion data with GA4 events.",
        icon: BarChart3,
        color: "text-yellow-500",
        shadow: "hover:shadow-yellow-500/20",
        border: "hover:border-yellow-200"
    },
    {
        id: "jira",
        name: "Jira",
        category: "Project Mgmt",
        description: "Create tickets from performance anomalies.",
        icon: Trello, // Placeholder
        color: "text-blue-700",
        shadow: "hover:shadow-blue-700/20",
        border: "hover:border-blue-200"
    },
    {
        id: "asana",
        name: "Asana",
        category: "Project Mgmt",
        description: "Track creative production workflows.",
        icon: Trello,
        color: "text-red-500",
        shadow: "hover:shadow-red-500/20",
        border: "hover:border-red-200"
    },
    {
        id: "snowflake",
        name: "Snowflake",
        category: "Analytics",
        description: "Export raw data for custom warehousing.",
        icon: Database,
        color: "text-cyan-500",
        shadow: "hover:shadow-cyan-500/20",
        border: "hover:border-cyan-200"
    },
];

export default function IntegrationsPage() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredIntegrations = integrations.filter(app => {
        const matchesCategory = filter === "All" || app.category === filter;
        const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-purple-300 selection:text-black">

            {/* Background Constellation Mesh */}
            <div className="fixed inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #a855f7 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <main className="pt-32 pb-20 relative z-10">

                {/* Hero */}
                <section className="container mx-auto px-6 mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-8"
                    >
                        <div className="bg-white/40 backdrop-blur-md border border-white/50 px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            API Status: Operational
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-serif font-medium tracking-tighter text-slate-900 mb-6"
                    >
                        The App <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Matrix</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-light">
                        Connect your entire stack. 100+ native integrations. <br />
                        If it has an API, we can pipe into it.
                    </p>

                    {/* Glass Command Bar */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl mx-auto relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-full shadow-2xl flex items-center px-6 py-4 border border-white/50 group-focus-within:border-purple-400 transition-colors">
                            <Search className="text-slate-400 w-5 h-5 mr-3" />
                            <input
                                type="text"
                                placeholder="Search apps (e.g. Sales, Data...)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400 text-lg"
                            />
                            <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-slate-100 rounded border border-slate-200 text-xs font-mono text-slate-500">
                                <Command className="w-3 h-3" /> K
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Filter Tabs */}
                <section className="container mx-auto px-6 mb-12">
                    <div className="flex justify-center gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-bold transition-all relative",
                                    filter === cat ? "text-white" : "text-slate-500 hover:text-slate-900"
                                )}
                            >
                                {filter === cat && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-slate-900 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* The Grid */}
                <section className="container mx-auto px-6 max-w-6xl min-h-[500px]">
                    <LayoutGroup>
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence>
                                {filteredIntegrations.map((app, idx) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        key={app.id}
                                        className={cn(
                                            "bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/60 transition-all duration-300 group cursor-pointer relative overflow-hidden",
                                            "hover:bg-white hover:-translate-y-1 hover:shadow-xl",
                                            app.shadow,
                                            app.border
                                        )}
                                    >
                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300", app.color.replace('text', 'bg').replace('500', '50').replace('600', '50').replace('700', '50'))}>
                                                    <app.icon className={cn("w-7 h-7", app.color)} />
                                                </div>
                                                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300", app.color.replace('text', 'bg').replace('500', '100'))}>
                                                    <ArrowUpRight className={cn("w-4 h-4", app.color)} />
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{app.name}</h3>
                                            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">{app.description}</p>

                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-green-400 transition-colors" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">{app.category}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Request Card (Always filtered out if typing search, but visible on all/empty) */}
                            {searchQuery === "" && (filter === "All") && (
                                <motion.div
                                    layout
                                    className="bg-slate-50/50 border border-dashed border-slate-300 p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group min-h-[240px]"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mb-6">
                                        <PlusCircle className="w-6 h-6 text-slate-400 group-hover:text-purple-600 transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Missing something?</h3>
                                    <p className="text-sm text-slate-500 max-w-[200px]">Perform a custom build or request a new integration.</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </LayoutGroup>
                </section>

                <section className="container mx-auto px-6 mt-32 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-serif text-slate-900 mb-4">Developer First</h2>
                        <p className="text-slate-600 mb-8 text-lg">
                            Don't want to use our UI? Everything you see here is available via our GraphQL API.
                        </p>
                        <Button variant="outline" className="rounded-full px-8 h-12 border-slate-300 text-slate-700 font-bold hover:bg-slate-900 hover:text-white transition-colors">
                            <Database className="w-4 h-4 mr-2" /> Read the Docs
                        </Button>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
