import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, MapPin, Phone, Award, Users, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0091D0] text-white pt-24 pb-12 overflow-hidden relative">
            {/* Subtle Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand & Stats Column */}
                    <div className="flex flex-col items-start">
                        <div className="bg-white p-3 rounded-lg inline-block mb-6">
                            <img
                                src="/future_group_logo.png"
                                alt="Future Group"
                                className="h-10"
                            />
                        </div>
                        <p className="text-blue-100 font-light text-sm leading-relaxed mb-8">
                            South India's Largest & Most Trusted Real Estate Developer. We don't just sell plots; we build legacies.
                        </p>

                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/10">
                                <Users className="text-white" size={24} />
                                <div>
                                    <p className="text-xl font-bold leading-none">10,000+</p>
                                    <p className="text-[10px] uppercase tracking-wider text-blue-200">Happy Customers</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/10">
                                <ShieldCheck className="text-white" size={24} />
                                <div>
                                    <p className="text-sm font-bold leading-none uppercase">100% Clear Titles</p>
                                    <p className="text-[10px] uppercase tracking-wider text-blue-200">RERA & DTCP Approved</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Presence */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Our Presence</h3>
                        <ul className="space-y-3">
                            {['Chennai', 'Coimbatore', 'Trichy', 'Hyderabad', 'Bangalore', 'Ballari', 'Mysuru', 'Hosur', 'Ambur', 'Theni'].map((city) => (
                                <li key={city} className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors cursor-pointer group">
                                    <MapPin size={14} className="text-white/50 group-hover:text-white transition-colors" />
                                    <span className="text-sm font-medium">{city}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Corporate Office */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Registered Office</h3>
                        <div className="space-y-6">
                            <div className="flex gap-3 items-start">
                                <MapPin className="mt-1 flex-shrink-0 text-white" size={20} />
                                <p className="text-sm text-blue-100 leading-relaxed">
                                    Century Centre, No. 75, T.T.K. Road,<br />
                                    Alwarpet, Chennai - 600 018.
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Phone className="flex-shrink-0 text-white" size={20} />
                                <a href="tel:+918939540008" className="text-lg font-bold text-white hover:underline">+91 89395 40008</a>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-4">Connect With Us</h4>
                            <div className="flex gap-4">
                                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#0091D0] transition-all duration-300">
                                        <Icon size={18} strokeWidth={2} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Awards */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Accolades</h3>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <Award className="text-yellow-400 mb-2" size={28} />
                                <p className="text-sm font-bold text-white leading-tight">Best Plot Developer</p>
                                <p className="text-xs text-blue-200 mt-1">Times Business Awards 2024</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <Award className="text-yellow-400 mb-2" size={28} />
                                <p className="text-sm font-bold text-white leading-tight">Excellence in Customer Service</p>
                                <p className="text-xs text-blue-200 mt-1">Real Estate Awards 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-blue-200 text-xs tracking-wider">
                        © 2025 G Square. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-yellow-400 transition-colors"
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
