/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 150]);

    return (
        <section className="relative w-full min-h-screen flex items-center bg-[#EBEBE3] overflow-hidden pt-20">
            {/* Soft gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EBEBE3]/40 z-0"></div>

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between relative z-10">

                {/* Left: Text Block */}
                <motion.div
                    className="flex-1 space-y-10 pt-12 md:pt-0 max-w-2xl z-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                    <div className="space-y-6">
                        <h1 className="font-serif text-6xl md:text-[5.5rem] lg:text-[7.5rem] leading-[1.0] text-[#1A1A1A] tracking-normal">
                            Timeless <br />
                            <span className="italic font-light text-[#3A3A3A]">Beauty for</span> <br />
                            Your Day.
                        </h1>
                    </div>

                    <motion.p
                        className="font-sans text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1.2 }}
                    >
                        Enhancing your natural radiance with luxury, editorial-inspired makeup artistry tailored exclusively for you.
                    </motion.p>

                    <motion.div
                        className="pt-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-10 py-5 bg-[#D4AF37]/90 text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                        >
                            Book Consultation
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right: Image - Seamless and Fluid with Parallax */}
                <motion.div
                    className="absolute md:relative right-0 top-0 bottom-0 md:flex-1 w-full md:w-auto h-full min-h-[60vh] md:min-h-screen opacity-40 md:opacity-100 z-10 pointer-events-none md:pointer-events-auto origin-center"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ y: y1 }}
                >
                    {/* Gradient overlay to blend the image left edge into the background on desktop */}
                    <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#EBEBE3] via-[#EBEBE3]/80 to-transparent z-10 pointer-events-none"></div>

                    {/* Gradient overlay to blend the image bottom edge into the background */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#EBEBE3] via-[#EBEBE3]/80 to-transparent z-10 pointer-events-none"></div>

                    <img
                        src="/images/hero_bridal_portrait_1772287390949.png"
                        alt="Bridal Makeup Portrait"
                        className="w-full h-full object-cover object-right md:object-center mix-blend-multiply"
                    />
                </motion.div>

            </div>
        </section>
    );
}

