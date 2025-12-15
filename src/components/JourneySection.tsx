import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const JourneySection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const photos = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=1200&fit=crop',
            year: '2015',
            title: 'Inception',
            description: 'The vision was born with our first acquisition.'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
            year: '2018',
            title: 'Breaking Ground',
            description: 'Laying the foundation for a new community standard.'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop',
            year: '2021',
            title: 'Expansion',
            description: 'Growing our footprint and influence across the region.'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
            year: '2024',
            title: 'Modern Living',
            description: 'Delivering world-class amenities to 500+ families.'
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        setIsAutoPlaying(false); // Stop autoplay on user interaction
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth / 2; // Scroll half view width
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    // Auto-scroll logic
    useEffect(() => {
        let intervalId: any;

        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const maxScrollLeft = container.scrollWidth - container.clientWidth;

                    if (container.scrollLeft >= maxScrollLeft - 10) {
                        // Reset to start smoothly or instantly
                        container.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        container.scrollBy({ left: 1, behavior: 'smooth' }); // Slow drift or step
                        // Actually, for "slide" effect, let's do a step
                        container.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                }
            }, 3000); // Scroll every 3 seconds
        }

        return () => clearInterval(intervalId);
    }, [isAutoPlaying]);

    return (
        <section className="py-12 md:py-16 bg-stone-50 border-t border-gray-200 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative">

                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-8 md:mb-16 text-center">
                    <span className="text-sm font-bold tracking-[0.2em] text-[#1A71B7] mb-4 block uppercase">
                        TIMELINE
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-bold text-[#1C1C1C]">
                        View Our Journey
                    </h2>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative group"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] transition-all duration-300 shadow-md"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] transition-all duration-300 shadow-md"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {photos.map((photo) => (
                            <div
                                key={photo.id}
                                className="flex-none w-[85vw] md:w-[320px] lg:w-[400px] snap-center group/item select-none"
                            >
                                <div className="relative aspect-square overflow-hidden bg-gray-200">
                                    <img
                                        src={photo.src}
                                        alt={photo.title}
                                        className="w-full h-full object-cover transition-all duration-700 ease-out"
                                        draggable="false"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default JourneySection;
