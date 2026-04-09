"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Lock, Server, FileCheck, Eye } from "lucide-react";

export function SecurityInfrastructure() {
    return (
        <section className="py-24" id="security">
            <div className="container mx-auto px-6">

                {/* Security Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-medium mb-4">Enterprise-Grade Security & Infrastructure</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Your data is protected by bank-level encryption and global compliance standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Security Column */}
                    <div className="bg-white p-8 rounded-xl border border-tines-forest/10 shadow-sm">
                        <h3 className="text-2xl font-serif font-medium mb-8 flex items-center gap-3">
                            <Shield className="w-6 h-6 text-tines-violet" />
                            Security & Compliance
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Lock, title: "End-to-end Encryption", desc: "AES-256 standard" },
                                { icon: FileCheck, title: "SOC 2 Type II", desc: "Certified compliant" },
                                { icon: Eye, title: "Role-Based Access", desc: "Granular permissions" },
                                { icon: Shield, title: "GDPR & CCPA", desc: "Full data privacy" },
                            ].map((item) => (
                                <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <item.icon className="w-5 h-5 text-slate-400 mb-3" />
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Infrastructure Column */}
                    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                        <h3 className="text-2xl font-serif font-medium mb-8 flex items-center gap-3">
                            <Globe className="w-6 h-6 text-purple-400" />
                            Global Infrastructure
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                    <Server className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">AWS Global Network</h4>
                                    <p className="text-sm text-slate-400">Deployed across US, EU, and APAC regions for low-latency performance.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                    <Brain className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Distributed AI Clusters</h4>
                                    <p className="text-sm text-slate-400">Real-time GPU processing for instant content generation and analysis.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-800 flex justify-between items-center">
                                <div>
                                    <div className="text-3xl font-bold text-green-400">99.9%</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest">Uptime SLA</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-400">Active</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest">Disaster Recovery</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function Brain({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.937-.5" /><path d="M19.937 17.5A4 4 0 0 1 18 18" /></svg>
    )
}
