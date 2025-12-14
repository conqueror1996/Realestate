import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            name: 'Maharaja',
            rating: 5,
            text: 'We have purchased plot in GSquare jewel. We would like to share our experience with GSquare that it is highly recommended for people who are dreaming to build the house in prime location which means accessibility of hospital, schools, colleges and reachable to shopping centre etc., Also the documents and legal are more reliable. The overall follow up and arrangement till the handover was fully satisfied with GSquare delight team.',
            image: null
        },
        {
            name: 'Rameshwar Kanmane',
            rating: 5,
            text: 'You\'ll never feel that you\'re dealing with a real estate company known to us all these days. Thoroughly professional and friendly teams from pre-sales to registration. Remember investing in a property is not child\'s play. You need to think about the infra, amenities, clear titles, price appreciation etc. Rest assured they\'re covered by GSquare!!! Highly recommended.',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=300&fit=crop'
        },
        {
            name: 'Karthikeyan Maruthai',
            rating: 5,
            text: 'I have always wanted to build my dream house, and when I finally gathered the capital, I was in search of a plot for sale in Chennai. I got in touch with GSquare Housing to find a plot fit for me, and the entire experience has been hassle-free. From the very first meeting and until I purchased their plot, I faced no troubles. They even guided me post the purchase as I started construction. They are undoubtedly the best land promoters in Chennai, South India, and I would suggest them to anyone looking for a promising plot and service.',
            image: null
        },
        {
            name: 'S G Nathan',
            rating: 5,
            text: 'Very nice cool location with 100 of amenities. Lots of general purpose parks and free area. Wide roads, road side parks, UG cables. Solar street lights. Located in L&T bypass main road COIMBATORE city. Plot 1533',
            image: null
        },
        {
            name: 'Aravind S',
            rating: 5,
            text: 'Honestly speaking I don\'t have any idea on the land related documents. I was really afraid how the process of buying a land is going to be. But G square entirely took all the burden on my shoulders, starting from selecting a plot till the registration process. T hey have made it hassle free. Special',
            image: null
        },
        {
            name: 'Deepak Ram',
            rating: 5,
            text: 'Had a good experience with G Square Infinity project. The staffs are very polite',
            image: null
        },
        {
            name: 'Vinisha',
            rating: 5,
            text: 'Over the past two years, I have visited several plot schemes (near Coimbatore). I\'ve spoken to the salespeople and have some background in this. I\'ll do my best to inform you that Real estate agents charge extremely expensive commissions, so I would advise against using them. Regarding brand names, if you want to invest in plots, I\'d recommend G Square. They are a fantastic group of skilled sales representatives who are respectful and are very quick to respond. All the best',
            image: null
        }
    ];

    return (
        <section className="section-padding bg-stone-light">
            <div className="container-tight">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-title-lg text-charcoal mb-4">
                        Trusted by thousands of <br className="hidden md:block" />happy customers.
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-none p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Header with Avatar and Name */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-none flex items-center justify-center flex-shrink-0">
                                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                {testimonial.text}
                            </p>

                            {/* Optional Image */}
                            {testimonial.image && (
                                <div className="mt-4 rounded-none overflow-hidden">
                                    <img
                                        src={testimonial.image}
                                        alt={`${testimonial.name}'s experience`}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
