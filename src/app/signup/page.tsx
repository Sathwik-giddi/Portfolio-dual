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

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await api.post("/auth/register", {
                name: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                password: formData.password,
                // Company is not yet in the backend User model, but we can add it or ignore for now
                // or update backend schema later. For now, we'll focus on name/email/pass.
            });
            login(res.data.token, res.data.user);
        } catch (err: any) {
            setError(err.response?.data?.error || "Registration failed");
        } finally {
            setIsLoading(false);
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
                    <h1 className="text-2xl font-serif font-medium text-slate-900 mb-2">Start your free trial</h1>
                    <p className="text-slate-500 text-sm">Join the world's most effective ad teams.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                type="text"
                                placeholder="Jane"
                                required
                                className="bg-slate-50 mx-0"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                type="text"
                                placeholder="Doe"
                                required
                                className="bg-slate-50 mx-0"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                            id="company"
                            type="text"
                            placeholder="Acme Inc."
                            required
                            className="bg-slate-50 mx-0"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>

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
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Min. 8 characters"
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
                                Creating account...
                            </>
                        ) : (
                            <>
                                Get started <ArrowRight className="ml-2 h-4 w-4 opacity-50" />
                            </>
                        )}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-purple-600 font-medium hover:underline">
                        Log in
                    </Link>
                </div>
            </motion.div>

            <div className="mt-8 text-center text-xs text-slate-400">
                By signing up, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/terms#privacy" className="underline">Privacy Policy</Link>.
            </div>
        </div>
    );
}
