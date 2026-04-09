"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Shield, Globe } from "lucide-react";

const features = [
    {
        title: "The Storyboard",
        description: "Visualize your entire workflow in one infinite canvas. Drag, drop, and connect actions to build complex automation logic.",
        icon: Layout,
        color: "bg-purple-100 text-purple-600",
        colSpan: "lg:col-span-2",
    },
    {
        title: "Pre-built Templates",
        description: "Access thousands of ready-to-use templates for common security and IT use cases.",
        icon: Globe,
        color: "bg-mint-100 text-teal-700", // Using teal as proxy for mint text
        colSpan: "lg:col-span-1",
    },
    {
        title: "Secure by Design",
        description: "Enterprise-grade security with SOC 2 Type II compliance, SSO, and granular role-based access control.",
        icon: Shield,
        color: "bg-blue-100 text-blue-600",
        colSpan: "lg:col-span-1",
    },
    {
        title: "Instant Actions",
        description: "Connect to any API in seconds. No wrappers or SDKs required. Just pure JSON.",
        icon: Zap,
        color: "bg-peach-100 text-orange-600", // Using orange as proxy for peach text
        colSpan: "lg:col-span-2",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                        Everything you need to <br /> <span className="italic text-purple-600">automate anything</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Powerful tools that adapt to how you work, not the other way around.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 ${feature.colSpan}`}
                        >
                            <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
