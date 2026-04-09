"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Infinite Scroll Marquee
const Marquee = () => (
    <div className="relative flex overflow-hidden py-6 bg-lime-300 text-black font-black uppercase tracking-widest text-lg border-y-4 border-black rotate-1 scale-105 z-20 shadow-xl">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
            {Array(10).fill("REAL RESULTS • PROVEN GROWTH • SCALE FAST • ").map((text, i) => (
                <span key={i}>{text}</span>
            ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12">
            {Array(10).fill("REAL RESULTS • PROVEN GROWTH • SCALE FAST • ").map((text, i) => (
                <span key={i}>{text}</span>
            ))}
        </div>
    </div>
);

const caseStudies = [
    {
        brand: "SLEEK",
        industry: "E-COMMERCE",
        headline: "Turning Seasonal Inventory into a Revenue Engine.",
        result: "300%",
        metric: "ROAS LIFT",
        description: "Sleek Fashion needed to move inventory fast. By syncing their Shopify catalog with Ads, they automatically generated thousands of creative variations for top-selling SKUs, targeting high-intent shoppers with dynamic precision.",
        stats: [
            { label: "Conversion Rate", value: "+45%" },
            { label: "CPA Reduction", value: "20%" },
        ],
        accent: "text-emerald-600",
        bg: "bg-emerald-50",
        image: "from-emerald-200 to-lime-100"
    },
    {
        brand: "VOLT",
        industry: "AUTOMOTIVE",
        headline: "Driving Qualified Foot Traffic to Local Dealerships.",
        result: "-40%",
        metric: "COST / TEST DRIVE",
        description: "Volt Motors leveraged our geo-fencing technology to target users visiting competitor lots. The campaign delivered personalized inventory ads for vehicles available at the nearest showroom, closing the loop between online clicks and offline visits.",
        stats: [
            { label: "Store Visits", value: "3.2x" },
            { label: "Lead Vol", value: "+150%" },
        ],
        accent: "text-blue-600",
        bg: "bg-blue-50",
        image: "from-blue-200 to-cyan-100"
    },
    {
        brand: "TASKFLOW",
        industry: "SAAS",
        headline: "Capturing Decision Makers with Intent Data.",
        result: "2.5x",
        metric: "PIPELINE VELOCITY",
        description: "TaskFlow moved upmarket by integrating G2 Intent Data. They stopped targeting 'everyone' and started showing ads only to C-suite executives actively researching project management solutions, drastically improving lead quality.",
        stats: [
            { label: "Pipeline Generated", value: "$4.2M" },
            { label: "CAC Decrease", value: "35%" },
        ],
        accent: "text-purple-600",
        bg: "bg-purple-50",
        image: "from-purple-200 to-fuchsia-100"
    }
];

export function CaseStudies() {
    return (
        <section className="bg-slate-50 py-0 relative overflow-hidden text-slate-900">
            <Marquee />

            <div className="py-32 relative z-10">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mb-32 border-b border-slate-200 pb-8 flex flex-col md:flex-row items-end justify-between gap-6"
                    >
                        <h2 className="text-6xl md:text-8xl font-serif leading-none tracking-tight text-slate-900">
                            Proven <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 italic">Impact.</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-sm mb-2 font-medium">
                            Real-world results from brands rewriting their growth playbooks.
                        </p>
                    </motion.div>

                    <div className="space-y-32">
                        {caseStudies.map((study, idx) => (
                            <div key={study.brand} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>

                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full lg:w-1/2 aspect-square lg:aspect-[4/3] relative rounded-none overflow-hidden group border border-slate-200 shadow-xl"
                                >
                                    {/* Abstract Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${study.image} opacity-80 group-hover:scale-105 transition-transform duration-700`} />

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 p-10 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs font-bold tracking-[0.2em] border border-black/10 px-3 py-1 bg-white/50 backdrop-blur-md uppercase text-slate-900">{study.brand}</span>
                                            <ArrowUpRight className="w-6 h-6 text-slate-900 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className={`text-8xl font-bold tracking-tighter ${study.accent}`}>{study.result}</div>
                                            <div className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600">{study.metric}</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="w-full lg:w-1/2"
                                >
                                    <div className={`text-xs font-bold tracking-[0.2em] mb-6 uppercase ${study.accent}`}>{study.industry}</div>
                                    <h3 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-8 text-slate-900">
                                        {study.headline}
                                    </h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-md border-l-2 border-slate-200 pl-6">
                                        {study.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
                                        {study.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                                <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
