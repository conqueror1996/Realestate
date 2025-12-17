import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 'responsive-banner',
            isFullBanner: true,
            image: "/banners/banner-desktop.jpg",
            mobileImage: "/banners/banner-mobile.jpg",
            topText: "",
            heading: "",
            offerValue: "",
            offerLabel: "",
            offerSub: "",
            desc: "",
            price: "",
            buttonText: ""
        }
    ];


    interface Slide {
        id: number | string;
        isFullBanner?: boolean;
        hasCardInImage?: boolean;
        image: string;
        mobileImage?: string;
        topText: string;
        heading: string;
        offerValue: string;
        offerLabel: string;
        offerSub: string;
        desc: string;
        price: string;
        buttonText: string;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative w-full md:h-[85vh] md:min-h-[600px] overflow-hidden bg-white group">

            {/* Slides */}
            {slides.map((slide: Slide, index) => (
                <div
                    key={slide.id}
                    className={`
                        transition-opacity duration-1000 ease-in-out w-full
                        ${index === currentSlide ? 'opacity-100 z-10 relative md:absolute md:inset-0' : 'opacity-0 z-0 absolute top-0 left-0 md:inset-0'}
                    `}
                >
                    {/* Desktop Background Image - Force Fit (Stretch) */}
                    <div
                        className={`absolute inset-0 bg-center transition-transform duration-[6000ms] ease-out hidden md:block
                            bg-no-repeat
                            ${!slide.isFullBanner ? 'bg-black' : 'bg-[#e5e5e5]'} 
                        `}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: '100% 100%', // FORCE FIT: Stretches image to cover container exactly
                            transform: index === currentSlide ? 'scale(1.0)' : 'scale(1.0)'
                        }}
                    >
                        {/* Dark overlay for readability on non-card images */}
                        {!slide.isFullBanner && !slide.hasCardInImage && <div className="absolute inset-0 bg-black/20"></div>}
                    </div>

                    {/* Mobile Image - Adaptive Full Fit (Stretched) */}
                    {/* "Replicate" content to fit container exactly: Fixed height + Force Fill */}
                    <div className="block md:hidden w-full h-[60vh] relative bg-gray-50">
                        <img
                            src={slide.mobileImage || slide.image}
                            alt={slide.heading || "Banner"}
                            className="w-full h-full"
                            style={{ objectFit: 'fill' }}
                        />
                        {!slide.isFullBanner && !slide.hasCardInImage && <div className="absolute inset-0 bg-black/20"></div>}
                    </div>

                    {/* Content Layout - Unified Advertisement Banner Style */}
                    {!slide.isFullBanner && (
                        <div className="absolute inset-0 h-full flex flex-col items-center justify-center text-center z-20 w-full pointer-events-none">
                            {/* Card Container - pointer events enabled */}
                            <div className={`
                            max-w-[300px] md:max-w-[420px] w-full flex flex-col items-center justify-center py-6 px-4 md:pt-10 md:pb-12 md:px-6
                            transition-all duration-700 delay-100 pointer-events-auto
                            ${slide.hasCardInImage ? 'bg-transparent text-white' : 'bg-[#e31e24] text-white shadow-2xl rounded-lg mx-4 md:mx-0'}
                            ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                        `}>

                                <p className="text-xs md:text-base font-medium mb-1 tracking-wider uppercase opacity-90 drop-shadow-md">
                                    {slide.topText}
                                </p>
                                <h2 className="text-xl md:text-3xl font-bold mb-4 uppercase leading-tight drop-shadow-md max-w-xs">
                                    {slide.heading}
                                </h2>

                                {/* Offer Box */}
                                <div className={`
                                px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-xl mb-4 transform -rotate-2 border-4 border-dashed
                                ${slide.hasCardInImage
                                        ? 'bg-white/90 text-[#b91c1c] border-[#b91c1c]/30'
                                        : 'bg-white text-[#e31e24] border-[#e31e24]/30'}
                            `}>
                                    <div className="flex items-baseline justify-center gap-2 leading-none">
                                        <span className="text-lg md:text-xl font-bold text-gray-700">GET</span>
                                        <span className="text-5xl md:text-7xl font-extrabold tracking-tighter">{slide.offerValue}</span>
                                        <div className={`
                                        flex flex-col items-start rounded-full w-10 h-10 md:w-12 md:h-12 justify-center items-center absolute -top-3 -right-3 md:-top-4 md:-right-4 shadow-md rotate-12
                                        ${slide.hasCardInImage ? 'bg-[#b91c1c] text-white' : 'bg-[#e31e24] text-white ring-2 ring-white'}
                                    `}>
                                            <span className="text-[9px] md:text-[10px] font-bold">OFFER</span>
                                        </div>
                                    </div>
                                    <div className={`
                                    text-2xl md:text-3xl font-black leading-none mb-1
                                    ${slide.hasCardInImage ? 'text-[#b91c1c]' : 'text-[#e31e24]'}
                                `}>
                                        {slide.offerLabel}
                                    </div>
                                </div>

                                <h3 className={`
                                text-lg md:text-xl font-bold uppercase mb-4 px-3 py-1 shadow-sm border
                                ${slide.hasCardInImage
                                        ? 'bg-[#b91c1c] border-white/20'
                                        : 'bg-[#b91c1c] border-white/30'}
                            `}>
                                    {slide.offerSub}
                                </h3>

                                <div className="mb-2">
                                    <p className="text-xs md:text-sm uppercase tracking-widest font-medium mb-2 opacity-90">
                                        {slide.desc}
                                    </p>
                                    <p className="text-2xl md:text-3xl font-extrabold text-[#FFF700] drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                        {slide.price}
                                    </p>
                                </div>


                            </div>
                        </div>
                    )}
                </div>

            ))
            }

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
            >
                <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            {slides.length > 1 && (
                <div className="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`
                            h-1 transition-all duration-500 rounded-full shadow-sm
                            ${idx === currentSlide ? 'w-12 bg-[#1A71B7]' : 'w-4 bg-white/60 hover:bg-white'}
                        `}
                        />
                    ))}
                </div>
            )}

        </section >
    );
};

export default HeroCarousel;
