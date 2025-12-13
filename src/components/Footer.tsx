import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#050505] text-white pt-24 pb-12 overflow-hidden relative">
            {/* Subtle Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col items-start">
                        <h2 className="text-5xl font-serif text-white mb-6 tracking-tight">G SQUARE</h2>
                        <p className="text-gray-500 font-light text-sm leading-relaxed max-w-sm mb-10">
                            Curating India's finest land parcels. We build the foundation for your legacy, blending luxury with transparency.
                        </p>

                        {/* Social Signals */}
                        <div className="flex gap-6">
                            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-300">
                                    <Icon size={20} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - Collections */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-serif mb-6 text-white">Collections</h3>
                        <ul className="space-y-4">
                            {['Residential Plots', 'Commercial Zones', 'Industrial Parks', 'Villa Communities'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300 block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation - Corporate */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-serif mb-6 text-white">Corporate</h3>
                        <ul className="space-y-4">
                            {['About G Square', 'Leadership Team', 'Careers', 'Press Room', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300 block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter - The Edit */}
                    <div className="md:col-span-4">
                        <h3 className="text-lg font-serif mb-6 text-white">The Edit</h3>
                        <p className="text-gray-500 text-sm mb-6 font-light">
                            Subscribe to receive exclusive market insights and priority access to new launches.
                        </p>
                        <form className="flex border-b border-white/20 pb-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent w-full outline-none text-white text-sm placeholder-gray-700"
                            />
                            <button className="text-xs font-bold uppercase tracking-widest text-amber-500 hover:text-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                        <p className="text-gray-600 text-xs tracking-wider uppercase">
                            © 2025 G Square. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-600 hover:text-white text-xs tracking-wider uppercase transition-colors">Privacy</a>
                            <a href="#" className="text-gray-600 hover:text-white text-xs tracking-wider uppercase transition-colors">Terms</a>
                        </div>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-amber-500 transition-colors"
                    >
                        Back to Top
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
