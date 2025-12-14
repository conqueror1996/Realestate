import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            subtitle: "New Year Exclusive",
            title: <>New Beginnings.<br />Grand Savings.</>,
            description: "Start your legacy in 2026 with a flat ₹2 Lakhs off on all premium plot bookings made this month.",
            ctaPrimary: "Claim Offer",
            ctaSecondary: "View Inventory",
            overlayColor: "bg-black/40"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
            subtitle: "Est. 2024 • Tamil Nadu",
            title: <>Defining the Skyline.<br />Securing Your Legacy.</>,
            description: "Premium land parcels curated for the discerning investor. Experience the transparency of true ownership.",
            ctaPrimary: "Explore Projects",
            ctaSecondary: "Watch Film",
            overlayColor: "bg-black/30"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
            subtitle: "Community Living",
            title: <>Nature.<br />Community. <br />Future.</>,
            description: "Sustainable ecosystems designed for the next generation. Parks, wide roads, and seamless connectivity.",
            ctaPrimary: "Schedule Visit",
            ctaSecondary: "Download Brochure",
            overlayColor: "bg-black/20"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-charcoal group">

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out scale-105"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)'
                        }}
                    >
                        <div className={`absolute inset-0 ${slide.overlayColor}`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-20 container-tight mx-auto mt-8">

                        <span className={`
                            inline-block py-1 px-3 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md
                            text-white/90 uppercase tracking-wide-caps text-xs md:text-sm font-medium 
                            transform transition-all duration-700 delay-100
                            ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                        `}>
                            {slide.subtitle}
                        </span>

                        <h1 className={`
                            text-white mb-6 border-b-0 max-w-5xl tracking-tight-headings leading-[1.1] drop-shadow-lg
                            transform transition-all duration-700 delay-200
                            ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                        `}>
                            {slide.title}
                        </h1>

                        <p className={`
                            text-stone-100 max-w-2xl text-lg md:text-xl font-light leading-relaxed mb-10
                            transform transition-all duration-700 delay-300
                            ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                        `}>
                            {slide.description}
                        </p>

                        <div className={`
                            flex flex-col sm:flex-row gap-4 
                            transform transition-all duration-700 delay-400
                            ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                        `}>
                            <button className="btn-primary min-w-[160px] shadow-xl hover:shadow-2xl border border-transparent">
                                {slide.ctaPrimary}
                            </button>
                            <button className="btn-outline border-white text-white hover:bg-white hover:text-charcoal min-w-[160px] backdrop-blur-sm">
                                {slide.ctaSecondary}
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`
                            h-1 transition-all duration-500 rounded-full
                            ${idx === currentSlide ? 'w-12 bg-[#0091D0]' : 'w-4 bg-[#0091D0]/40 hover:bg-[#0091D0]/60'}
                        `}
                    />
                ))}
            </div>

            {/* Bottom Gradient for smoother section transition */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

        </section>
    );
};

export default HeroCarousel;
