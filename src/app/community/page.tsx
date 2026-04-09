"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Share2, Globe, Calendar } from "lucide-react";

export default function CommunityPage() {
    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA]">
            <main className="pt-32 pb-20">

                {/* Hero */}
                <section className="container mx-auto px-6 mb-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-slate-900 mb-6"
                    >
                        Join the <span className="italic text-purple-600">movement</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Connect with 15,000+ ad tech engineers, marketers, and growth leaders building the future of advertising.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-[#4A154B] hover:bg-[#3B113C] text-white rounded-full px-8 flex items-center gap-2">
                            <MessageCircle className="w-5 h-5" /> Join Slack
                        </Button>
                        <Button size="lg" variant="outline" className="bg-white rounded-full px-8 flex items-center gap-2">
                            <Globe className="w-5 h-5" /> Find Local Chapter
                        </Button>
                    </div>
                </section>

                {/* Stats */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Community Members", value: "15k+" },
                            { label: "Daily Messages", value: "50k" },
                            { label: "Countries", value: "45" },
                            { label: "Open Source Contribs", value: "1.2k" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl text-center shadow-sm border border-slate-100"
                            >
                                <div className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">{stat.value}</div>
                                <div className="text-sm font-bold uppercase tracking-wide text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Grid */}
                <section className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 text-white p-10 rounded-3xl flex flex-col justify-between min-h-[400px]">
                            <div>
                                <Heart className="w-12 h-12 text-pink-500 mb-6" />
                                <h3 className="text-3xl font-serif mb-4">Ambassador Program</h3>
                                <p className="text-slate-400 text-lg">
                                    Become a community leader. Host events, create content, and get exclusive swag and early access to features.
                                </p>
                            </div>
                            <Button variant="outline" className="self-start mt-8 border-white text-white hover:bg-white hover:text-slate-900 rounded-full">Apply Now</Button>
                        </div>
                        <div className="bg-white p-10 rounded-3xl flex flex-col justify-between min-h-[400px] border border-slate-100 shadow-sm">
                            <div>
                                <Calendar className="w-12 h-12 text-blue-500 mb-6" />
                                <h3 className="text-3xl font-serif text-slate-900 mb-4">Upcoming Events</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-center border-b border-slate-100 pb-4">
                                        <div className="w-12 text-center">
                                            <div className="text-xs font-bold text-slate-400 uppercase">FEB</div>
                                            <div className="text-xl font-bold text-slate-900">12</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">AdTech Summit 2024</div>
                                            <div className="text-slate-500 text-sm">San Francisco, CA</div>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-center border-b border-slate-100 pb-4">
                                        <div className="w-12 text-center">
                                            <div className="text-xs font-bold text-slate-400 uppercase">MAR</div>
                                            <div className="text-xl font-bold text-slate-900">05</div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">Growth Hackers Meetup</div>
                                            <div className="text-slate-500 text-sm">London, UK</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Button variant="ghost" className="self-start mt-8 text-blue-600 hover:text-blue-800 font-bold p-0">View All Events &rarr;</Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
