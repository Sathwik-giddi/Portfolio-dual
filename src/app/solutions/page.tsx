"use client";

import { Footer } from "@/components/footer";
import { IndustrySolutions } from "@/components/industry-solutions";
import { motion } from "framer-motion";

export default function SolutionsPage() {
    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA]">
            <main className="pt-32">
                <section className="container mx-auto px-6 mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-serif font-medium mb-6"
                    >
                        Solutions for <span className="text-purple-500 italic">Every Industry</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover how Ads tailors its intelligent optimization engine to your specific vertical.
                    </motion.p>
                </section>
                <IndustrySolutions />
            </main>
            <Footer />
        </div>
    );
}
