import React, { useState } from 'react';

const ProjectShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState('residential');
    const [selectedCity, setSelectedCity] = useState('Chennai');

    const cities = ['Chennai', 'Coimbatore', 'Trichy', 'Other Locations'];

    const projects = [
        {
            title: 'G Square Northern Crown',
            subtitle: 'Shape Your Story Here',
            location: 'Puzhal, Chennai',
            image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
            logo: 'G SQUARE\nNORTHERN\nCROWN'
        },
        {
            title: 'G Square South Crown',
            subtitle: 'An address that elevates your lifestyle instantly',
            location: 'Medavakkam, Chennai',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            logo: 'G SQUARE\nSOUTH\nCROWN'
        },
        {
            title: 'G Square Kshetra',
            subtitle: 'The beginning of prosperity right here',
            location: 'Karanodai, Chennai',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
            logo: 'G SQUARE\nKSHETRA'
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        YOUR HOME. YOUR DREAM. YOUR CHOICE
                    </h2>
                    <p className="text-base md:text-lg text-gray-700">
                        Choose your plot from India's Largest Plotted Real Estate Developer
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-0 mb-8">
                    <button
                        className={`px-8 py-3 font-semibold text-sm transition-all ${activeTab === 'residential'
                            ? 'bg-[#0091D0] text-white'
                            : 'bg-gray-600 text-white hover:bg-gray-500'
                            }`}
                        onClick={() => setActiveTab('residential')}
                    >
                        Residential Projects
                    </button>
                    <button
                        className={`px-8 py-3 font-semibold text-sm transition-all ${activeTab === 'commercial'
                            ? 'bg-[#0091D0] text-white'
                            : 'bg-gray-600 text-white hover:bg-gray-500'
                            }`}
                        onClick={() => setActiveTab('commercial')}
                    >
                        Commercial Projects
                    </button>
                </div>

                {/* City Tabs */}
                <div className="flex gap-6 mb-10 border-b border-gray-300 pb-2">
                    {cities.map((city) => (
                        <button
                            key={city}
                            className={`text-sm md:text-base font-semibold pb-2 transition-all ${selectedCity === city
                                ? 'text-gray-900 border-b-2 border-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setSelectedCity(city)}
                        >
                            {city}
                        </button>
                    ))}
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Top Text Overlay */}
                                <div className="absolute top-0 left-0 right-0 pt-8 px-6">
                                    <div className="text-center">
                                        <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3 drop-shadow-sm" style={{ fontFamily: 'Georgia, serif' }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-700 italic mb-3 drop-shadow-sm">
                                            {project.subtitle}
                                        </p>
                                        <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                                            <span className="w-12 h-px bg-gray-600"></span>
                                            <span className="drop-shadow-sm">{project.location}</span>
                                            <span className="w-12 h-px bg-gray-600"></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Logo Badge */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-4 px-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-left flex-1">
                                            <div className="text-xs md:text-sm font-bold text-gray-900 leading-tight whitespace-pre-line tracking-wide">
                                                {project.logo}
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 bg-[#FFA500] text-black font-bold text-xs rounded hover:bg-[#FF8C00] transition-colors whitespace-nowrap">
                                            Know More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-10">
                    <button className="px-8 py-3 bg-[#0091D0] text-white font-semibold rounded hover:bg-[#007AB8] transition-colors">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
