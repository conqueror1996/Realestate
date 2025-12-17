import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Users, Target, ShieldCheck } from 'lucide-react';

const AboutUsPage: React.FC = () => {
    return (
        <div className="font-sans antialiased text-text-gray bg-white">
            <TopBar />
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider drop-shadow-lg">
                        Building Legacies, <br />
                        <span className="text-[#1A71B7] bg-white px-2 mt-2 inline-block rounded-sm">Fulfilling Dreams</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                        We are India's most trusted real estate partner, dedicated to delivering premium living spaces and high-value land investments.
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <section className="py-24 px-6 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1A71B7]/10 rounded-full z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#e31e24]/5 rounded-full z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                            alt="Team meeting"
                            className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-cover"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl rounded-lg border-l-4 border-[#1A71B7] z-20 hidden md:block">
                            <p className="text-4xl font-bold text-[#1A71B7] mb-1">10+</p>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Years of Excellence</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#1A71B7] font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-6 leading-tight">
                            Pioneering the Future of <br /> Real Estate Development
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Established with a vision to redefine the real estate landscape, Future Group has grown to become a symbol of trust and transparency. We specialize in identifying high-growth land corridors and creating villa communities that offer both lifestyle upgrades and exceptional appreciation.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our journey is defined by a relentless pursuit of quality, adherence to strict legal standards, and a customer-centric approach that puts your peace of mind first.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Award className="text-[#e31e24] shrink-0 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold text-[#1C1C1C] mb-1">Award Winning</h5>
                                    <p className="text-sm text-gray-500">Recognized for excellence in design and delivery.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Users className="text-[#1A71B7] shrink-0 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold text-[#1C1C1C] mb-1">Customer First</h5>
                                    <p className="text-sm text-gray-500">Over 5000+ happy families and growing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Impact */}
            <section className="bg-[#1A71B7] py-20 text-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">50+</h3>
                            <p className="text-sm uppercase tracking-widest opacity-80">Projects Completed</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">20M</h3>
                            <p className="text-sm uppercase tracking-widest opacity-80">Sq.ft Developed</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">5K+</h3>
                            <p className="text-sm uppercase tracking-widest opacity-80">Happy Families</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">100%</h3>
                            <p className="text-sm uppercase tracking-widest opacity-80">Legal Clarity</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-16">
                        <h4 className="text-[#1A71B7] font-bold uppercase tracking-widest text-sm mb-4">Our Ethos</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C]">Driven by Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Integrity & Transparency",
                                desc: "We believe in complete transparency. Every document, every title, every promise is verified and clear. No hidden clauses, just trust."
                            },
                            {
                                icon: Target,
                                title: "Strategic Locations",
                                desc: "We don't just pick land; we pick potential. Our projects are located in high-growth corridors ensuring maximum appreciation for your investment."
                            },
                            {
                                icon: Users,
                                title: "Customer Centricity",
                                desc: "You are at the heart of everything we do. From post-sale support to community management, we walk the extra mile for you."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border-b-4 border-transparent hover:border-[#1A71B7] transition-all duration-300 group">
                                <div className="w-16 h-16 bg-[#1A71B7]/10 text-[#1A71B7] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1A71B7] group-hover:text-white transition-colors duration-300">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Note (Reuse or simple version) */}
            <section className="py-20 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#1C1C1C] mb-8">A Note from Our Founder</h2>
                <blockquote className="text-xl md:text-2xl text-gray-600 italic font-serif leading-relaxed mb-8">
                    "Our mission is simple: to make land investment accessible, secure, and profitable for every Indian. We are building not just communities, but the foundation for your future wealth."
                </blockquote>
                <cite className="not-italic font-bold text-[#1A71B7] uppercase tracking-wider block">
                    - Chairman, Future Group
                </cite>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUsPage;
