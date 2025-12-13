import React from 'react';

const FounderSection: React.FC = () => {
    return (
        <section className="section-padding bg-stone-light text-charcoal border-t border-border-gray">
            <div className="container-tight grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Image - Styled like a portrait in a magazine */}
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                    <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                            alt="The Founder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-4 text-xs tracking-wide-caps uppercase text-charcoal-light opacity-70">
                        Managing Director & Founder
                    </div>
                </div>

                {/* Content - Editorial Layout */}
                <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
                    <span className="block text-xs font-semibold tracking-wide-caps uppercase text-charcoal opacity-60 mb-6">
                        From the Desk of the Founder
                    </span>

                    <h2 className="text-title-lg md:text-title-xl mb-10 text-charcoal">
                        Turning land <br /> into legacy.
                    </h2>

                    <div className="prose prose-lg text-charcoal-light font-light text-body-lg space-y-6 max-w-2xl">
                        <p>
                            When we began this journey in 2012, our vision was ambitious yet simple: to bring transparency, trust, and accessibility to land ownership. For the first few years, we quietly laid the foundation, building credibility and shaping our customer-first approach to real estate.
                        </p>
                        <p>
                            What started as a vision to redefine land ownership has today grown into South India's largest and most trusted real estate brand. From pioneering organized plotted development to creating secure communities with world-class amenities, we are proud to have reimagined what land and homeownership mean for thousands of families.
                        </p>
                        <p>
                            Land ownership should be premium, accessible, and future-ready for every Indian, wherever in the world they may be. Our story is still being written. And as we look ahead, we do so with one promise: to keep turning land into legacies.
                        </p>
                    </div>

                    <div className="mt-12">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
                            alt="Signature"
                            className="h-16 opacity-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
