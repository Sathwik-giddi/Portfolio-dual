"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CMO at TechFlow",
        content: "We reduced our CPA by 40% in the first month. The automation is genuinely 'set and forget'—it just works.",
        avatar: "SJ"
    },
    {
        name: "Marcus Chen",
        role: "Head of Growth, ScaleUp",
        content: "I was skeptical about the AI claims, but the predictive bidding is actually terrifyingly accurate. It wins auctions we used to lose.",
        avatar: "MC"
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Marketing, FinServ",
        content: "Finally, a platform that gives me attribution I can trust. The cross-channel visibility is a game changer for our budget allocation.",
        avatar: "ER"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-white opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-medium text-slate-900 mb-4">Loved by Growth Teams</h2>
                    <div className="flex justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-slate-500 text-lg">Trusted by over 500+ companies to scale their revenue.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-purple-100 transition-all duration-300 relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-100 group-hover:text-purple-200 transition-colors" />
                            <p className="text-slate-700 leading-relaxed mb-6 italic relative z-10">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                                    <div className="text-slate-500 text-xs">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
