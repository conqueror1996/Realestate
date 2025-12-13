import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogsSection: React.FC = () => {
    const [currentBlog, setCurrentBlog] = useState(0);

    const featuredBlogs = [
        {
            date: 'NOVEMBER 24, 2025',
            title: 'WHY THACHANALLUR OFFERS THE RIGHT BLEND OF CONNECTIVITY, ENVIRONMENT & GROWTH POTENTIAL ?',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop',
            link: '#'
        },
        {
            date: 'NOVEMBER 21, 2025',
            title: 'How G Square Hilltop – Krishnagiri...',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
            link: '#'
        },
        {
            date: 'NOVEMBER 20, 2025',
            title: 'Medical & Academic Zone Advantage...',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
            link: '#'
        }
    ];

    const recentBlogs = [
        {
            title: 'How G Square Hilltop – Krishnagiri...',
            date: 'November 21, 2025',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=150&fit=crop',
            link: '#'
        },
        {
            title: 'Medical & Academic Zone Advantage...',
            date: 'November 20, 2025',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=150&fit=crop',
            link: '#'
        },
        {
            title: 'The Rise of Residential Plots in Thandal...',
            date: 'November 13, 2025',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=150&fit=crop',
            link: '#'
        }
    ];

    const nextBlog = () => {
        setCurrentBlog((prev) => (prev + 1) % featuredBlogs.length);
    };

    const prevBlog = () => {
        setCurrentBlog((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        BLOGS <span className="font-normal">&</span> UPDATES
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Featured Blog - Left Side */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative">
                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevBlog}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                    aria-label="Previous blog"
                                >
                                    <ChevronLeft size={24} className="text-gray-800" />
                                </button>

                                <button
                                    onClick={nextBlog}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                    aria-label="Next blog"
                                >
                                    <ChevronRight size={24} className="text-gray-800" />
                                </button>

                                {/* Featured Image */}
                                <div className="relative h-80 md:h-96">
                                    <img
                                        src={featuredBlogs[currentBlog].image}
                                        alt={featuredBlogs[currentBlog].title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay Text */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                                        <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                                            {featuredBlogs[currentBlog].title}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-sm text-gray-600 mb-4">
                                    {featuredBlogs[currentBlog].date}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase">
                                    {featuredBlogs[currentBlog].title}
                                </h4>
                                <a
                                    href={featuredBlogs[currentBlog].link}
                                    className="text-red-500 font-bold text-sm uppercase hover:text-red-600 transition-colors"
                                >
                                    KNOW MORE
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Recent Blogs List - Right Side */}
                    <div className="space-y-6">
                        {recentBlogs.map((blog, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="flex gap-4 p-4">
                                    {/* Thumbnail */}
                                    <div className="flex-shrink-0 w-24 h-20 rounded overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h5 className="text-sm md:text-base font-bold text-gray-900 mb-2 line-clamp-2">
                                            {blog.title}
                                        </h5>
                                        <div className="text-xs text-gray-600 mb-2">
                                            {blog.date}
                                        </div>
                                        <a
                                            href={blog.link}
                                            className="text-red-500 font-bold text-xs uppercase hover:text-red-600 transition-colors"
                                        >
                                            Know More &gt;&gt;
                                        </a>
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

export default BlogsSection;
