import React from 'react';
import { Play } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const FounderSection: React.FC = () => {
    const { content } = useContent();
    const leader = content.leadership;

    return (
        <section className="section-padding bg-stone-light text-charcoal border-t border-border-gray">
            <div className="container-tight grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Image Side */}
                <div className="lg:col-span-5 order-2 lg:order-1 relative group cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-none grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                        <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Video Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-none flex items-center justify-center border border-white/50">
                                <Play size={24} fill="white" className="text-white ml-1" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 border-l-2 border-[#1C1C1C] pl-4">
                        <h4 className="text-xl font-sans text-[#1C1C1C] leading-none mb-1">{leader.name}</h4>
                        <p className="text-xs tracking-widest uppercase text-charcoal-light opacity-70">{leader.role}</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-[#1A71B7] mb-8">
                        Leadership Note
                    </span>

                    <blockquote className="text-3xl md:text-5xl font-sans text-[#1C1C1C] leading-tight mb-10 relative">
                        <span className="text-8xl text-gray-200 absolute -top-10 -left-6 -z-10 font-sans">“</span>
                        {leader.message.slice(0, 100)}...
                    </blockquote>

                    <div className="prose prose-lg text-charcoal-light font-light text-base md:text-lg leading-relaxed space-y-6 max-w-2xl mb-12">
                        <p>{leader.message}</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        {leader.signature && (
                            <img src={leader.signature} alt="Signature" className="h-12 opacity-80" />
                        )}
                        <button className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-none hover:border-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 group">
                            <span className="w-8 h-8 rounded-none bg-gray-100 flex items-center justify-center group-hover:bg-white/10 text-[#1C1C1C] group-hover:text-white transition-colors">
                                <Play size={12} fill="currentColor" />
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest">Watch Message</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
