
"use client";

import { motion } from "framer-motion";
import { Navbar1 } from "@/components/blocks/navbar1";
import { Footer } from "@/components/footer";
import { ShoppingBag, Star, Zap } from "lucide-react";
import { useState } from "react";

const products = [
    {
        id: 1,
        name: "Electric Acid Tee",
        price: "$45.00",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800", // Black streetwear tee
        tag: "LIMITED DROP",
        color: "bg-purple-500"
    },
    {
        id: 2,
        name: "Cyberpunk Utility Tote",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1590874103328-3abaf241d66c?auto=format&fit=crop&q=80&w=800", // Techwear bag feel
        tag: "RESTOCKED",
        color: "bg-blue-500"
    },
    {
        id: 3,
        name: "Holo-Foil Founder Card",
        price: "$999.00",
        image: "https://images.unsplash.com/photo-1635236066227-d064c5be70d2?auto=format&fit=crop&q=80&w=800", // Abstract holo card
        tag: "1/100 RARE",
        color: "bg-pink-500"
    }
];

export default function StorePage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleNotify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setEmail("");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100">
            <Navbar1 />

            <main className="pt-24 pb-20 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-white">
                {/* Background Glow - Optimized for Mobile Performance */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/10 blur-[60px] md:blur-[100px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 md:mb-16"
                    >
                        <motion.img
                            src="/logo.png"
                            alt="Ads Logo"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-8 md:mb-10 drop-shadow-xl brightness-0 opacity-90"
                        />

                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-4 md:mb-6 leading-[0.9]">
                            DRIP <br className="sm:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">COMING SOON.</span>
                        </h1>
                        <p className="text-xs md:text-base text-slate-900 font-bold tracking-[0.2em] uppercase opacity-80">
                            Stay Tuned
                        </p>
                    </motion.div>

                    {/* Notify Form - Mobile Stacked, Desktop Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md mx-auto w-full"
                    >
                        {!submitted ? (
                            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 p-2 sm:p-1 bg-white border border-slate-200 rounded-2xl sm:rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="flex-1 px-4 py-3 sm:px-6 bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 text-base font-medium w-full text-center sm:text-left"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl sm:rounded-full hover:bg-blue-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-300 w-full sm:w-auto min-w-[120px] active:scale-95"
                                >
                                    {loading ? "..." : "NOTIFY ME"}
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-green-50 border border-green-200 rounded-2xl sm:rounded-full text-green-800 font-bold text-sm tracking-wide shadow-sm"
                            >
                                🚀 YOU'RE ON THE LIST.
                            </motion.div>
                        )}

                        {!submitted && (
                            <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-semibold">
                                Limited Drop 001 Incoming
                            </p>
                        )}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
