'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#F6F4F1]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Booking Form */}
                    <motion.div
                        className="flex-1 bg-white p-10 md:p-14 border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <h2 className="font-serif text-3xl text-[#1A1A1A] mb-2">Book Your Date</h2>
                            <p className="font-sans text-sm text-gray-500 font-light">
                                Please fill out the form below to inquire about availability and pricing for your special event.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-sans text-xs tracking-widest uppercase text-gray-500">Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-sans text-sm" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-sans text-xs tracking-widest uppercase text-gray-500">Email</label>
                                    <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-sans text-sm" placeholder="hello@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-sans text-xs tracking-widest uppercase text-gray-500">Event Date</label>
                                    <input type="date" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-sans text-sm text-gray-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-sans text-xs tracking-widest uppercase text-gray-500">Event Type</label>
                                    <select className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-sans text-sm text-gray-500">
                                        <option>Bridal Makeup</option>
                                        <option>Reception Glam</option>
                                        <option>Engagement / Party</option>
                                        <option>Other Event</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-xs tracking-widest uppercase text-gray-500">Message Details</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors font-sans text-sm resize-none" placeholder="Tell me more about your requirements..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-[#1A1A1A] hover:bg-[#D4AF37] text-white py-5 font-sans justify-center text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 group">
                                Submit Inquiry
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Right: Contact Info & Insta */}
                    <motion.div
                        className="flex-1 space-y-12 py-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <p className="font-sans text-sm tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Get In Touch</p>
                            <h2 className="font-serif text-4xl text-[#1A1A1A]">Let&apos;s Create Magic</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 text-gray-600 font-light">
                                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                                <p>Based in New York City.<br />Available for destination weddings worldwide.</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 font-light">
                                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                                <p>hello@luxebridal.com</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 font-light">
                                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                            <p className="font-sans text-sm font-medium tracking-widest text-[#1A1A1A] uppercase mb-6 flex items-center gap-2">
                                <Instagram className="w-4 h-4" /> As Seen On Instagram
                            </p>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="aspect-square bg-gray-100 relative group overflow-hidden cursor-pointer">
                                    <img src="/images/hero_bridal_portrait_1772287390949.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Insta 1" />
                                </div>
                                <div className="aspect-square bg-gray-100 relative group overflow-hidden cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Insta 2" />
                                </div>
                                <div className="aspect-square flex items-center justify-center bg-[#D4AF37]/10 group hover:bg-[#D4AF37] transition-colors cursor-pointer border border-[#D4AF37]/20">
                                    <span className="font-sans text-xs tracking-widest text-[#D4AF37] group-hover:text-white transition-colors">Follow</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="button" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-sans text-sm tracking-widest uppercase transition-colors rounded-sm flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                </svg>
                                WhatsApp Booking
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
