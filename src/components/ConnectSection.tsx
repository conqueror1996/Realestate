import React from 'react';

const ConnectSection: React.FC = () => {
    const connections = [
        {
            title: 'Careers',
            role: 'Join the Team',
            description: 'We build extraordinary structures and nurture the growth of our people. Create your legacy with us.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop',
            link: '#'
        },
        {
            title: 'Investors',
            role: 'Grow Wealth',
            description: 'Elevate your portfolio with G Square. Experience the fusion of financial supremacy and visionary partnerships.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop',
            link: '#'
        },
        {
            title: 'Customers',
            role: 'Live Grand',
            description: 'Unlock the gateway to unparalleled living. Discover meticulously crafted properties and innovative design.',
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1000&fit=crop',
            link: '#'
        }
    ];

    return (
        <section className="py-32 bg-[#F5F5F0]">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-serif text-[#1C1C1C] mb-6">
                        Partner With Us
                    </h2>
                    <p className="text-gray-500 font-light tracking-wide uppercase text-sm">
                        Choose your path to excellence
                    </p>
                </div>

                {/* Editorial Columns with Dividers */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {connections.map((item, idx) => (
                        <div
                            key={idx}
                            className={`group relative p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500 hover:bg-white border-gray-300/50 ${idx !== connections.length - 1 ? 'md:border-r border-b md:border-b-0' : ''
                                }`}
                        >
                            {/* Role Label */}
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-2 group-hover:translate-y-0">
                                {item.role}
                            </span>

                            {/* Image */}
                            <div className="w-full aspect-[4/5] overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl font-serif text-[#1C1C1C] mb-4 group-hover:text-amber-700 transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8 max-w-xs opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.description}
                            </p>

                            {/* CTA */}
                            <button className="mt-auto px-8 py-3 bg-transparent border border-[#1C1C1C] text-[#1C1C1C] text-xs font-bold uppercase tracking-widest hover:bg-[#1C1C1C] hover:text-white transition-all duration-300">
                                Start Conversation
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
