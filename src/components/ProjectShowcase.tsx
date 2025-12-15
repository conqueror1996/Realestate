import React, { useState } from 'react';
import { MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';

const ProjectShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState('mumbai');

    const projects = [
        {
            title: 'Northern Crown',
            location: 'Navi Mumbai',
            image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
            status: 'RERA Approved',
            price: '₹45L Onwards',
            size: '600 - 2400 Sq.ft',
            type: 'Villa Plots',
            idealFor: 'Living'
        },
        {
            title: 'Medavakkam Royal',
            location: 'Mumbai 3.0',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
            status: 'Ready to Build',
            price: '₹85L - ₹2.5Cr',
            size: '1200 - 4800 Sq.ft',
            type: 'Premium Plots',
            idealFor: 'Investment'
        },
        {
            title: 'Blue Breeze',
            location: 'Mumbai',
            image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop',
            status: 'CMDA Approved',
            price: '₹2.5Cr Onwards',
            size: '2400 - 9600 Sq.ft',
            type: 'Beachside Land',
            idealFor: 'Luxury'
        }
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl text-charcoal leading-tight font-bold">
                        Your Home. Your Dream. Your Choice
                    </h2>
                    <p className="text-body-base text-gray-500 max-w-2xl mx-auto">
                        Choose your plot from India's Largest Plotted Real Estate Developer
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white p-1 rounded-none shadow-sm border border-gray-100">
                        {['Mumbai', 'Navi Mumbai', 'Mumbai 3.0'].map((city) => (
                            <button
                                key={city}
                                className={`px-4 py-1.5 text-xs md:px-8 md:py-2 md:text-base font-medium transition-all duration-300 ${activeTab === city.toLowerCase().replace(' ', '_')
                                    ? 'bg-[#1A71B7] text-white shadow-sm'
                                    : 'text-gray-500 hover:text-[#1A71B7] hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveTab(city.toLowerCase().replace(' ', '_'))}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <div className="flex flex-nowrap overflow-x-auto gap-6 pb-12 px-4 md:justify-center snap-x snap-mandatory scrollbar-hide">
                    {projects.map((project, idx) => (
                        <div key={idx} className="flex-none w-[85vw] md:w-[350px] snap-center group select-none flex flex-col">
                            {/* Image Header with Aspect Ratio */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-xl">
                                <div className="absolute top-4 right-4 z-20 bg-[#1A71B7] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ui-label">
                                    {project.idealFor}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Info Body */}
                            <div className="flex flex-col flex-grow px-2">
                                <div className="mb-5">
                                    <div className="flex justify-between items-start mb-2 gap-4">
                                        <h3 className="text-2xl font-light text-[#1C1C1C] leading-tight group-hover:text-[#1A71B7] transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-sm md:text-base font-bold text-[#1A71B7]">{project.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-charcoal-light text-xs font-medium">
                                        <MapPin size={14} className="text-gray-400" />
                                        <span className="opacity-80">{project.location}</span>
                                    </div>
                                </div>

                                {/* Decision Data Grid */}
                                <div className="grid grid-cols-2 gap-y-4 gap-x-4 border-t border-gray-100 pt-4 mb-6">
                                    <div>
                                        <p className="text-ui-label text-gray-400 mb-1">Plot Size</p>
                                        <p className="text-sm font-semibold text-charcoal">{project.size}</p>
                                    </div>
                                    <div>
                                        <p className="text-ui-label text-gray-400 mb-1">Status</p>
                                        <p className="text-sm font-medium text-charcoal">{project.status}</p>
                                    </div>
                                    <div className="col-span-2 mt-2">
                                        <p className="text-ui-label text-gray-400 mb-2">Highlights</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 text-[11px] font-medium text-charcoal-light border border-gray-100">
                                                <CheckCircle size={10} className="text-[#1A71B7]" /> Villa Ready
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 text-[11px] font-medium text-charcoal-light border border-gray-100">
                                                <CheckCircle size={10} className="text-[#1A71B7]" /> 5Y Maint.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-auto">
                                    <button className="w-full py-3.5 bg-[#1C1C1C] text-white text-ui-btn hover:bg-[#1A71B7] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                        View Details
                                        <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-white text-[#1A71B7] border border-[#1A71B7] px-8 py-3.5 text-ui-btn hover:bg-[#1A71B7] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 uppercase tracking-wider font-bold rounded-none group">
                        View All Projects in Chennai
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
