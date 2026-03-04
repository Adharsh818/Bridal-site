'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-32 bg-[#F9F8F6]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Booking Form */}
                    <motion.div
                        className="flex-1 bg-white p-10 md:p-16 border border-[#EBEBE3] shadow-2xl shadow-[#D4AF37]/5 relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-12">
                            <h2 className="font-serif text-4xl text-[#1A1A1A] mb-3">Book Your Date</h2>
                            <p className="font-sans text-sm text-gray-500 font-light leading-relaxed">
                                Please fill out the form below to inquire about availability and pricing for your special event.
                            </p>
                        </div>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3 group">
                                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">Name</label>
                                    <input type="text" required className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#D4AF37] transition-all font-sans text-sm hover:border-gray-300" placeholder="Your Name" />
                                </div>
                                <div className="space-y-3 group">
                                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">Email</label>
                                    <input type="email" required className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#D4AF37] transition-all font-sans text-sm hover:border-gray-300" placeholder="hello@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3 group">
                                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">Event Date</label>
                                    <input type="date" required className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#D4AF37] transition-all font-sans text-sm text-gray-600 hover:border-gray-300" />
                                </div>
                                <div className="space-y-3 group">
                                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">Event Type</label>
                                    <select className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#D4AF37] transition-all font-sans text-sm text-gray-600 hover:border-gray-300">
                                        <option>Bridal Makeup</option>
                                        <option>Reception Glam</option>
                                        <option>Engagement / Party</option>
                                        <option>Other Event</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3 group">
                                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">Message Details</label>
                                <textarea required rows={4} className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-[#D4AF37] transition-all font-sans text-sm resize-none hover:border-gray-300" placeholder="Tell me more about your requirements..."></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-5 font-sans justify-center text-sm tracking-[0.2em] uppercase transition-all duration-500 flex items-center gap-3 relative overflow-hidden ${isSubmitted ? 'bg-[#D4AF37] text-white' : 'bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:shadow-lg hover:-translate-y-1'
                                    }`}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <CheckCircle2 className="w-5 h-5" />
                                        Inquiry Sent
                                    </motion.div>
                                ) : (
                                    <>
                                        Submit Inquiry
                                        <Send className={`w-4 h-4 transition-transform duration-300 ${isHovering ? 'translate-x-1 -translate-y-1' : ''}`} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right: Contact Info & Insta */}
                    <motion.div
                        className="flex-1 space-y-16 py-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <p className="font-sans text-xs tracking-[0.25em] text-[#D4AF37] uppercase mb-4">Get In Touch</p>
                            <h2 className="font-serif text-5xl text-[#1A1A1A] leading-tight">Let&apos;s Create <br /><i className="font-light text-gray-500">Magic</i></h2>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 text-gray-600 font-light group">
                                <div className="p-3 bg-white border border-[#EBEBE3] rounded-full group-hover:border-[#D4AF37] group-hover:bg-[#FFFDF9] transition-all duration-300">
                                    <MapPin className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                                </div>
                                <p className="pt-2 leading-relaxed tracking-wide">Based in New York City.<br />Available for destination weddings worldwide.</p>
                            </div>
                            <div className="flex items-center gap-6 text-gray-600 font-light group">
                                <div className="p-3 bg-white border border-[#EBEBE3] rounded-full group-hover:border-[#D4AF37] group-hover:bg-[#FFFDF9] transition-all duration-300">
                                    <Mail className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                                </div>
                                <p className="tracking-wide">hello@luxebridal.com</p>
                            </div>
                            <div className="flex items-center gap-6 text-gray-600 font-light group">
                                <div className="p-3 bg-white border border-[#EBEBE3] rounded-full group-hover:border-[#D4AF37] group-hover:bg-[#FFFDF9] transition-all duration-300">
                                    <Phone className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                                </div>
                                <p className="tracking-wide">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-[#EBEBE3]">
                            <button type="button" className="w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1 text-white font-sans text-[11px] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-3">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                </svg>
                                WhatsApp Quick Booking
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
