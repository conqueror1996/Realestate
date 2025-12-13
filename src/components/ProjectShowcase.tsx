import React, { useState } from 'react';

const ProjectShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState('mumbai');


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
        },
        {
            title: 'G Square Blue Breeze',
            subtitle: 'Experience the calm involved with luxury',
            location: 'Neelankarai, Chennai',
            image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop',
            logo: 'G SQUARE\nBLUE\nBREEZE'
        },
        {
            title: 'G Square Green Valley',
            subtitle: 'Nature’s embrace in the heart of the city',
            location: 'Coimbatore',
            image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?w=800&h=600&fit=crop',
            logo: 'G SQUARE\nGREEN\nVALLEY'
        },
        {
            title: 'G Square City 2.0',
            subtitle: 'The future of integrated living',
            location: 'Trichy',
            image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&h=600&fit=crop',
            logo: 'G SQUARE\nCITY'
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-title-lg text-charcoal mb-6">
                        Your home. Your dream. Your choice.
                    </h2>
                    <p className="text-body-lg text-charcoal-light font-light opacity-80">
                        Choose your place in the world from our curated collection.
                    </p>
                </div>

                {/* Tabs - Premium Segmented Control */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-stone-100 p-1.5 rounded-full shadow-inner">
                        {[
                            { id: 'mumbai', label: 'Mumbai' },
                            { id: 'navi_mumbai', label: 'Navi Mumbai' },
                            { id: 'mumbai_3.0', label: 'Mumbai 3.0' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 ${activeTab === tab.id
                                    ? 'bg-[#1C1C1C] text-white shadow-lg transform scale-105'
                                    : 'text-gray-500 hover:text-[#1C1C1C] hover:bg-stone-200/50'
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>



                {/* Project Cards - Cinematic & Premium Scroll */}
                <div className="flex overflow-x-auto pb-12 gap-6 scrollbar-hide snap-x px-4 md:px-0 -mx-4 md:mx-0">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[550px] min-w-[85vw] md:min-w-[400px] flex-shrink-0 overflow-hidden rounded-md cursor-pointer snap-center"
                        >
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ease-out"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Content - Editorial Style */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {/* Location Badge */}
                                <div className="inline-block px-3 py-1 mb-4 border border-white/30 rounded-full bg-black/20 backdrop-blur-sm">
                                    <span className="text-xs font-medium text-white tracking-[0.2em] uppercase">
                                        {project.location}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-serif text-white mb-2 leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 font-light text-sm mb-6 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.subtitle}
                                </p>

                                {/* Action Line */}
                                <div className="flex items-center gap-4 group/btn">
                                    <span className="text-white text-sm tracking-widest uppercase font-medium border-b border-white/0 group-hover/btn:border-white transition-all duration-300">
                                        Explore Residence
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transform -translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-300">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-16">
                    <button className="px-10 py-4 bg-[#1C1C1C] text-white text-sm font-medium tracking-[0.2em] uppercase hover:bg-stone-800 transition-all duration-500 hover:px-12">
                        View All Collections
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
