"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder logos - in a real app these would be actual SVGs
const logos = [
    { name: "Canva", width: 100 },
    { name: "Coinbase", width: 120 },
    { name: "Databricks", width: 130 },
    { name: "Elastic", width: 90 },
    { name: "GitLab", width: 110 },
    { name: "Auth0", width: 90 },
    { name: "Sophos", width: 100 },
];

export function LogoTicker() {
    return (
        <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                    Trusted by the world&apos;s most innovative teams
                </p>
            </div>

            <div className="flex overflow-hidden relative">
                <div className="flex min-w-full shrink-0 gap-16 md:gap-24 animate-marquee items-center justify-around pr-16 md:pr-24">
                    {[...logos, ...logos, ...logos].map((logo, idx) => (
                        <div key={`${logo.name}-${idx}`} className="flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
                            <span className="text-xl md:text-2xl font-bold font-serif text-gray-800">{logo.name}</span>
                        </div>
                    ))}
                </div>
                <div className="flex min-w-full shrink-0 gap-16 md:gap-24 animate-marquee items-center justify-around pr-16 md:pr-24" aria-hidden="true">
                    {[...logos, ...logos, ...logos].map((logo, idx) => (
                        <div key={`${logo.name}-${idx}-clone`} className="flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
                            <span className="text-xl md:text-2xl font-bold font-serif text-gray-800">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </section>
    );
}
