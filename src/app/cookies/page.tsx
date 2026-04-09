"use client";

import { motion } from "framer-motion";
import { Navbar1 } from "@/components/blocks/navbar1";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-tines-lavender relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/80 to-transparent"></div>
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
            </div>

            <Navbar1 />

            <div className="relative z-10 pt-32 pb-20 container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm mb-6">
                        <Shield className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Legal & Privacy</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">
                        Cookie <span className="italic text-purple-600">Policy</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Transparency is core to our mission. Here's how we use cookies to improve your experience and keep your data secure.
                    </p>
                </motion.div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 md:p-12 shadow-xl"
                >
                    <section className="mb-12">
                        <h2 className="text-2xl font-serif text-slate-900 mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <Eye className="w-4 h-4 text-purple-600" />
                            </div>
                            What are Cookies?
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            We use cookies to distinguish you from other users of our platform. This helps us to provide you with a good experience when you browse our website and allows us to improve our site.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif text-slate-900 mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                            </div>
                            How We Use Them
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/50 rounded-2xl p-6 border border-white/50">
                                <h3 className="font-bold text-slate-900 mb-2">Essential Cookies</h3>
                                <p className="text-sm text-slate-600">
                                    Necessary for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or make use of e-billing services.
                                </p>
                            </div>
                            <div className="bg-white/50 rounded-2xl p-6 border border-white/50">
                                <h3 className="font-bold text-slate-900 mb-2">Analytical/Performance</h3>
                                <p className="text-sm text-slate-600">
                                    Allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us improve the way our website works.
                                </p>
                            </div>
                            <div className="bg-white/50 rounded-2xl p-6 border border-white/50">
                                <h3 className="font-bold text-slate-900 mb-2">Functionality</h3>
                                <p className="text-sm text-slate-600">
                                    Used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences.
                                </p>
                            </div>
                            <div className="bg-white/50 rounded-2xl p-6 border border-white/50">
                                <h3 className="font-bold text-slate-900 mb-2">Targeting</h3>
                                <p className="text-sm text-slate-600">
                                    Record your visit to our website, the pages you have visited, and the links you have followed. We may share this information with third parties for this purpose.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-serif text-slate-900 mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Lock className="w-4 h-4 text-green-600" />
                            </div>
                            Managing Preferences
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
                        </p>

                        <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="font-bold text-lg mb-1">Update your settings</h3>
                                <p className="text-slate-400 text-sm">You can change your cookie preferences at any time.</p>
                            </div>
                            <button className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors">
                                Cookie Settings
                            </button>
                        </div>
                    </section>

                    <div className="text-xs text-slate-400 border-t border-slate-200 pt-8 mt-8">
                        Last updated: January 18, 2026. This policy may be updated from time to time.
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
