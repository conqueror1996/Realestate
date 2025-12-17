import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const BlogsSection: React.FC = () => {
    const { content } = useContent();
    const navigate = useNavigate();

    // ... (articles mapping logic same as before)
    const articles = content.news.map(item => ({
        category: item.date,
        title: item.title,
        description: item.excerpt,
        image: item.image
    }));

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* ... (rest of render same) */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <span className="text-[20vw] font-sans font-bold tracking-tighter text-black">
                    INSIGHTS
                </span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A71B7] mb-4">OUR UPDATES</p>
                    <h2 className="text-5xl md:text-7xl font-bold text-[#1C1C1C]">
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
                                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 group-hover:text-[#1A71B7] transition-colors">
                                    {article.title}
                                </h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-4 h-4 rounded-full border border-[#1A71B7] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-[#1A71B7] rounded-none"></div>
                                    </div>
                                    <span className="text-[#1A71B7] text-sm font-medium">{article.category}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore More Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/about-us')}
                        className="inline-flex items-center gap-2 border border-[#1A71B7] text-[#1A71B7] px-8 py-3 rounded-none text-sm font-bold uppercase tracking-wider hover:bg-[#1A71B7] hover:text-white transition-all duration-300 group"
                    >
                        Explore More
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
