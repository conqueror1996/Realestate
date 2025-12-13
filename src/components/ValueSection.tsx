import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ValueSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const values = [
        {
            title: 'World class\nAmenities',
            description: 'Residents of G Square\'s plot developments enjoy a host of world-class amenities, ranging from state-of-the-art fitness centers and swimming pools to meticulously landscaped gardens and recreational spaces.',
            images: [
                'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=150&fit=crop'
            ]
        },
        {
            title: 'Freedom to design your\ndream home',
            description: 'G Square offers not just plots, but a platform to create your homes they way you always envisioned. Also provides the professional expertise to enhance the functionality and aesthetics of your homes.',
            images: [
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop'
            ]
        },
        {
            title: 'Prime\nLocation',
            description: 'We\'re offering plots right in the heart of the city, turning them from just specks into vibrant parts of urban living. At G Square, we\'re not just redefining real estate, we\'re reimagining urban living, one city-centric plot at a time.',
            images: [
                'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop'
            ]
        },
        {
            title: 'Exceptional appreciation\npotential',
            description: 'At G Square, we understand that plots in prime district assets known for their appreciation potential. Our commitment to selecting prime locations and fostering comprehensive developments around our projects sets the stage for remarkable appreciation.',
            images: [
                'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop'
            ]
        },
        {
            title: 'Safe and Secure Plot\nCommunity',
            description: 'A secure community ensures residents, businesses, and visitors safety through effective law enforcement, community involvement, social well-designed infrastructure, and coordinated emergency responses, including code enforcement adaptation.',
            images: [
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop'
            ]
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-[1600px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0091D0] mb-2">
                        HOW WE ADD VALUE TO YOUR LIVING
                    </h2>
                </div>

                {/* Scrollable Cards Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors -ml-4 hidden md:flex items-center justify-center"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} className="text-gray-800" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors -mr-4 hidden md:flex items-center justify-center"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} className="text-gray-800" />
                    </button>

                    {/* Cards */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 w-[280px] md:w-[320px]"
                            >
                                {/* Images */}
                                <div className={`mb-4 ${value.images.length > 1 ? 'grid grid-cols-2 gap-2' : ''}`}>
                                    {value.images.map((img, imgIdx) => (
                                        <div
                                            key={imgIdx}
                                            className={`overflow-hidden rounded ${value.images.length === 1 ? 'h-[280px]' : 'h-[140px]'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${value.title} ${imgIdx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-lg md:text-xl font-bold text-[#0091D0] mb-3 whitespace-pre-line leading-tight">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default ValueSection;
