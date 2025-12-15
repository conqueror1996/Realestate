import React from 'react';
import { Award, Building2, Users, MapPin, FileCheck, Map, TrendingUp } from 'lucide-react';

const StatsSection: React.FC = () => {
    const stats = [
        { Icon: Award, count: '13+', label: 'Years of Expertise' },
        { Icon: Building2, count: '125+', label: 'Premium Projects' },
        { Icon: Users, count: '20,000+', label: 'Happy Customers' },
        { Icon: MapPin, count: '4,000+', label: 'Acres Delivered' },
        { Icon: FileCheck, count: '100%', label: 'Clear Titles' },
        { Icon: Map, count: '6 Cities', label: 'Pan India Presence' },
        { Icon: TrendingUp, count: '200%', label: 'Avg. Appreciation' },
    ];

    return (
        <section className="section-padding bg-white border-b border-border-gray">
            <div className="container-tight">
                {/* Main Heading - Calm Authority */}
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight font-bold">
                        India's largest plotted real estate developer.
                    </h2>
                    <p className="text-body-lg text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed opacity-80">
                        Securing prime addresses for your legacy. We understand the importance of investing in the house of your dreams.
                    </p>
                </div>

                {/* Stats - Centered Flex Layout - Optimized for iPhone 4+ */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 md:gap-x-12 md:gap-y-16 pt-8 md:pt-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group w-[45%] md:w-auto">
                            {/* Icon - Responsive Blue Circle Bubble */}
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#1A71B7] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 ease-out">
                                <stat.Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>

                            {/* Count - Bold & Clear */}
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-1 md:mb-2 whitespace-nowrap">
                                {stat.count}
                            </div>

                            {/* Label - Clean Uppercase */}
                            <div className="text-[10px] md:text-[11px] uppercase tracking-wide-caps text-gray-500 font-bold max-w-[120px] leading-tight">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
