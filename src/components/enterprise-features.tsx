"use client";

import { motion } from "framer-motion";
import { Database, Brain, Video, Users } from "lucide-react";

const featureGroups = [
    {
        category: "Data Integration & Management",
        icon: Database,
        items: [
            "Secure OAuth 2.0 authentication for all platforms",
            "Read-only data access (no spending permissions)",
            "Custom data retention policies",
            "API webhook support for real-time updates",
            "Data export in multiple formats (CSV, JSON, PDF)"
        ]
    },
    {
        category: "AI Analysis Engine",
        icon: Brain,
        items: [
            "ROI and ROAS optimization algorithms",
            "Visual sentiment analysis & Creative scoring",
            "Competitive creative benchmarking",
            "Cross-platform synergy identification",
            "Audience overlap detection"
        ]
    },
    {
        category: "Video Production Studio",
        icon: Video,
        items: [
            "Text-to-video conversion & Storyboarding",
            "Multi-language voiceovers & Subtitles",
            "4K resolution support (Premium)",
            "Brand kit integration (logos, colors, fonts)",
            "Royalty-free music library"
        ]
    },
    {
        category: "Collaboration & Tools",
        icon: Users,
        items: [
            "Team member role management (RBAC)",
            "Client reporting portals",
            "Approval workflow systems",
            "Version history and change tracking",
            "Comment and annotation features"
        ]
    }
];

export function EnterpriseFeatures() {
    return (
        <section className="py-24" id="enterprise-features">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-medium mb-4">Enterprise-Grade Capabilities</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Built for scale, security, and performance. Everything large organizations need to dominate the ad landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {featureGroups.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-purple-600">
                                    <group.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-serif font-medium">{group.category}</h3>
                            </div>
                            <ul className="space-y-3 pl-2">
                                {group.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5  shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
