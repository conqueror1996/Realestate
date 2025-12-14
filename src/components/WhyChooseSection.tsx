import React from 'react';
import { ShieldCheck, Award, TreePine, Sun } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck size={48} />,
        title: '100% Legal',
        desc: 'Clear Documentation & Transactions with DTCP & CMDA approvals'
    },
    {
        icon: <Award size={48} />,
        title: '13+ Awards',
        desc: 'Recognized excellence in real estate development'
    },
    {
        icon: <TreePine size={48} />,
        title: '5 Lakh+ Trees',
        desc: 'Committed to green living and environmental sustainability'
    },
    {
        icon: <Sun size={48} />,
        title: '100% Solar Powered',
        desc: 'All our cities are powered by renewable solar energy'
    },
];

const WhyChooseSection: React.FC = () => {
    return (
        <section className="section-padding bg-stone-light">
            <div className="container-tight">
                {/* Section Header */}
                <div className="text-center mb-20 scroll-mt-20">
                    <h2 className="text-title-lg text-charcoal mb-6">
                        Why choose G Square?
                    </h2>
                    <p className="text-body-lg text-charcoal-light font-light opacity-80 max-w-2xl mx-auto">
                        We are committed to delivering excellence and building trust with every square foot.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {features.map((feature, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-[#0091D0]/10 rounded-none flex items-center justify-center text-[#0091D0] group-hover:bg-[#0091D0] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
