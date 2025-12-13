import React from 'react';

const ConnectSection: React.FC = () => {
    const connections = [
        {
            title: 'As an Employee',
            description: 'We believe in creating a workplace that not only builds extraordinary structures but also nurtures the growth and well-being of our people.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
            link: '#'
        },
        {
            title: 'As an Investor',
            description: 'Elevate your investment stature with G Square, the discerning choice for a fusion of financial supremacy and visionary partnerships.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
            link: '#'
        },
        {
            title: 'As a Customer',
            description: 'Unlock the gateway to unparalleled living with G Square. Discover meticulously crafted properties, innovative design, and a commitment to excellence.',
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
            link: '#'
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                        CONNECT WITH US
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {connections.map((connection, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    {connection.title}
                                </h3>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                                    {connection.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={connection.image}
                                    alt={connection.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Button */}
                            <div className="p-0">
                                <a
                                    href={connection.link}
                                    className="block w-full bg-[#FFA500] text-black font-bold text-center py-4 hover:bg-[#FF8C00] transition-colors"
                                >
                                    Enquire Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
