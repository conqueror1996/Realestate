import React from 'react';

const ValueSection: React.FC = () => {
    const values = [
        {
            title: 'World Class\nAmenities',
            description: 'Residents of G Square\'s plot developments enjoy a host of world-class amenities, ranging from state-of-the-art fitness centers and swimming pools to meticulously landscaped gardens.',
            image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop'
        },
        {
            title: 'Freedom to Design\nYour Dream Home',
            description: 'G Square offers not just plots, but a platform to create your homes the way you always envisioned. We provide professional expertise to enhance functionality and aesthetics.',
            image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop'
        },
        {
            title: 'Prime\nLocation',
            description: 'We offer plots right in the heart of the city, turning them into vibrant parts of urban living. We are reimagining urban living, one city-centric plot at a time.',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop'
        },
        {
            title: 'Exceptional\nAppreciation',
            description: 'Our commitment to selecting prime locations and fostering comprehensive developments around our projects sets the stage for remarkable asset appreciation.',
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop'
        },
        {
            title: 'Safe & Secure\nCommunity',
            description: 'A secure community ensures safety through effective law enforcement, community involvement, well-designed infrastructure, and coordinated emergency responses.',
            image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop'
        }
    ];

    return (
        <section className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")' }}>
            {/* Parallax Overlay - Dark & Cinematic */}
            <div className="absolute inset-0 bg-[#0F0F0F]/90 backdrop-blur-[1px]"></div>

            <div className="relative z-10 container-tight">
                {/* Header - Editorial Style */}
                <div className="text-center mb-20 scroll-mt-20">
                    <h2 className="text-title-lg md:text-title-xl text-white mb-6">
                        How we add value<br />to your living.
                    </h2>
                    <div className="w-px h-16 bg-white/20 mx-auto"></div>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((item, idx) => (
                        <div key={idx} className="group bg-[#1a1a1a] border border-white/5 p-4 rounded-xl hover:bg-[#252525] transition-all duration-500 hover:-translate-y-2">
                            {/* Image Wrapper */}
                            <div className="relative h-64 overflow-hidden rounded-lg mb-8">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-4">
                                <h3 className="text-2xl font-sans text-white mb-4 whitespace-pre-line leading-tight group-hover:text-stone-200">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                                    {item.description}
                                </p>
                                <button className="text-[#1A71B7] text-sm font-medium tracking-wider uppercase flex items-center gap-2 group/link hover:text-[#007AB8] transition-colors">
                                    Know More
                                    <span className="text-lg transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueSection;
