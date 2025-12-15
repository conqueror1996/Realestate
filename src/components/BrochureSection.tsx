import React, { useRef } from 'react';
import { Download, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

const BrochureSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const brochures = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop',
            title: 'Project Brochure',
            subtitle: 'Comprehensive Guide',
            size: '12.5 MB'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop',
            title: 'Floor Plans',
            subtitle: 'Villas & Plots',
            size: '8.2 MB'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop',
            title: 'Amenities',
            subtitle: 'Lifestyle & Recreation',
            size: '5.4 MB'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop',
            title: 'Location Map',
            subtitle: 'Connectivity',
            size: '2.1 MB'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=1000&fit=crop',
            title: 'Sustainability',
            subtitle: 'Green Initiatives',
            size: '3.8 MB'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=1000&fit=crop',
            title: 'Specifications',
            subtitle: 'Materials & Finishes',
            size: '4.5 MB'
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
        <section className="py-12 md:py-16 bg-white border-t border-gray-100 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative">

                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-8 md:mb-16 text-center">
                    <span className="text-sm font-bold tracking-[0.2em] text-[#1A71B7] mb-4 block uppercase">
                        DOWNLOADS
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-bold text-[#1C1C1C]">
                        Our Brochures
                    </h2>
                </div>

                {/* Carousel Container with Arrows */}
                <div className="relative group">
                    {/* Navigation Buttons - Absolute positioned */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] transition-all duration-300 shadow-lg hidden md:flex"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] transition-all duration-300 shadow-lg hidden md:flex"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Horizontal Scroll Reel */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 scrollbar-hide pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {brochures.map((item) => (
                            <div
                                key={item.id}
                                className="flex-none w-[85vw] md:w-[350px] snap-center group/item select-none cursor-pointer"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-md border border-gray-100 transition-all duration-300 group-hover/item:shadow-xl">
                                    <div className="absolute inset-0 bg-black/5 group-hover/item:bg-black/0 transition-colors z-10"></div>
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover/item:scale-105"
                                        draggable="false"
                                    />
                                    {/* PDF Badge */}
                                    <div className="absolute top-4 right-4 z-20 bg-red-600 text-white px-2 py-1 text-[10px] font-bold tracking-wider rounded-sm shadow-sm flex items-center gap-1">
                                        <FileText size={10} /> PDF
                                    </div>

                                    {/* Overlay Download Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 z-20 bg-black/20 backdrop-blur-[1px]">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg transform scale-90 group-hover/item:scale-100 transition-transform duration-300">
                                            <Download size={24} className="text-[#1A71B7]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center md:text-left px-2">
                                    <h3 className="text-xl font-light text-[#1C1C1C] mb-1">{item.title}</h3>
                                    <div className="flex items-center justify-between md:justify-start gap-4">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">{item.subtitle}</p>
                                        <span className="text-xs text-gray-400 font-mono">{item.size}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BrochureSection;
