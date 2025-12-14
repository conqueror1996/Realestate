import React, { useState } from 'react';
import { Maximize2, ArrowRight } from 'lucide-react';

const GallerySection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Infrastructure', 'Nature', 'Community', 'Interiors'];

    const photos = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=1200&fit=crop',
            category: 'Infrastructure',
            title: 'Master Plan Aerial'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
            category: 'Community',
            title: 'Evening Streetscapes'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop',
            category: 'Nature',
            title: 'Green Buffer Zones'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
            category: 'Infrastructure',
            title: 'Wide Blacktop Roads'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=1000&fit=crop',
            category: 'Interiors',
            title: 'Sample Villa Living'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
            category: 'Community',
            title: 'Clubhouse Entrance'
        }
    ];

    const filteredPhotos = activeCategory === 'All'
        ? photos
        : photos.filter(photo => photo.category === activeCategory);

    return (
        <section className="py-24 bg-stone-light">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div>
                        <span className="text-[#0091D0] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            Gallery
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight">
                            Visual Tour
                        </h2>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-sm tracking-wide transition-colors duration-300 ${activeCategory === cat
                                    ? 'text-[#0091D0] font-bold border-b-2 border-[#0091D0]'
                                    : 'text-gray-400 hover:text-[#1C1C1C]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pure Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {filteredPhotos.map((photo) => (
                        <div
                            key={photo.id}
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-none"
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Hover Overlay - Minimalist Gallery Style */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/90 p-4 rounded-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Maximize2 size={20} className="text-[#1C1C1C]" />
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-lg font-serif">{photo.title}</p>
                                <p className="text-white/60 text-xs font-medium uppercase tracking-wider mt-1">{photo.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="text-center mt-16">
                    <button className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1C1C1C] hover:text-[#0091D0] transition-colors">
                        View Full Archive
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default GallerySection;
