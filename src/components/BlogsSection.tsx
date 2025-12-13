import React from 'react';

const BlogsSection: React.FC = () => {
    const featureArticle = {
        date: 'Nov 24, 2025',
        category: 'Market Insights',
        title: 'The Future of Urban Living: Connectivity, Environment & Growth.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=1000&fit=crop',
    };

    const sideArticles = [
        {
            date: 'Nov 21, 2025',
            category: 'Architecture',
            title: 'Visionary Designs: Inside G Square Hilltop.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
        },
        {
            date: 'Nov 20, 2025',
            category: 'Investment',
            title: 'The Strategic Advantage of Academic Zones.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header - Minimalist & Left Aligned for variety */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-amber-500 tracking-[0.2em] text-xs font-bold uppercase mb-4 block">
                            Press & Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Latest from<br /> The Journal
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 rounded-full text-sm uppercase tracking-wider">
                        View Archive
                    </button>
                </div>

                {/* Asymmetric Luxury Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Featured Article (Left - Spans 7 cols) */}
                    <div className="lg:col-span-7 group cursor-pointer relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
                        <img
                            src={featureArticle.image}
                            alt={featureArticle.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <div className="flex items-center gap-4 mb-4 text-xs font-medium tracking-widest text-gray-300 uppercase">
                                <span className="text-amber-500">{featureArticle.category}</span>
                                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                <span>{featureArticle.date}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif leading-snug mb-6 group-hover:text-amber-50 transition-colors">
                                {featureArticle.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm font-medium border-b border-white/30 pb-1 w-fit group-hover:border-white transition-colors">
                                Read Full Story
                            </div>
                        </div>
                    </div>

                    {/* Side Articles (Right - Spans 5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {sideArticles.map((article, idx) => (
                            <div key={idx} className="group cursor-pointer flex gap-5 items-center h-full border-b border-white/10 pb-8 last:border-0 last:pb-0 hover:border-white/30 transition-colors">
                                <div className="w-1/3 h-full min-h-[140px] overflow-hidden rounded-lg">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="w-2/3 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 text-xs font-medium tracking-widest text-gray-400 mb-2 uppercase">
                                        <span className="text-amber-500">{article.category}</span>
                                    </div>
                                    <h4 className="text-xl font-serif leading-tight mb-3 group-hover:text-gray-300 transition-colors">
                                        {article.title}
                                    </h4>
                                    <span className="text-xs text-gray-500">{article.date}</span>
                                </div>
                            </div>
                        ))}

                        {/* Mobile 'View Archive' Button */}
                        <div className="mt-4 md:hidden">
                            <button className="w-full py-4 border border-white/20 text-center uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
                                View Archive
                            </button>
                        </div>

                        {/* Newsletter Mini-Box */}
                        <div className="mt-auto bg-[#1C1C1C] p-6 rounded-xl border border-white/5">
                            <h5 className="text-lg font-serif mb-2">Subscribe to our newsletter</h5>
                            <p className="text-gray-400 text-xs mb-4">Get the latest market insights delivered to your inbox.</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email Address" className="bg-black/30 w-full px-4 py-2 text-sm rounded border border-white/10 focus:border-amber-500 outline-none transition-colors" />
                                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
