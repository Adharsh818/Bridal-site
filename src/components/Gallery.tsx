/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ALL_IMAGES = [
    { id: 1, src: '/images/gallery_reception_1772287429478.png', category: 'Reception' },
    { id: 2, src: '/images/hero_bridal_portrait_1772287390949.png', category: 'Bridal' },
    { id: 3, src: '/images/gallery_modern_1772295854955.png', category: 'Modern' },
    { id: 4, src: '/images/gallery_engagement_1772296211544.png', category: 'Engagement' },
    { id: 5, src: '/images/gallery_bridal_1772295877696.png', category: 'Bridal' },
    { id: 6, src: '/images/artist_portrait_1772287409815.png', category: 'Modern' },
];

const CATEGORIES = ['All', 'Bridal', 'Engagement', 'Reception', 'Modern'];

export default function Gallery() {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredImages = filter === 'All'
        ? ALL_IMAGES
        : ALL_IMAGES.filter(img => img.category === filter);

    return (
        <section id="gallery" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-sans text-xs tracking-[0.25em] text-[#D4AF37] uppercase">The Portfolio</p>
                    <h2 className="font-serif text-5xl text-[#1A1A1A]">Editorial Looks</h2>
                    <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="flex flex-wrap justify-center gap-8 mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-2 border-b ${filter === cat
                                ? 'text-[#1A1A1A] border-[#1A1A1A]'
                                : 'text-gray-400 border-transparent hover:text-[#1A1A1A]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                    <AnimatePresence>
                        {filteredImages.map((img, index) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="relative overflow-hidden group cursor-pointer mb-8 bg-[#F9F8F6] aspect-auto"
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <img
                                    src={img.src}
                                    alt={`Bridal Look ${img.category}`}
                                    className="w-full h-auto object-cover transition-transform duration-1000 ease-[0.25,0.46,0.45,0.94] group-hover:scale-[1.03] mix-blend-multiply"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-sm p-4 md:p-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 right-8 text-[#1A1A1A] hover:text-[#D4AF37] transition-colors z-50 p-2"
                        >
                            <X className="w-8 h-8" strokeWidth={1} />
                        </button>

                        <motion.img
                            src={selectedImage}
                            alt="Enlarged Portfolio View"
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
