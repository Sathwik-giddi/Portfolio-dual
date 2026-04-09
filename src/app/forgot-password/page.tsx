"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSent(true);
    };

    return (
        <div className="min-h-screen bg-[#F0EBFA] flex flex-col items-center justify-center p-6 font-sans">
            <Link href="/" className="mb-8 hidden md:block">
                <div className="relative w-12 h-12">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-full h-full object-contain brightness-0"
                    />
                </div>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md rounded-2xl p-8"
            >
                {!isSent ? (
                    <>
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-serif font-medium text-slate-900 mb-2">Reset password</h1>
                            <p className="text-slate-500 text-sm">Enter your email and we'll send you instructions.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Work Email</Label>
                                <Input id="email" type="email" placeholder="name@company.com" required className="bg-slate-50 mx-0" />
                            </div>

                            <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold h-10" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send instructions <ArrowRight className="ml-2 h-4 w-4 opacity-50" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-serif font-medium text-slate-900 mb-2">Check your inbox</h1>
                        <p className="text-slate-500 text-sm mb-8">
                            We've sent password reset instructions to the email address you provided.
                        </p>
                        <Button asChild variant="outline" className="w-full h-10">
                            <Link href="/login">Return to log in</Link>
                        </Button>
                    </div>
                )}

                <div className="mt-6 text-center text-sm">
                    <Link href="/login" className="text-slate-500 hover:text-slate-900 flex items-center justify-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to log in
                    </Link>
                </div>
            </motion.div>

            <div className="mt-8 text-center text-xs text-slate-400">
                &copy; 2024 Ads Inc. All rights reserved.
            </div>
        </div>
    );
}
