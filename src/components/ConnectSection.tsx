import React from 'react';
import { ArrowRight } from 'lucide-react';

const ConnectSection: React.FC = () => {
    const connections = [
        {
            title: 'Careers',
            role: 'Join the Team',
            description: 'We build extraordinary structures and nurture the growth of our people. Create your legacy with us.',
            buttonText: 'See Openings'
        },
        {
            title: 'Investors',
            role: 'Grow Wealth',
            description: 'Elevate your portfolio with G Square. Experience the fusion of financial supremacy and visionary partnerships.',
            buttonText: 'Invest Now'
        },
        {
            title: 'Customers',
            role: 'Live Grand',
            description: 'Unlock the gateway to unparalleled living. Discover meticulously crafted properties and innovative design.',
            buttonText: 'Find Home'
        }
    ];

    return (
        <section className="section-padding bg-[#F2F8FC]">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="mb-6 text-5xl md:text-7xl">
                        Connect With Us
                    </h2>
                    <p className="text-ui-label text-gray-500">
                        Choose your path to excellence
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {connections.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-10 md:p-12 flex flex-col items-center text-center shadow-lg border-t-4 border-[#1A71B7] hover:-translate-y-2 transition-transform duration-300"
                        >
                            {/* Role Label */}
                            <span className="text-ui-label text-[#1A71B7] mb-6">
                                {item.role}
                            </span>

                            {/* Title */}
                            <h3 className="mb-6">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-body-base text-charcoal-light mb-10 max-w-xs">
                                {item.description}
                            </p>

                            {/* CTA Button */}
                            <button className="mt-auto w-full py-4 bg-[#1C1C1C] text-white text-ui-btn hover:bg-[#1A71B7] transition-colors duration-300 flex items-center justify-center gap-2 group">
                                {item.buttonText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
