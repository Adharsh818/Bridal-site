'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_IMAGES = [
    { id: 1, src: '/images/gallery_reception_1772287429478.png', category: 'Reception' },
    { id: 2, src: '/images/hero_bridal_portrait_1772287390949.png', category: 'Bridal' },
    // Adding placeholders for full masonry grid
    { id: 3, src: 'https://images.unsplash.com/photo-1596455589417-10c4dcb7ad20?q=80&w=1000&auto=format&fit=crop', category: 'Modern' },
    { id: 4, src: 'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=1000&auto=format&fit=crop', category: 'Engagement' },
    { id: 5, src: 'https://images.unsplash.com/photo-1560060141-7b9018741ce7?q=80&w=1000&auto=format&fit=crop', category: 'Bridal' },
    { id: 6, src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop', category: 'Modern' },
];

const CATEGORIES = ['All', 'Bridal', 'Engagement', 'Reception', 'Modern'];

export default function Gallery() {
    const [filter, setFilter] = useState('All');

    const filteredImages = filter === 'All'
        ? ALL_IMAGES
        : ALL_IMAGES.filter(img => img.category === filter);

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                    <p className="font-sans text-sm tracking-[0.2em] text-[#D4AF37] uppercase">The Portfolio</p>
                    <h2 className="font-serif text-4xl text-[#1A1A1A]">Editorial Looks</h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`font-sans text-xs tracking-widest uppercase transition-all duration-300 pb-1 border-b ${filter === cat
                                    ? 'text-[#1A1A1A] border-[#1A1A1A]'
                                    : 'text-gray-400 border-transparent hover:text-[#1A1A1A]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="relative overflow-hidden group cursor-pointer mb-6 transform rounded-sm border border-gray-100"
                            >
                                <img
                                    src={img.src}
                                    alt={`Bridal Look ${img.category}`}
                                    className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-white font-sans text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        View
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
