import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const photos = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=1200&fit=crop',
            title: 'Master Plan Aerial',
            year: '2012'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
            title: 'Evening Streetscapes',
            year: '2014'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop',
            title: 'Green Buffer Zones',
            year: '2016'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
            title: 'Wide Blacktop Roads',
            year: '2018'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=1000&fit=crop',
            title: 'Sample Villa Living',
            year: '2020'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
            title: 'Clubhouse Entrance',
            year: '2022'
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
            title: 'Community Expansion',
            year: '2023'
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
            title: 'Future Horizons',
            year: '2024'
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-24 bg-stone-light border-t border-gray-200 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div>
                        <span className="text-ui-label text-[#0091D0] mb-4 block">
                            Timeline
                        </span>
                        <h2 className="leading-tight">
                            Our Journey
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] transition-all duration-300"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] transition-all duration-300"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Reel */}
                {/* -mx-6 px-6 to allow full-width bleeding on mobile but keep padding */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 scrollbar-hide pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="flex-none w-[85vw] md:w-[400px] snap-center group select-none"
                        >
                            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-none mb-4 bg-gray-200">
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                    draggable="false"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-widest uppercase">
                                    {photo.year}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-serif text-[#1C1C1C] mb-1">{photo.title}</h3>
                                {/* Decorative Line */}
                                <div className="w-12 h-px bg-gray-300 group-hover:w-full group-hover:bg-[#0091D0] transition-all duration-700 ease-in-out"></div>
                            </div>
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="flex-none w-[85vw] md:w-[300px] snap-center flex flex-col justify-center items-center bg-gray-100 border border-dashed border-gray-300 hover:bg-white hover:border-solid hover:border-[#0091D0] transition-all duration-300 cursor-pointer group aspect-[3/4]">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                            <ArrowRight size={24} className="text-[#1C1C1C]" />
                        </div>
                        <span className="text-charcoal font-serif text-xl">View Archive</span>
                        <span className="text-xs text-gray-500 mt-2 uppercase tracking-widest">All Photos</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GallerySection;
