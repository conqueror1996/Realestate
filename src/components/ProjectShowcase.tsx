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
                <div className="flex flex-nowrap overflow-x-auto gap-8 pb-12 px-4 md:justify-center snap-x snap-mandatory scrollbar-hide">
                    {projects.map((project, idx) => (
                        <div key={idx} className="flex-none w-[300px] md:w-[360px] snap-center group select-none flex flex-col bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                            {/* Image Header */}
                            <div className="relative h-[320px] overflow-hidden bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Title Overlay (Simulating the text in the sky from the image) */}
                                <div className="absolute top-8 left-0 w-full text-center px-4">
                                    <h3 className="text-2xl font-serif text-white drop-shadow-md mb-1">
                                        {project.title}
                                    </h3>
                                    <div className="h-[1px] w-12 bg-white/80 mx-auto my-2"></div>
                                    <p className="text-white/90 text-sm font-light drop-shadow-sm tracking-wide">
                                        Shape Your Story Here
                                    </p>
                                </div>
                            </div>

                            {/* Info Body */}
                            <div className="p-6 flex flex-col items-start text-left bg-white">
                                {/* Project Logo Placeholder */}
                                <div className="mb-4">
                                    <h4 className="text-[#1A71B7] font-bold uppercase tracking-tighter leading-none text-lg">
                                        FUTURE GROUP<br />
                                        <span className="text-black text-sm font-light">PROJECT</span>
                                    </h4>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 mb-4 text-charcoal">
                                    <MapPin size={18} className="text-gray-500" />
                                    <span className="font-medium text-[15px]">{project.location}</span>
                                </div>

                                {/* Details */}
                                <div className="space-y-1.5 mb-6 text-[15px] text-charcoal-light">
                                    <p>
                                        <span className="font-bold text-charcoal">Plot Sizes:</span> {project.size}
                                    </p>
                                    <p>
                                        <span className="font-bold text-charcoal">Rate:</span> {project.price}
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <button className="bg-[#1A71B7] text-white px-6 py-2.5 text-sm font-semibold rounded shadow-sm hover:bg-[#155a93] transition-colors duration-300">
                                    Know More
                                </button>
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
