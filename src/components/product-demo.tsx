"use client";

import React from "react";

import { motion } from "framer-motion";

export function ProductDemo() {

    const [activeTab, setActiveTab] = React.useState(0);
    const [settings, setSettings] = React.useState({ email: true, twoFa: false, pub: false });
    const [members, setMembers] = React.useState([
        { name: "Alex Chen", role: "Admin", status: "Online" },
        { name: "Sarah Jones", role: "Editor", status: "Offline" },
        { name: "Mike Ross", role: "Viewer", status: "Online" },
    ]);
    const [exportStatus, setExportStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

    const handleExport = () => {
        if (exportStatus !== 'idle') return;
        setExportStatus('loading');
        setTimeout(() => {
            setExportStatus('success');
            setTimeout(() => setExportStatus('idle'), 2000);
        }, 1500);
    };

    const handleInvite = () => {
        const names = ["Emma Wilson", "James Liu", "Sofia Rodriguez", "David Kim"];
        const randomName = names[members.length % names.length]; // Deterministic rotation
        setMembers([...members, { name: randomName, role: "Viewer", status: "Pending" }]);
    };

    const tabs = [
        { icon: "layout-dashboard", label: "Overview" },
        { icon: "bar-chart-2", label: "Analytics" },
        { icon: "users", label: "Team" },
        { icon: "settings", label: "Settings" }
    ];

    return (
        <section className="py-20 flex justify-center overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 mb-6">
                        Complete Visibility. <br />
                        <span className="text-purple-600 italic">Zero Blindspots.</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        See your entire ad ecosystem in one high-fidelity dashboard. Track spend, attribution, and creative performance in real-time.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Browser Frame */}
                    <div className="rounded-xl bg-[#0B0F19] shadow-2xl overflow-hidden border border-slate-800 ring-1 ring-white/10 relative group">

                        {/* Glow Gradient */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

                        {/* Browser Header */}
                        <div className="h-10 bg-[#0F131F] flex items-center px-4 gap-2 border-b border-slate-800 z-10 relative">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 flex-1 max-w-lg h-6 bg-[#1A1F2E] rounded-md text-[10px] text-slate-400 flex items-center px-3 font-mono border border-slate-700/50">
                                <span className="text-slate-600 mr-2">🔒</span>
                                <span className="text-slate-500">https://</span>app.ads-platform.com/dashboard/{tabs[activeTab].label.toLowerCase()}
                            </div>
                        </div>

                        {/* Dashboard Mock Content */}
                        <div className="bg-[#0B0F19] p-0 min-h-[500px] md:min-h-0 md:aspect-[16/9] relative flex flex-col md:flex-row">

                            {/* Sidebar */}
                            <div className="w-16 md:w-20 border-r border-slate-800/50 flex flex-col items-center py-6 gap-6 z-10 bg-[#0B0F19] hidden md:flex">
                                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-xs">A</div>
                                <div className="flex flex-col gap-4 mt-4 w-full px-2">
                                    {tabs.map((tab, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveTab(i)}
                                            className={`h-10 w-full rounded-lg flex items-center justify-center transition-all duration-200 ${activeTab === i ? 'bg-purple-500/10 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'text-slate-600 hover:bg-slate-800/50 hover:text-slate-400'}`}
                                        >
                                            <div className="w-5 h-5" style={{
                                                maskImage: `url('https://api.iconify.design/lucide/${tab.icon}.svg')`,
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                maskPosition: 'center',
                                                backgroundColor: 'currentColor'
                                            }} />
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-auto w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 overflow-y-auto md:overflow-hidden flex flex-col relative">

                                {/* Top Bar */}
                                <div className="h-16 border-b border-slate-800/50 flex items-center justify-between px-4 md:px-8 bg-[#0B0F19]/95 backdrop-blur z-10 sticky top-0">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-white font-medium text-sm md:text-base">{tabs[activeTab].label}</h3>
                                        <span className="flex h-2 w-2 relative ml-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                    </div>
                                    <div className="flex gap-2 md:gap-3">
                                        <div className="h-8 px-3 rounded-md bg-[#131825] border border-slate-800 text-xs text-slate-400 flex items-center whitespace-nowrap">Last 30 Days</div>
                                        <button
                                            onClick={handleExport}
                                            disabled={exportStatus !== 'idle'}
                                            className={`h-8 px-3 rounded-md text-white text-xs font-medium flex items-center whitespace-nowrap shadow-lg transition-all ${exportStatus === 'success' ? 'bg-green-500 shadow-green-900/20' : 'bg-purple-600 shadow-purple-900/20 hover:bg-purple-500'}`}
                                        >
                                            {exportStatus === 'idle' ? 'Export' : exportStatus === 'loading' ? 'Generating...' : 'Report Ready!'}
                                        </button>
                                    </div>
                                </div>

                                {/* Content Grid */}
                                <div className="p-4 md:p-8 flex-1 overflow-y-auto">
                                    {activeTab === 0 && (
                                        <div className="grid grid-cols-12 gap-4 md:gap-6">
                                            {/* Stats Cards */}
                                            <div className="col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 h-auto">
                                                {[
                                                    { label: "Total Spend", val: "$124,592", trend: "+12.5%", good: true },
                                                    { label: "ROAS", val: "4.8x", trend: "+0.4x", good: true },
                                                    { label: "Conversions", val: "8,942", trend: "-2.1%", good: false },
                                                ].map((stat, i) => (
                                                    <div key={i} className="bg-[#131825] rounded-xl border border-slate-800 p-4 md:p-5 flex flex-col justify-between group hover:border-slate-700 transition-colors gap-4 sm:gap-0">
                                                        <div className="flex justify-between items-start">
                                                            <span className="text-slate-500 text-sm font-medium">{stat.label}</span>
                                                            <span className={`text-xs px-2 py-0.5 rounded-full ${stat.good ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                                                {stat.trend}
                                                            </span>
                                                        </div>
                                                        <div className="text-2xl md:text-3xl text-white font-semibold tracking-tight">{stat.val}</div>
                                                        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                                            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${(i * 33) % 40 + 40}%` }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Main Chart */}
                                            <div className="col-span-12 md:col-span-8 bg-[#131825] rounded-xl border border-slate-800 p-4 md:p-6 relative overflow-hidden group min-h-[250px] md:min-h-0">
                                                <div className="flex justify-between items-center mb-6 relative z-10">
                                                    <div>
                                                        <h4 className="text-slate-100 text-sm font-medium mb-1">Revenue vs Spend</h4>
                                                        <p className="text-xs text-slate-500">Real-time attribution data</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                                            <div className="w-2 h-2 rounded-full bg-[#0891b2] shadow-[0_0_8px_rgba(34,211,238,0.5)]" /> Revenue
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                                            <div className="w-2 h-2 rounded-full bg-[#7e22ce] shadow-[0_0_8px_rgba(168,85,247,0.5)]" /> Spend
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="absolute inset-x-6 top-20 bottom-0 flex flex-col justify-between pointer-events-none opacity-20">
                                                    <div className="w-full h-px border-t border-dashed border-slate-500" />
                                                    <div className="w-full h-px border-t border-dashed border-slate-500" />
                                                    <div className="w-full h-px border-t border-dashed border-slate-500" />
                                                </div>

                                                <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 flex items-end px-4 md:px-6 gap-1.5 md:gap-2 z-20">
                                                    {[...Array(24)].map((_, i) => {
                                                        const height1 = 20 + ((i * 13) % 60);
                                                        const height2 = 30 + ((i * 7) % 50);
                                                        return (
                                                            <div key={i} className="flex-1 flex flex-col justify-end gap-1 group/bar relative h-full">
                                                                <div className="w-full bg-gradient-to-t from-[#0891b2] to-[#67e8f9] rounded-sm opacity-90 group-hover/bar:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover/bar:shadow-[0_0_20px_rgba(34,211,238,0.6)]" style={{ height: `${height1}%` }} />
                                                                <div className="w-full bg-gradient-to-t from-[#7e22ce] to-[#a855f7] rounded-sm opacity-90 group-hover/bar:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover/bar:shadow-[0_0_20px_rgba(168,85,247,0.6)]" style={{ height: `${height2}%` }} />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>

                                            {/* Side List */}
                                            <div className="col-span-12 md:col-span-4 bg-[#131825] rounded-xl border border-slate-800 p-4 md:p-6 flex flex-col gap-4">
                                                <h4 className="text-slate-300 text-sm font-medium mb-2">Active Channels</h4>
                                                {[
                                                    { n: "Meta / Instagram", v: "$45k", c: "bg-blue-500" },
                                                    { n: "TikTok Ads", v: "$32k", c: "bg-pink-500" },
                                                    { n: "Google Search", v: "$28k", c: "bg-green-500" },
                                                    { n: "YouTube", v: "$19k", c: "bg-red-500" },
                                                ].map((ch, i) => (
                                                    <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-2 h-2 rounded-full ${ch.c}`} />
                                                            <span className="text-slate-400 text-sm truncate max-w-[120px]">{ch.n}</span>
                                                        </div>
                                                        <span className="text-white text-sm font-mono">{ch.v}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 1 && (
                                        <div className="grid grid-cols-1 gap-6">
                                            {/* Analytics View */}
                                            <div className="bg-[#131825] rounded-xl border border-slate-800 p-6">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h4 className="text-slate-100 font-medium">Audience Growth</h4>
                                                    <div className="flex gap-2">
                                                        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">+24% vs last week</span>
                                                    </div>
                                                </div>
                                                <div className="h-64 flex items-end gap-1">
                                                    {[...Array(30)].map((_, i) => (
                                                        <div key={i} className="flex-1 bg-slate-800 hover:bg-purple-600 transition-colors rounded-t-sm relative group" style={{ height: `${30 + Math.random() * 60}%` }}>
                                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-20 pointer-events-none">
                                                                {Math.floor(Math.random() * 1000)} users
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-6">
                                                {['Impressions', 'Clicks', 'CTR'].map((metric, i) => (
                                                    <div key={i} className="bg-[#131825] p-6 rounded-xl border border-slate-800">
                                                        <div className="text-slate-500 text-sm mb-2">{metric}</div>
                                                        <div className="text-2xl text-white font-bold">{['2.4M', '84.2K', '3.8%'][i]}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 2 && (
                                        <div className="space-y-4">
                                            {/* Team View */}
                                            <div className="bg-[#131825] rounded-xl border border-slate-800 overflow-hidden">
                                                <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                                                    <h4 className="text-slate-100 font-medium">Team Members</h4>
                                                    <button onClick={handleInvite} className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded hover:bg-purple-500 transition-colors">invite Member</button>
                                                </div>
                                                <div className="divide-y divide-slate-800">
                                                    {members.map((user, i) => (
                                                        <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-800/20">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                                                                    {user.name.split(' ').map(n => n[0]).join('')}
                                                                </div>
                                                                <div>
                                                                    <div className="text-sm text-white font-medium">{user.name}</div>
                                                                    <div className="text-xs text-slate-500">{user.role}</div>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-2 h-2 rounded-full ${user.status === 'Online' ? 'bg-green-500' : user.status === 'Pending' ? 'bg-yellow-500' : 'bg-slate-600'}`} />
                                                                <span className="text-xs text-slate-400">{user.status}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 3 && (
                                        <div className="space-y-6">
                                            {/* Settings View */}
                                            <div className="bg-[#131825] rounded-xl border border-slate-800 p-6">
                                                <h4 className="text-slate-100 font-medium mb-6">General Settings</h4>
                                                <div className="space-y-6">
                                                    {[
                                                        { key: 'email', label: "Email Notifications", desc: "Receive daily performance summaries" },
                                                        { key: 'twoFa', label: "Two-Factor Auth", desc: "Add an extra layer of security" },
                                                        { key: 'pub', label: "Public Profile", desc: "Allow others to see your workspace" },
                                                    ].map((setting, i) => (
                                                        <div key={i} className="flex items-center justify-between group cursor-pointer" onClick={() => setSettings(s => ({ ...s, [setting.key]: !s[setting.key as keyof typeof settings] }))}>
                                                            <div>
                                                                <div className="text-sm text-white font-medium group-hover:text-purple-400 transition-colors">{setting.label}</div>
                                                                <div className="text-xs text-slate-500">{setting.desc}</div>
                                                            </div>
                                                            <div className={`w-10 h-6 rounded-full relative transition-colors ${settings[setting.key as keyof typeof settings] ? 'bg-purple-600' : 'bg-slate-700'}`}>
                                                                <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${settings[setting.key as keyof typeof settings] ? 'left-5' : 'left-1'}`} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Shadow / Glow */}
                    <div className="absolute -inset-10 bg-purple-500/20 blur-3xl -z-10 rounded-full opacity-50" />
                </motion.div>
            </div>
        </section>
    );
}
