"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { GoogleLogin } from '@react-oauth/google';


export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await api.post("/auth/login", formData);
            login(res.data.token, res.data.user);
        } catch (err: any) {
            setError(err.response?.data?.error || "Invalid credentials");
        } finally {
            setIsLoading(false);
        }
    };



    const handleGoogleSuccess = async (credentialResponse: any) => {
        try {
            const { credential } = credentialResponse;
            const res = await api.post("/auth/google", { credential });
            login(res.data.token, res.data.user);
        } catch (err: any) {
            console.error("Google Login Error:", err);
            setError("Google sign-in failed. Please try again.");
        }
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
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-serif font-medium text-slate-900 mb-2">Welcome back</h1>
                    <p className="text-slate-500 text-sm">Enter your credentials to access the workspace.</p>
                </div>

                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}



                <div className="w-full mb-4 flex justify-center">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={() => setError("Google Sign-In Failed")}
                        theme="outline"
                        width="400"
                        shape="pill"
                        text="continue_with"
                    />
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">Or continue with</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@company.com"
                            required
                            className="bg-slate-50 mx-0"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="/forgot-password" className="text-xs text-purple-600 hover:underline">Forgot password?</Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            className="bg-slate-50 mx-0"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold h-10" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            <>
                                Sign in <ArrowRight className="ml-2 h-4 w-4 opacity-50" />
                            </>
                        )}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-purple-600 font-medium hover:underline">
                        Sign up
                    </Link>
                </div>

                <div className="mt-4 text-center">
                    <Link href="/demo" className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors flex items-center justify-center gap-1">
                        View Demo Dashboard <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </motion.div>

            <div className="mt-8 text-center text-xs text-slate-400">
                &copy; 2024 Ads Inc. All rights reserved.
            </div>
        </div>
    );
}
