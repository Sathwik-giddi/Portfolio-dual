"use client";

import { motion } from "framer-motion";

const partners = [
    "Salesforce", "HubSpot", "Marketo", "Google Analytics",
    "Adobe", "Asana", "Jira", "Slack", "AWS", "Snowflake"
];

export function Partners() {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Seamlessly integrates with your stack</p>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center bg-slate-50">
                    {partners.map((partner) => (
                        <span key={partner} className="text-xl font-bold text-slate-300 hover:text-purple-400 transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
