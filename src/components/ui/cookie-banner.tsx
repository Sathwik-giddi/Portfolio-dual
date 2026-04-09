"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if consent is already stored
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Delay showing the banner slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="hidden md:block fixed bottom-6 right-6 z-50 max-w-sm w-full"
                >
                    <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden">
                        {/* Decorative background glow */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-400/30 rounded-full blur-2xl pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-purple-100 rounded-2xl">
                                    <Cookie className="w-6 h-6 text-purple-600" />
                                </div>
                                <button
                                    onClick={handleDecline}
                                    className="p-1 hover:bg-black/5 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                            <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                                We value your privacy
                            </h3>

                            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                <Link href="/cookies" className="text-purple-600 hover:underline ml-1 font-medium">
                                    Read Policy
                                </Link>
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <Button
                                    variant="outline"
                                    onClick={handleDecline}
                                    className="rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                                >
                                    Decline
                                </Button>
                                <Button
                                    onClick={handleAccept}
                                    className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-purple-500/20"
                                >
                                    Accept All
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
