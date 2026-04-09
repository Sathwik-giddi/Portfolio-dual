"use client";

import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Scale, Shield, FileText } from "lucide-react";

export default function TermsPage() {
    const sections = [
        { id: "terms", title: "Terms of Service", icon: Scale },
        { id: "privacy", title: "Privacy Policy", icon: Shield },
        { id: "aup", title: "Acceptable Use", icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-[#F0EBFA] font-sans selection:bg-lime-400 selection:text-black">
            {/* Global Noise */}
            <div className="fixed inset-0 bg-noise opacity-[0.04] pointer-events-none z-50 mix-blend-color-burn"></div>

            <main className="pt-32 pb-20 relative z-10">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="mb-24 text-center max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-serif font-medium tracking-tighter text-slate-900 mb-6"
                        >
                            Legal Stuff.
                        </motion.h1>
                        <p className="text-xl text-slate-600 font-medium">
                            The boring (but important) rules of the road for using ADS.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                        {/* Sticky Sidebar Navigation */}
                        <div className="lg:w-1/4">
                            <div className="sticky top-32 space-y-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">Contents</p>
                                {sections.map((section) => (
                                    <ScrollLink
                                        key={section.id}
                                        to={section.id}
                                        smooth={true}
                                        offset={-120}
                                        duration={500}
                                        className="flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:bg-white/50 transition-colors group"
                                        activeClass="bg-white shadow-sm ring-1 ring-black/5"
                                        spy={true}
                                    >
                                        <section.icon className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                                        <span className="font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{section.title}</span>
                                    </ScrollLink>
                                ))}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:w-3/4 max-w-4xl space-y-32">

                            {/* Terms of Service */}
                            <section id="terms" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-100/50 flex items-center justify-center">
                                        <Scale className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h2 className="text-4xl font-serif text-slate-900">Terms of Service</h2>
                                </div>
                                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-medium">
                                    <p className="lead">Last Updated: January 18, 2026</p>
                                    <h3>1. Introduction</h3>
                                    <p>Welcome to ADS ("we," "our," or "us"). By accessing or using our platform, website, and services (collectively, the "Services"), you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Services.</p>

                                    <h3>2. Accounts & Registration</h3>
                                    <p>You must provide accurate, complete, and current information when creating an account. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>

                                    <h3>3. Platform Usage</h3>
                                    <p>Our platform provides advertising optimization tools ("ADS Coach"). You acknowledge that:</p>
                                    <ul>
                                        <li>Suggestions provided by our AI are for informational purposes only.</li>
                                        <li>You are solely responsible for the content of your advertisements and their compliance with platform rules (Meta, Google, TikTok).</li>
                                        <li>We do not guarantee specific performance results (ROI, ROAS).</li>
                                    </ul>

                                    <h3>4. Billing & Subscriptions</h3>
                                    <p>Certain aspects of the Service are provided for a fee. You agree to pay all fees associated with your selected plan (Base, Premium, Enterprise). Payments are non-refundable except as required by law.</p>

                                    <h3>5. Intellectual Property</h3>
                                    <p>The Service and its original content, features, and functionality are and will remain the exclusive property of ADS and its licensors. The Service is protected by copyright, trademark, and other laws.</p>

                                    <h3>6. Termination</h3>
                                    <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                                </div>
                            </section>

                            {/* Privacy Policy */}
                            <section id="privacy" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-lime-100/50 flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-lime-600" />
                                    </div>
                                    <h2 className="text-4xl font-serif text-slate-900">Privacy Policy</h2>
                                </div>
                                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-medium">
                                    <p className="lead">Your privacy is non-negotiable.</p>

                                    <h3>1. Data We Collect</h3>
                                    <p>We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include Name, Email, Company Details, and Ad Account Performance Data (read-only via API).</p>

                                    <h3>2. How We Use Data</h3>
                                    <ul>
                                        <li>To provide, maintain, and improve our Services.</li>
                                        <li>To generate AI-powered insights for your campaigns.</li>
                                        <li>To send you technical notices, updates, and support messages.</li>
                                    </ul>

                                    <h3>3. Data Protection</h3>
                                    <p>We use industry-standard encryption (AES-256) to protect your data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II compliant.</p>

                                    <h3>4. Third-Party Sharing</h3>
                                    <p>We do not sell your personal data. We may share data with trusted service providers who help us operate our business (e.g., AWS for hosting, Stripe for payments), subject to strict confidentiality agreements.</p>
                                </div>
                            </section>

                            {/* Acceptable Use Policy */}
                            <section id="aup" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-100/50 flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h2 className="text-4xl font-serif text-slate-900">Acceptable Use</h2>
                                </div>
                                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-medium">
                                    <p>You agree not to misuse the Services. Prohibited actions include:</p>
                                    <ul>
                                        <li>Using the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
                                        <li>Violating or encouraging others to violate any right of a third party, including by infringing or misappropriating any third-party intellectual property right.</li>
                                        <li>Interfering with security-related features of the Service.</li>
                                        <li>Using the AI to generate hateful, discriminatory, or fraudulent advertising content.</li>
                                    </ul>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
