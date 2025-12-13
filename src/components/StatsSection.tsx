import React from 'react';
import { MapPin, Award, FileCheck, Building2, Users, Home, Sun } from 'lucide-react';

const StatsSection: React.FC = () => {
    const stats = [
        { icon: <MapPin size={48} />, count: '13+', label: 'Cities' },
        { icon: <Award size={48} />, count: '13+', label: 'Years of Expertise' },
        { icon: <Award size={48} />, count: '13+', label: 'Awards' },
        { icon: <FileCheck size={48} />, count: '100%', label: 'Clear Documentation\n& Transactions' },
        { icon: <Building2 size={48} />, count: '125+', label: 'Premium Projects' },
        { icon: <Home size={48} />, count: '4,000+', label: 'Acres of land\nDelivered' },
        { icon: <Users size={48} />, count: '20,000+', label: 'Happy Customers' },
        { icon: <Users size={48} />, count: '5 Lakh +', label: 'Trees Planted' },
        { icon: <Sun size={48} />, count: '100%', label: 'Solar Powered\nCities' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        INDIA'S LARGEST PLOTTED REAL ESTATE DEVELOPER
                    </h1>
                    <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        We understand the importance of investing in the house of your dreams – a lifestyle that is unconditional & unrestricted. G Square is India's most trusted plot real estate developer, with every project and property in your favorite metro's most prime & potential addresses.
                    </p>
                </div>

                {/* Stats - Horizontal Scrollable */}
                <div className="relative">
                    <div
                        className="flex gap-8 md:gap-12 overflow-x-auto scroll-smooth pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center flex-shrink-0 group cursor-default">
                                {/* Icon Circle */}
                                <div className="w-28 h-28 md:w-32 md:h-32 bg-[#0091D0] rounded-full flex items-center justify-center text-white mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-[#007AB8]">
                                    {stat.icon}
                                </div>

                                {/* Count */}
                                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    {stat.count}
                                </div>

                                {/* Label */}
                                <div className="text-sm md:text-base text-gray-700 font-medium whitespace-pre-line w-32">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
