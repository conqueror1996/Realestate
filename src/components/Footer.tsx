import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, Phone, Award } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0091D0] text-white pt-24 pb-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Row 1: Logo & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 bg-white p-3 inline-block">
                        <img src="/future_group_logo.png" alt="Future Group" className="h-12" />
                    </div>

                    <div className="flex gap-4">
                        {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center text-white shadow-sm border border-white/20 hover:bg-white hover:text-[#0091D0] transition-all duration-300">
                                <Icon size={20} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Row 2: Contact Pill Bar - Replaced Here */}
                <div className="bg-white py-3 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 mb-16 shadow-xl relative z-10 border border-white/10">
                    <div className="font-sans text-lg text-[#1C1C1C] font-bold">Need Help?</div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-9 h-9 flex items-center justify-center bg-blue-50 text-[#0091D0] group-hover:bg-[#0091D0] group-hover:text-white transition-colors border border-blue-100">
                                <Phone size={16} />
                            </div>
                            <div>
                                <p className="text-[8px] uppercase tracking-widest text-gray-400 leading-tight">Sales Support</p>
                                <p className="font-bold text-sm text-gray-800">1-800-555-4321</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-9 h-9 flex items-center justify-center bg-blue-50 text-[#0091D0] group-hover:bg-[#0091D0] group-hover:text-white transition-colors border border-blue-100">
                                <Phone size={16} />
                            </div>
                            <div>
                                <p className="text-[8px] uppercase tracking-widest text-gray-400 leading-tight">General Enquiry</p>
                                <p className="font-bold text-sm text-gray-800">1-800-555-4321</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3: Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16 border-b border-white/20 pb-16">

                    {/* Description */}
                    <div className="lg:col-span-4 pr-8">
                        <h4 className="font-sans text-xl mb-6 text-white">About Us</h4>
                        <p className="text-blue-100 text-sm leading-8 font-light max-w-sm">
                            South India's Largest & Most Trusted Real Estate Developer. We don't just sell plots; we build legacies.
                            Experience excellence with Future Group.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-4 flex justify-between md:justify-start md:gap-32">
                        <div>
                            <h4 className="font-sans text-xl mb-6 text-white">Explore</h4>
                            <ul className="space-y-3">
                                {['Home', 'Properties', 'Blog', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-blue-200 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-sans text-xl mb-6 text-white">Company</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Careers', 'Privacy', 'Terms'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-blue-200 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Awards */}
                    <div className="lg:col-span-4">
                        <h4 className="font-sans text-xl mb-6 text-white">Accolades</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 p-5 shadow-sm border border-white/20 flex flex-col items-start gap-4 hover:bg-white/20 transition-all group">
                                <Award className="text-white group-hover:scale-110 transition-transform duration-300" size={28} strokeWidth={1} />
                                <div>
                                    <p className="text-[10px] font-bold text-white uppercase tracking-wide mb-1">Best Developer</p>
                                    <p className="text-[9px] text-blue-200">Times Awards 2024</p>
                                </div>
                            </div>
                            <div className="bg-white/10 p-5 shadow-sm border border-white/20 flex flex-col items-start gap-4 hover:bg-white/20 transition-all group">
                                <Award className="text-white group-hover:scale-110 transition-transform duration-300" size={28} strokeWidth={1} />
                                <div>
                                    <p className="text-[10px] font-bold text-white uppercase tracking-wide mb-1">Customer Choice</p>
                                    <p className="text-[9px] text-blue-200">Real Estate 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 4: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-200 uppercase tracking-widest pt-0">
                    <p>© 2025 Future Group. All rights reserved.</p>
                    <div className="flex items-center gap-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-white text-[#0091D0] w-10 h-10 flex items-center justify-center hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
