import React from 'react';
import NewYearBanner from './NewYearBanner';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
            {/* Background Image - Parallax Effect would go here, static for now */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: 'url(/hero_background_estate_1765609063537.png)',
                }}>
                {/* Cinematic Dark Overlay - Sophisticated & Readable */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container - Centered & Authoritative */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
                <span className="text-white/90 uppercase tracking-wide-caps text-sm md:text-base font-medium mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    Est. 2024 • Tamil Nadu
                </span>

                <h1 className="text-white mb-8 border-b-0 max-w-4xl tracking-tight-headings leading-[1.1] drop-shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    Defining the Skyline.<br />
                    Securing Your Legacy.
                </h1>

                <p className="text-stone-100 max-w-xl text-lg md:text-xl font-light leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                    Premium land parcels curated for the discerning investor.
                </p>

                {/* Dynamic Ad/Discount Container - Placeholder for future updates */}
                <div id="adBanner" className="w-full max-w-3xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    <NewYearBanner />
                </div>
            </div>
        </section>
    );
};

export default Hero;
