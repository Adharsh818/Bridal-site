'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-[#F6F4F1] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">

                {/* Left: Text Block */}
                <motion.div
                    className="flex-1 space-y-8 pt-12 md:pt-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="space-y-4">
                        <p className="font-sans text-sm tracking-[0.3em] text-[#D4AF37] uppercase">
                            Bridal & Editorial Makeup
                        </p>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-[#1A1A1A]">
                            Timeless <br />
                            <span className="italic font-light">Beauty for</span> <br />
                            Your Special Day.
                        </h1>
                    </div>

                    <p className="font-sans text-lg text-gray-500 max-w-md font-light leading-relaxed">
                        Enhancing your natural radiance with luxury, editorial-inspired makeup artistry tailored exclusively for you.
                    </p>

                    <div className="pt-4">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-4 text-sm tracking-[0.15em] uppercase font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
                        >
                            <span className="border-b border-[#1A1A1A] pb-1 group-hover:border-[#D4AF37] transition-colors">Book Consultation</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    className="flex-1 w-full relative h-[60vh] md:h-[80vh]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="relative w-full h-full overflow-hidden rounded-t-[100px] md:rounded-t-[150px] shadow-2xl shadow-black/5">
                        {/* The bridal portrait image */}
                        <img
                            src="/images/hero_bridal_portrait_1772287390949.png"
                            alt="Bridal Makeup Portrait"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        {/* Decorative Overlay Line */}
                        <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-t-[100px] md:rounded-t-[150px] m-4 pointer-events-none"></div>
                    </div>
                </motion.div>

            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F1EFEA] rounded-l-[200px] opacity-50 -z-0"></div>
        </section>
    );
}
