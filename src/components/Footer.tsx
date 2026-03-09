'use client';

import React from 'react';
import { Sparkles, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white py-12 md:py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

                    {/* Brand Col */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                            <span className="font-serif text-2xl tracking-wider text-white">Luxe Bridal</span>
                        </div>
                        <p className="font-sans text-sm font-light text-gray-400 max-w-sm leading-relaxed">
                            Enhancing natural radiance with supreme artistry for global luxury weddings and high fashion editorial campaigns.
                        </p>
                    </div>

                    {/* Links Col */}
                    <div className="space-y-6">
                        <h4 className="font-sans text-sm tracking-[0.2em] text-[#D4AF37] uppercase">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About The Artist', 'Bridal Services', 'Portfolio', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="font-sans text-sm font-light text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div className="space-y-6">
                        <h4 className="font-sans text-sm tracking-[0.2em] text-[#D4AF37] uppercase">Inquiries</h4>
                        <div className="space-y-3 font-sans text-sm font-light text-gray-400">
                            <p>For bookings and collaborations:</p>
                            <a href="mailto:hello@luxebridal.com" className="block text-white hover:text-[#D4AF37] transition-colors">hello@luxebridal.com</a>
                            <p>Available exclusively by appointment.</p>
                        </div>
                        <div className="pt-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs font-light tracking-widest text-gray-500 uppercase">
                    <p>&copy; {new Date().getFullYear()} Luxe Bridal. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
