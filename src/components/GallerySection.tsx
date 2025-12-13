import React from 'react';

const GallerySection: React.FC = () => {
    const galleryItems = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop',
            title: 'Modern Interiors',
            category: 'Design',
            className: 'md:col-span-2 md:row-span-2'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop',
            title: 'Lush Gardens',
            category: 'Landscape',
            className: 'md:col-span-1 md:row-span-2'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
            title: 'Smart Living',
            category: 'Technology',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            title: 'Prime Locations',
            category: 'Lifestyle',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=600&fit=crop',
            title: 'Clubhouse Access',
            category: 'Amenities',
            className: 'md:col-span-2 md:row-span-1'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Visual Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] mb-6">
                        Glimpses of Perfection
                    </h2>
                    <div className="w-20 h-0.5 bg-gray-200 mx-auto"></div>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.className}`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.category}
                                </span>
                                <h3 className="text-white text-2xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View Gallery Button */}
                <div className="text-center mt-12">
                    <button className="text-sm font-bold uppercase tracking-widest text-[#1C1C1C] border-b border-[#1C1C1C] pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors">
                        View Complete Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
