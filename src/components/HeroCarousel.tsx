import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 0,
            hasCardInImage: true,
            image: "/Users/urbanclay/.gemini/antigravity/brain/1554dbd7-c1c6-425c-a3b0-608fa5a25153/christmas_offer_banner_template_red_card_1765793512687.png",
            topText: "BOOK A VILLA PLOT THIS",
            heading: "CHRISTMAS & NEW YEAR",
            offerValue: "50%",
            offerLabel: "OFF",
            offerSub: "STAMP DUTY CHARGES",
            desc: "PREMIUM VILLA PLOTS ACROSS TAMILNADU",
            price: "FROM ₹4.5L - ₹3CR",
            buttonText: "Book Now"
        },
        {
            id: 1,
            hasCardInImage: false,
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            topText: "NEW YEAR EXCLUSIVE",
            heading: "NEW BEGINNINGS",
            offerValue: "₹2L",
            offerLabel: "OFF",
            offerSub: "ON ALL PREMIUM BOOKINGS",
            desc: "START YOUR LEGACY IN 2026",
            price: "PLOTS FROM ₹45L",
            buttonText: "Claim Offer"
        },
        {
            id: 2,
            hasCardInImage: false,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
            topText: "EST. 2024 • TAMIL NADU",
            heading: "DEFINING THE SKYLINE",
            offerValue: "100%",
            offerLabel: "CLEAR",
            offerSub: "TITLES & OWNERSHIP",
            desc: "SECURE LAND PARCELS FOR INVESTORS",
            price: "HIGH APPRECIATION",
            buttonText: "Explore Projects"
        },
        {
            id: 3,
            hasCardInImage: false,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
            topText: "COMMUNITY LIVING",
            heading: "NATURE & FUTURE",
            offerValue: "50+",
            offerLabel: "AMENITIES",
            offerSub: "WORLD CLASS LIFESTYLE",
            desc: "SUSTAINABLE ECOSYSTEMS FOR YOU",
            price: "VISIT TODAY",
            buttonText: "Schedule Visit"
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
        <section className="relative w-full h-[85vh] min-h-[450px] md:min-h-[600px] overflow-hidden bg-charcoal group">

            {/* Slides */}
            {slides.map((slide: any, index) => (
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
                        {/* Dark overlay for readability on non-card images */}
                        {!slide.hasCardInImage && <div className="absolute inset-0 bg-black/20"></div>}
                    </div>

                    {/* Content Layout - Unified Advertisement Banner Style */}
                    <div className="relative h-full flex flex-col items-center justify-center text-center z-20 w-full">

                        {/* Card Container */}
                        <div className={`
                            max-w-[300px] md:max-w-[420px] w-full flex flex-col items-center justify-center py-6 px-4 md:pt-10 md:pb-12 md:px-6
                            transition-all duration-700 delay-100
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
                </div>

            ))
            }

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
                            ${idx === currentSlide ? 'w-12 bg-[#1A71B7]' : 'w-4 bg-[#1A71B7]/40 hover:bg-[#1A71B7]/60'}
                        `}
                    />
                ))}
            </div>



        </section >
    );
};

export default HeroCarousel;
