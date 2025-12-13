import React from 'react';

const FounderSection: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="bg-gradient-to-r from-[#0066A1] to-[#0091D0] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <div className="p-8 md:p-12 lg:p-16 text-white">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                                FROM OUR FOUNDER'S DESK
                            </h2>

                            <div className="space-y-6 text-sm md:text-base leading-relaxed">
                                <p className="font-semibold">
                                    Dear G Square Family,
                                </p>

                                <p>
                                    When we began this journey in 2012, our vision was ambitious yet simple, of bringing transparency, trust, and accessibility to land ownership. For the first few years, we quietly laid the foundation, building credibility and shaping our customer first approach to real estate.
                                </p>

                                <p>
                                    What started as a vision to redefine land ownership has today grown into South India's largest and most trusted real estate brand. From pioneering organized plotted development to creating secure communities with world-class amenities, we are proud to have reimagined what land and homeownership mean for thousands of families.
                                </p>

                                <p>
                                    Since then, our journey has been transformative. Together, we've delivered over 4,000+ acres across 13+ cities, and welcomed 20,000+ families into our community. With every project, we've not just created homes, but sparked land appreciation, fuelled infrastructure growth, and unlocked new opportunities for development across South India.
                                </p>

                                <p>
                                    What makes me proud is not only the scale of what we've achieved, but the shared belief that drives us all. Land ownership should be premium, accessible, and future-ready for every Indian, wherever in the world they may be.
                                </p>

                                <p>
                                    This journey has been possible only because of the trust our customers have placed in us. To every family who has believed in us, I extend my deepest gratitude. You are the reason we continue to push boundaries and raise the bar for what real estate can achieve.
                                </p>

                                <p className="font-semibold">
                                    Our story is still being written. And as we look ahead, we do so with one promise: <span className="font-bold">to keep turning land into legacies.</span>
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-full min-h-[500px] lg:min-h-[700px]">
                            <div className="absolute inset-0 flex items-end justify-center lg:justify-end">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop"
                                    alt="Founder"
                                    className="h-full w-auto object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
