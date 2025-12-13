import React from 'react';

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

                <div className="flex gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    <button className="bg-white text-charcoal px-8 py-4 uppercase tracking-wide-caps text-xs md:text-sm font-semibold hover:bg-stone-200 transition-colors duration-500">
                        Explore Portfolio
                    </button>
                    <button className="bg-transparent border border-white text-white px-8 py-4 uppercase tracking-wide-caps text-xs md:text-sm font-semibold hover:bg-white hover:text-charcoal transition-all duration-500">
                        Contact Private Office
                    </button>
                </div>

                {/* Dynamic Ad/Discount Container - Kept layout neutral */}
                <div id="adBanner" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 invisible"></div>
            </div>
        </section>
    );
};

export default Hero;
