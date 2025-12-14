import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

const NewYearBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white py-4 px-6 relative overflow-hidden rounded-xl shadow-2xl mx-auto transform transition-all hover:scale-[1.02] duration-300">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
                <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 blur-2xl transform translate-x-[-100%] animate-shine"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 z-10 relative">

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#C6A87C]/20 rounded-full">
                        <Sparkles size={20} className="text-[#C6A87C]" fill="currentColor" />
                    </div>
                    <div className="text-left font-sans">
                        <span className="block text-xs text-[#C6A87C] font-bold uppercase tracking-widest mb-0.5">Limited Time Offer</span>
                        <p className="text-sm md:text-base font-light text-white leading-tight">
                            Start 2026 with <span className="font-semibold text-[#fff]">₹2 Lakhs Off</span> per plot.
                        </p>
                    </div>
                </div>

                <button className="bg-[#C6A87C] text-[#1C1C1C] px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300 rounded-sm shadow-lg whitespace-nowrap">
                    Claim Offer
                </button>
            </div>

            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 p-1 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Close"
            >
                <X size={14} />
            </button>
        </div>
    );
};

export default NewYearBanner;
