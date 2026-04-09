"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
    {
        title: "Strategic Onboarding",
        description: "Campaign goal definition, target audience configuration, and competitive landscape analysis."
    },
    {
        title: "Platform Connection",
        description: "Secure OAuth setup, historical data import (24 months), and real-time sync."
    },
    {
        title: "AI-Driven Analysis",
        description: "Automated performance review, opportunity scoring, and risk assessment."
    },
    {
        title: "Content Gen & Testing",
        description: "AI-assisted creative development, multi-variant creation, and launch scheduling."
    },
    {
        title: "Performance Management",
        description: "Continuous monitoring, automated optimization suggestions, and ROI forecasting."
    }
];

export function WorkflowDemo() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-serif font-medium mb-4 text-slate-900">Integrated Workflow</h2>
                    <p className="text-slate-600">From onboarding to optimization in 5 intelligent steps.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 pl-16 md:pl-0 md:text-right md:pr-16 w-full">
                                    {idx % 2 === 0 && (
                                        <div className="md:text-left md:pl-16">
                                            <h3 className="text-xl font-bold text-purple-600 mb-2">Step {idx + 1}</h3>
                                            <h4 className="text-2xl font-serif mb-2 text-slate-900">{step.title}</h4>
                                            <p className="text-slate-600">{step.description}</p>
                                        </div>
                                    )}
                                    {idx % 2 !== 0 && (
                                        <div className="md:text-right md:pr-16 hidden md:block">
                                            <h3 className="text-xl font-bold text-purple-600 mb-2">Step {idx + 1}</h3>
                                            <h4 className="text-2xl font-serif mb-2 text-slate-900">{step.title}</h4>
                                            <p className="text-slate-600">{step.description}</p>
                                        </div>
                                    )}
                                    {/* Mobile View for Odd items */}
                                    {idx % 2 !== 0 && (
                                        <div className="md:hidden">
                                            <h3 className="text-xl font-bold text-purple-600 mb-2">Step {idx + 1}</h3>
                                            <h4 className="text-2xl font-serif mb-2 text-slate-900">{step.title}</h4>
                                            <p className="text-slate-600">{step.description}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Center Marker */}
                                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 shadow-lg">
                                    <div className="w-4 h-4 rounded-full bg-purple-500" />
                                </div>

                                {/* Empty Side for layout balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
