"use client";

import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#F0EBFA] font-sans selection:bg-pink-100 flex flex-col">
            <main className="flex-grow pt-32 pb-20">
                <section className="container mx-auto px-6 mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-medium mb-6 text-slate-900"
                    >
                        Get in <span className="text-slate-900 italic">Touch</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Ready to transform your advertising strategy? We&apos;re here to help.
                    </p>
                </section>
                <div className="max-w-xl mx-auto px-6">
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}
