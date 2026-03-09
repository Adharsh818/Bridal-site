'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Crown } from 'lucide-react';

const services = [
    {
        icon: <Crown className="w-6 h-6 text-[#D4AF37]" strokeWidth={1} />,
        title: "Bridal Full Glam",
        price: "From $850",
        description: "Flawless HD makeup, premium lashes, luxury skin prep, and hair styling.",
    },
    {
        icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" strokeWidth={1} />,
        title: "Reception Look",
        price: "From $650",
        description: "Evening glam, sophisticated contoured finishes and elegant updos.",
    },
    {
        icon: <Heart className="w-6 h-6 text-[#D4AF37]" strokeWidth={1} />,
        title: "Engagement & Party",
        price: "From $450",
        description: "Soft romantic looks, luminous skin, and delicate styling.",
    }
];

export default function ServicesCards() {
    return (
        <section id="services" className="py-20 md:py-32 bg-[#F9F8F6]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center space-y-6 mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-sans text-xs tracking-[0.25em] text-[#D4AF37] uppercase">Signature Experiences</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">Curated Services</h2>
                    <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-8 md:p-12 pb-12 md:pb-16 flex flex-col items-center text-center group bg-white border border-[#EBEBE3] rounded-sm hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#D4AF37]/5 transition-all duration-500 ease-out"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] border border-[#EBEBE3] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#D4AF37]/30 group-hover:bg-white transition-all duration-500">
                                {service.icon}
                            </div>
                            <h3 className="font-serif text-3xl text-[#1A1A1A] mb-4">{service.title}</h3>
                            <p className="font-sans text-sm text-gray-500 font-light leading-relaxed mb-10 flex-grow">
                                {service.description}
                            </p>
                            <div className="w-full pt-6 border-t border-[#EBEBE3]">
                                <p className="font-sans text-xs tracking-widest text-[#888] uppercase mb-1">Starting At</p>
                                <p className="font-serif text-xl italic text-[#D4AF37]">
                                    {service.price.replace('From ', '')}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
