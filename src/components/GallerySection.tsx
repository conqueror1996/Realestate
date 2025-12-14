import React from 'react';

const GallerySection: React.FC = () => {
    const galleryItems = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop',
            title: 'Intelligent Master Planning',
            subtitle: 'Optimised plot dimensions, road hierarchy & zoning',
            benefit: 'Higher construction flexibility + smoother approvals',
            className: 'md:col-span-2 md:row-span-2'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop',
            title: '2500+ Trees Per Community',
            subtitle: 'Scientifically planned green buffers',
            benefit: 'Lower heat, better air, premium neighbourhood perception',
            className: 'md:col-span-1 md:row-span-2'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
            title: 'Underground Infrastructure',
            subtitle: 'Stormwater drains, concealed cabling, flood-free roads',
            benefit: 'Zero rework costs + long-term maintenance savings',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            title: 'Growth-Corridor Positioning',
            subtitle: 'Projects aligned with govt infra & future connectivity',
            benefit: 'Early entry = maximum appreciation',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=600&fit=crop',
            title: 'Lifestyle Infrastructure',
            subtitle: 'Clubhouse, parks, walking tracks',
            benefit: 'Better resale value + higher rental appeal',
            className: 'md:col-span-2 md:row-span-1'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#0091D0] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        The Standards We Live By
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] mb-6 leading-tight">
                        Designed for Living.<br className="hidden md:block" /> Engineered for Appreciation.
                    </h2>
                    <div className="w-20 h-0.5 bg-gray-200 mx-auto"></div>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] mb-12">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.className}`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ease-out"
                            />

                            {/* Portfolio Index Number - Subtle Watermark */}
                            <div className="absolute top-4 right-4 z-10 opacity-50 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                                <span className="text-white/40 font-serif text-4xl italic">
                                    0{index + 1}
                                </span>
                            </div>

                            {/* Adaptive Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-all duration-500 group-hover:bg-black/80 group-hover:opacity-100 group-hover:from-black group-hover:via-black/80" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                                    {/* Title - Always Visible */}
                                    <h3 className="text-white text-2xl font-serif mb-3 leading-tight border-l-2 border-[#0091D0] pl-3 group-hover:border-white transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* Details - Reveal on Hover */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 flex flex-col gap-3">
                                        <p className="text-gray-300 text-sm font-light leading-relaxed">
                                            {item.subtitle}
                                        </p>

                                        {/* Benefit Tag */}
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0091D0]"></span>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[#0091D0]">
                                                Impact:
                                            </span>
                                            <span className="text-xs text-white/90">
                                                {item.benefit}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Proof Strip */}
                <div className="text-center mb-12">
                    <p className="text-gray-500 font-medium italic text-sm">
                        *Every feature is standard across all G Square developments — not upgrades, not add-ons.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-[#1C1C1C] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#0091D0] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Download Master Planning Standards
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
