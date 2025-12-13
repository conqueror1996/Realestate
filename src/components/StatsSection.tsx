import React from 'react';
import { Award, Building2, Users, MapPin, FileCheck } from 'lucide-react';

const StatsSection: React.FC = () => {
    const stats = [
        { icon: <Award size={32} strokeWidth={1} />, count: '13+', label: 'Years of Expertise' },
        { icon: <Building2 size={32} strokeWidth={1} />, count: '125+', label: 'Premium Projects' },
        { icon: <Users size={32} strokeWidth={1} />, count: '20,000+', label: 'Happy Customers' },
        { icon: <MapPin size={32} strokeWidth={1} />, count: '4,000+', label: 'Acres Delivered' },
        { icon: <FileCheck size={32} strokeWidth={1} />, count: '100%', label: 'Clear Titles' },
    ];

    return (
        <section className="section-padding bg-stone-light border-b border-border-gray">
            <div className="container-tight">
                {/* Main Heading - Calm Authority */}
                <div className="text-center mb-24">
                    <h2 className="text-title-lg md:text-title-xl text-charcoal mb-8">
                        India's largest plotted <br className="hidden md:block" /> real estate developer.
                    </h2>
                    <p className="text-body-lg text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed opacity-80">
                        Securing prime addresses for your legacy. We understand the importance of investing in the house of your dreams.
                    </p>
                </div>

                {/* Stats - Grid with Dividers */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 border-t border-charcoal/10 pt-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            {/* Icon - Very Subtle */}
                            <div className="text-charcoal mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                {stat.icon}
                            </div>

                            {/* Count - Serif & Expensive */}
                            <div className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
                                {stat.count}
                            </div>

                            {/* Label - Micro Typography */}
                            <div className="text-xs uppercase tracking-wide-caps text-charcoal-light font-medium opacity-60">
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
