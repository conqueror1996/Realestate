import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
    const [activeTab, setActiveTab] = useState('residential');

    return (
        <section className="relative w-full mb-16">
            {/* Background Image with Overlay */}
            <div className="relative h-[400px] md:h-[500px] bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/hero_background_estate_1765609063537.png)',
                    backgroundPosition: 'center'
                }}>
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066A1]/90 to-[#0091D0]/80"></div>
            </div>

            {/* Search Bar Section */}
            <div className="absolute bottom-0 left-0 w-full z-20 transform translate-y-1/2 md:translate-y-0 md:bottom-[-20px]">
                <div className="max-w-[1400px] mx-auto px-4 md:px-0">
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100">
                        {/* Tabs */}
                        <div className="flex border-b border-gray-100">
                            <button
                                className={`flex-1 md:flex-none px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'residential'
                                    ? 'bg-[#0091D0] text-white shadow-inner'
                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                    }`}
                                onClick={() => setActiveTab('residential')}
                            >
                                Residential Projects
                            </button>
                            <button
                                className={`flex-1 md:flex-none px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'commercial'
                                    ? 'bg-[#0091D0] text-white shadow-inner'
                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                    }`}
                                onClick={() => setActiveTab('commercial')}
                            >
                                Commercial Projects
                            </button>
                        </div>

                        {/* Search Form */}
                        <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center">
                            {/* Dropdown */}
                            <div className="w-full md:w-1/4 relative">
                                <select
                                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0091D0] focus:border-transparent transition-all cursor-pointer appearance-none"
                                >
                                    <option>All Zones</option>
                                    <option>Chennai - South</option>
                                    <option>Chennai - North</option>
                                    <option>Coimbatore</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>

                            {/* Search Input */}
                            <div className="w-full md:flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Search by Location or Property Name"
                                    className="w-full h-12 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0091D0] focus:border-transparent transition-all placeholder-gray-400"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>

                            {/* Search Button */}
                            <button className="w-full md:w-auto px-8 h-12 bg-[#FFA500] hover:bg-[#FF9000] text-black font-bold uppercase text-sm tracking-wide rounded shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                                <Search className="w-4 h-4" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
