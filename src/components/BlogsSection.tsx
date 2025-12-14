import React from 'react';

const BlogsSection: React.FC = () => {
    const articles = [
        {
            category: 'Investment',
            date: 'DEC 24',
            title: 'Plotted Developments vs Apartments: The ROI Truth',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=1200&fit=crop',
            sticker: 'Must Read'
        },
        {
            category: 'NRI Guide',
            date: 'DEC 20',
            title: 'The Complete NRI Land Buying Checklist 2025',
            image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&h=1200&fit=crop',
            sticker: 'Expert Guide'
        },
        {
            category: 'Legal',
            date: 'DEC 18',
            title: 'DTCP, CMDA, Panchayat: Approvals Demystified',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=1200&fit=crop',
            sticker: 'Essential'
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
                <div className="flex items-end justify-between mb-24">
                    <div>
                        <h2 className="text-8xl font-serif text-[#121212] tracking-tighter leading-[0.9]">
                            Market<br />Intelligence.
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Knowledge Hub</p>
                        <p className="text-4xl font-serif text-[#121212]">Expert Analysis</p>
                    </div>
                </div>

                {/* Magazine Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {articles.map((article, idx) => (
                        <div key={idx} className="group cursor-pointer perspective-1000">
                            <div className="relative bg-white h-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-6 group-hover:rotate-1">

                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-shadow duration-700">
                                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur border border-white/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#121212]">
                                        {article.sticker}
                                    </div>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100"
                                    />
                                    {/* Flash effect on hover */}
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="pr-4">
                                    <div className="flex items-center justify-between border-t border-black/10 pt-4 mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-amber-600">{article.category}</span>
                                        <span className="text-xs font-mono text-gray-400">{article.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif leading-[1.2] text-[#121212] group-hover:text-amber-700 transition-colors">
                                        {article.title}
                                    </h3>
                                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-gray-400">
                                        Read Analysis <span className="text-amber-500">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* High Intent Lead Capture */}
                <div className="bg-[#1C1C1C] text-white p-12 md:p-16 rounded-2xl relative overflow-hidden">
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
                                    className="bg-white/10 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:bg-white/20 focus:border-[#0091D0] transition-all"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="bg-white/10 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:bg-white/20 focus:border-[#0091D0] transition-all"
                                />
                                <select className="bg-white/10 border border-white/10 rounded-lg px-6 py-4 text-gray-300 focus:outline-none focus:bg-white/20 focus:border-[#0091D0] transition-all">
                                    <option>Select Interest</option>
                                    <option>Investment</option>
                                    <option>New Home</option>
                                    <option>NRI Investment</option>
                                </select>
                                <div className="md:col-span-3 mt-4">
                                    <button className="w-full bg-[#0091D0] hover:bg-[#007bb5] text-white font-bold uppercase tracking-widest py-4 rounded-lg shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
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
