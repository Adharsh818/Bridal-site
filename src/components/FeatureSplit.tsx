/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureSplit() {
    return (
        <section id="about" className="py-16 md:py-24 bg-[#F6F4F1] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 lg:gap-24">

                {/* Left: Portrait Image */}
                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-t-full p-2 border border-[#D4AF37]/30">
                        <img
                            src="/images/artist_portrait_1772287409815.png"
                            alt="Makeup Artist Portrait"
                            className="w-full h-full object-cover rounded-t-full transform hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="space-y-4">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight">
                            All Eyes on <span className="italic text-gray-500">You</span>
                        </h2>
                        <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
                    </div>

                    <div className="space-y-6 text-gray-600 font-light font-sans text-lg leading-relaxed">
                        <p>
                            Your wedding day is a celebration of your unique love story. With over a decade of luxury bridal experience, my philosophy is simple: makeup should enhance your elegance, not disguise it.
                        </p>
                        <p>
                            I use only the finest premium brands—Dior, Charlotte Tilbury, and Tom Ford—to ensure your glow remains flawless from the first look to the final dance.
                        </p>
                    </div>

                    <div className="pt-6">
                        <a
                            href="#contact"
                            className="inline-block px-10 py-4 bg-transparent border border-[#1A1A1A] text-[#1A1A1A] font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300"
                        >
                            Meet The Artist
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
