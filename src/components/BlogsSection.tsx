import React from 'react';

const BlogsSection: React.FC = () => {
    const articles = [
        {
            category: 'Navi Mumbai',
            title: 'Phase 2 Launch: Northern Crown',
            description: 'Experience the grand unveiling of our premium villa plots in the heart of the growth corridor.',
            image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop'
        },
        {
            category: 'Bangalore',
            title: 'Sustainability Summit 2024',
            description: 'Future Group awarded "Best Eco-Friendly Developer" for our massive green initiatives.',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop'
        },
        {
            category: 'Hyderabad',
            title: 'Community Weekend Carnival',
            description: 'A vibrant weekend of food, music, and joy for over 500 happy families at Blue Breeze.',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop'
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <span className="text-[20vw] font-serif font-bold tracking-tighter text-black">
                    INSIGHTS
                </span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0091D0] mb-4">OUR UPDATES</p>
                    <h2 className="text-5xl font-serif text-[#1C1C1C]">
                        News & Events
                    </h2>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
                    {articles.map((article, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] rounded-none overflow-hidden mb-6">
                                {/* White Square Indicator */}
                                <div className="absolute top-4 left-4 w-4 h-4 bg-white z-10 shadow-sm"></div>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 group-hover:text-[#0091D0] transition-colors">
                                    {article.title}
                                </h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-4 h-4 rounded-full border border-[#0091D0] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-[#0091D0] rounded-none"></div>
                                    </div>
                                    <span className="text-[#0091D0] text-sm font-medium">{article.category}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore More Button */}
                <div className="text-center mt-12 mb-20">
                    <button className="inline-flex items-center gap-2 border border-[#0091D0] text-[#0091D0] px-8 py-3 rounded-none text-sm font-bold uppercase tracking-wider hover:bg-[#0091D0] hover:text-white transition-all duration-300 group">
                        Explore More
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                {/* High Intent Lead Capture */}
                <div className="bg-[#1C1C1C] text-white p-12 md:p-16 rounded-none relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0091D0] blur-[120px] opacity-20 rounded-full translate-x-1/3 -translate-y-1/3"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4">
                            <p className="text-[#0091D0] font-bold tracking-[0.2em] uppercase text-xs mb-4">Exclusive Access</p>
                            <h3 className="text-4xl font-serif leading-tight mb-4">
                                Unlock Pricing & Inventory
                            </h3>
                            <p className="text-gray-400 font-light">
                                Download detailed project brochures, master plans, and price sheets directly to your device.
                            </p>
                        </div>

                        <div className="lg:col-span-8">
                            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="bg-white/10 border border-white/10 rounded-none px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:bg-white/20 focus:border-[#0091D0] transition-all"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="bg-white/10 border border-white/10 rounded-none px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:bg-white/20 focus:border-[#0091D0] transition-all"
                                />
                                <select className="bg-white/10 border border-white/10 rounded-none px-6 py-4 text-gray-300 focus:outline-none focus:bg-white/20 focus:border-[#0091D0] transition-all">
                                    <option>Select Interest</option>
                                    <option>Investment</option>
                                    <option>New Home</option>
                                    <option>NRI Investment</option>
                                </select>
                                <div className="md:col-span-3 mt-4">
                                    <button className="w-full bg-[#0091D0] hover:bg-[#007bb5] text-white font-bold uppercase tracking-widest py-4 rounded-none shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                                        Download Brochure Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
