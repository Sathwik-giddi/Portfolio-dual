"use client";

import { motion } from "framer-motion";

export function ContactForm() {
    return (
        <section className="py-24" id="contact">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-purple-900 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Experience intelligent advertising</h2>
                        <p className="text-purple-200 text-lg mb-10 max-w-2xl mx-auto">
                            Schedule a personalized technical demonstration with our enterprise team.
                        </p>

                        <form className="max-w-md mx-auto space-y-4 text-left">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-purple-200 mb-1">Work Email</label>
                                <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-700 text-white placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
                            </div>
                            <button className="w-full py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-purple-50 transition-colors">
                                Schedule Technical Demonstration
                            </button>
                            <p className="text-xs text-purple-300 text-center mt-4">
                                By clicking, you agree to our Terms of Service.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
