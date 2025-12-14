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
        <section className="py-24 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] mb-4">
                        Curated Collections
                    </h2>
                    <p className="text-gray-500 font-light max-w-2xl mx-auto">
                        Handpicked locations offering the perfect blend of connectivity, appreciation, and lifestyle.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white p-1 rounded-full shadow-sm border border-gray-100">
                        {['Mumbai', 'Navi Mumbai', 'Mumbai 3.0'].map((city) => (
                            <button
                                key={city}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === city.toLowerCase().replace(' ', '_')
                                    ? 'bg-[#0091D0] text-white shadow-md'
                                    : 'text-gray-500 hover:text-[#0091D0] hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveTab(city.toLowerCase().replace(' ', '_'))}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <div className="flex flex-nowrap overflow-x-auto gap-8 pb-12 px-4 md:justify-center snap-x scrollbar-hide">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group min-w-[85vw] md:min-w-[380px] flex-shrink-0 snap-center bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                            {/* Image Header */}
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-charcoal">
                                    {project.status}
                                </div>
                                <div className="absolute top-3 right-3 z-10 bg-[#0091D0] text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                                    {project.idealFor}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Info Body */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <div className="flex items-start justify-between mb-1">
                                        <h3 className="text-xl font-serif text-[#1C1C1C] leading-tight group-hover:text-[#0091D0] transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
                                        <MapPin size={12} className="text-gray-400" />
                                        <a href="#" className="hover:underline">{project.location}</a>
                                    </div>
                                </div>

                                {/* Decision Data Grid */}
                                <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-gray-100 pt-4 mb-6">
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Plot Size</p>
                                        <p className="text-sm font-semibold text-gray-800">{project.size}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Price Range</p>
                                        <p className="text-sm font-bold text-[#0091D0]">{project.price}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">Highlights</p>
                                        <div className="flex gap-2">
                                            <span className="inline-flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-100">
                                                <CheckCircle size={10} className="text-green-500" /> Villa Ready
                                            </span>
                                            <span className="inline-flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-100">
                                                <CheckCircle size={10} className="text-green-500" /> 5 Years Maint.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-auto">
                                    <button className="w-full py-3 border border-[#0091D0] text-[#0091D0] font-bold text-xs uppercase tracking-widest rounded hover:bg-[#0091D0] hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                                        View Details
                                        <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="text-[#0091D0] font-bold text-sm hover:underline underline-offset-4">
                        View All Projects in Chennai →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
