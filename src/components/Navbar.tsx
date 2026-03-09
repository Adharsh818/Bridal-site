'use client';

import React, { useState } from 'react';
import { Instagram, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="absolute top-0 w-full z-50 bg-transparent">
            {/* Kept absolute position so it overlays on top of the hero naturally. */}
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                    <span className="font-serif text-2xl tracking-wider text-[#1A1A1A]">Luxe Bridal</span>
                </div>

                {/* Navigation - Centered */}
                <nav className="hidden md:flex gap-10">
                    {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-light tracking-[0.15em] text-[#1A1A1A]/80 hover:text-[#1A1A1A] relative group uppercase"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Social Icons (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="w-8 h-8 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z" /></svg>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#1A1A1A] p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-[#EBEBE3]">
                    <nav className="flex flex-col items-center py-8 gap-6">
                        {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-light tracking-[0.15em] text-[#1A1A1A] uppercase"
                            >
                                {item}
                            </a>
                        ))}
                        <div className="flex items-center gap-6 mt-4 pt-6 border-t border-[#EBEBE3] w-1/2 justify-center">
                            <a href="#" className="text-[#1A1A1A] hover:text-[#D4AF37]">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
