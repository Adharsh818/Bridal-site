/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        quote: "She perfectly captured the editorial, elegant look I wanted. The makeup lasted all night and felt incredibly lightweight. A true artist.",
    },
    {
        name: "Ayesha Khan",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop",
        quote: "My reception look was out of a magazine. Her attention to detail and calming presence on my wedding day was invaluable. Highly recommended!",
    },
    {
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop",
        quote: "The best investment for my big day. The way she blends and enhances natural features without masking them is simply remarkable.",
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-[#FAF5F7]">
            {/* Soft Blush background #FAF5F7 instead of harsh pink */}
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    className="text-center space-y-6 mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-sans text-xs tracking-[0.25em] text-[#D4AF37] uppercase">Love Letters</p>
                    <h2 className="font-serif text-5xl text-[#1A1A1A]">From the Brides</h2>
                    <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center space-y-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-[#D4AF37]/5">
                                <img
                                    src={test.image}
                                    alt={test.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex gap-1.5 text-[#D4AF37]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" strokeWidth={0.5} />
                                ))}
                            </div>

                            <p className="font-serif italic text-xl text-gray-600 leading-loose px-2 flex-grow">
                                &quot;{test.quote}&quot;
                            </p>

                            <div className="pt-4">
                                <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#1A1A1A] font-medium border-b border-[#D4AF37]/30 pb-2">
                                    {test.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
