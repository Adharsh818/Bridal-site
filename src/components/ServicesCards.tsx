'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Crown } from 'lucide-react';

const services = [
    {
        icon: <Crown className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />,
        title: "Bridal Full Glam",
        price: "From $850",
        description: "Flawless HD makeup, premium lashes, luxury skin prep, and hair styling.",
    },
    {
        icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />,
        title: "Reception Look",
        price: "From $650",
        description: "Evening glam, sophisticated contoured finishes and elegant updos.",
    },
    {
        icon: <Heart className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />,
        title: "Engagement & Party",
        price: "From $450",
        description: "Soft romantic looks, luminous skin, and delicate styling.",
    }
];

export default function ServicesCards() {
    return (
        <section id="services" className="py-24 bg-[#F1EFEA]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center space-y-4 mb-16">
                    <p className="font-sans text-sm tracking-[0.2em] text-[#D4AF37] uppercase">Signature Experiences</p>
                    <h2 className="font-serif text-4xl text-[#1A1A1A]">Curated Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-[#D4AF37]/20 md:border-y-0 md:divide-x divide-y md:divide-y-0 divide-[#D4AF37]/20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-12 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500 ease-out bg-[#F1EFEA] hover:bg-white/40 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37]/5 transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">{service.title}</h3>
                            <p className="font-sans text-sm text-gray-500 font-light leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <p className="font-sans text-sm tracking-widest text-[#1A1A1A] uppercase border-t border-gray-200 pt-4 w-full">
                                {service.price}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
