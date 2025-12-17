import { useContent } from '../context/ContentContext';

interface ConnectSectionProps {
    onOpenEnquiry?: () => void;
}

const ConnectSection: React.FC<ConnectSectionProps> = ({ onOpenEnquiry }) => {
    const { content } = useContent();
    const config = content.connect;

    const connections = [
        // ... (connection items remain same)
        {
            title: 'As an Employee',
            description: 'We believe in creating a workplace that not only builds extraordinary structures but also nurtures the growth and well-being of our people.',
            buttonText: 'Enquire Now',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'As an Investor',
            description: 'Elevate your investment stature with G Square, the discerning choice for a fusion of financial supremacy and visionary partnerships.',
            buttonText: 'Enquire Now',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'As a Customer',
            description: 'Unlock the gateway to unparalleled living with G Square. Discover meticulously crafted properties, innovative design, and a commitment to excellence.',
            buttonText: 'Enquire Now',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section
            id="contact"
            className="section-padding pt-0 md:pt-0 bg-white bg-cover bg-center relative"
            style={config.backgroundImage ? { backgroundImage: `url(${config.backgroundImage})` } : {}}
        >
            {/* ... (rest of render) */}
            {config.backgroundImage && <div className="absolute inset-0 bg-white/90"></div>}

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 pt-12 md:pt-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C] uppercase tracking-wide">
                        {config.title}
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg">{config.subtitle}</p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {connections.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Title */}
                            <h3 className="text-2xl font-medium text-[#1C1C1C] mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-body-base text-gray-600 mb-8 leading-relaxed max-w-sm mx-auto min-h-[80px]">
                                {item.description}
                            </p>

                            {/* Image */}
                            <div className="w-full aspect-video overflow-hidden mb-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={onOpenEnquiry}
                                className="w-full py-4 bg-[#1A71B7] text-white font-semibold text-lg hover:bg-[#1C1C1C] transition-all duration-300 rounded-sm"
                            >
                                {item.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
