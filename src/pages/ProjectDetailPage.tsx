import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import EnquiryModal from '../components/EnquiryModal';
import { MapPin, CheckCircle2, Download, Phone, Car, School, Hospital, ShoppingBag } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    // Mock data based on the route ID - in a real app this would be a fetch
    // Defaulting to "Northern Crown" data for demo purposes since that was the user's reference
    const project = {
        title: "Northern Crown",
        location: "Puzhal, Chennai",
        type: "Premium Residential Plots",
        price: "₹45L Onwards",
        status: "RERA Approved | Ready to Construct",
        reraId: "TN/02/Layout/0123/2024",
        heroImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&h=800&fit=crop",
        description: "Experience the royal life at Northern Crown. Located in the rapidly expanding corridor of Puzhal, this project offers the perfect blend of connectivity and serenity. With 100+ amenities and world-class infrastructure, it is the ideal place to build your dream home.",
        highlights: [
            "2 Minutes from Puzhal Junction",
            "500+ Premium Villa Plots",
            "24x7 CCTV Surveillance",
            "Blacktop Roads & Street Lights",
            "5 Years Free Maintenance"
        ],
        configurations: [
            { type: "Villa Plot", size: "600 Sq.ft", price: "₹45 Lakhs" },
            { type: "Villa Plot", size: "1200 Sq.ft", price: "₹90 Lakhs" },
            { type: "Villa Plot", size: "2400 Sq.ft", price: "₹1.80 Cr" },
        ],
        amenities: [
            { icon: CheckCircle2, label: "Gated Community" },
            { icon: CheckCircle2, label: "Kids Play Area" },
            { icon: CheckCircle2, label: "Landscaped Gardens" },
            { icon: CheckCircle2, label: "Jogging Track" },
            { icon: CheckCircle2, label: "Outdoor Gym" },
            { icon: CheckCircle2, label: "Yoga Deck" },
        ],
        locationAdvantages: [
            { icon: School, title: "Schools", items: ["Velammal Global School (5 min)", "Don Bosco (10 min)"] },
            { icon: Hospital, title: "Hospitals", items: ["Apollo Hospitals (15 min)", "Kauvery Hospital (12 min)"] },
            { icon: Car, title: "Connectivity", items: ["Puzhal Metro (2 min)", "Chennai Bypass (5 min)"] },
            { icon: ShoppingBag, title: "Entertainment", items: ["VR Mall (20 min)", "Spectrum Mall (15 min)"] }
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
        ]
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="font-sans antialiased bg-white text-gray-800">
            <Navbar />

            {/* HERRO SECTION */}
            <div className="relative h-[80vh] min-h-[600px] flex items-end pb-12 md:pb-24">
                <div className="absolute inset-0">
                    <img
                        src={project.heroImage}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full flex flex-col md:flex-row items-end md:items-end justify-between gap-8">
                    <div className="text-white max-w-2xl">
                        <div className="inline-block bg-[#1A71B7] px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 rounded-sm">
                            {project.status}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-none mb-4 drop-shadow-2xl">
                            {project.title}
                        </h1>
                        <div className="flex items-center gap-2 text-lg md:text-xl text-white/90 mb-6">
                            <MapPin size={24} className="text-[#e31e24]" />
                            {project.location}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm md:text-base font-light opacity-90">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-400" /> RERA ID: {project.reraId}
                            </div>
                        </div>
                    </div>

                    {/* Quick Enquiry Form / Card */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl w-full md:w-[360px] hidden md:block border-t-4 border-[#1A71B7]">
                        <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 uppercase">Interested?</h3>
                        <p className="text-sm text-gray-500 mb-6">Download the brochure & get price sheet.</p>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                            <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#1A71B7]" />
                            <input type="text" placeholder="Mobile Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#1A71B7]" />
                            <button type="submit" className="w-full bg-[#1A71B7] text-white font-bold py-3 rounded hover:bg-[#155a93] transition-colors uppercase tracking-wider text-sm shadow-lg">
                                Download Brochure
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* STICKY SUB-NAV */}
            <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm hidden md:block">
                <div className="max-w-[1400px] mx-auto px-6 flex items-center gap-8 overflow-x-auto">
                    {['overview', 'price', 'amenities', 'location', 'gallery'].map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${activeSection === section ? 'border-[#1A71B7] text-[#1A71B7]' : 'border-transparent text-gray-500 hover:text-black'}`}
                        >
                            {section}
                        </button>
                    ))}
                    <div className="ml-auto flex items-center gap-4 py-2">
                        <button onClick={() => setIsModalOpen(true)} className="bg-[#25D366] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-[#128C7E] transition-colors">
                            <Phone size={16} /> WhatsApp
                        </button>
                        <button onClick={() => setIsModalOpen(true)} className="bg-[#1C1C1C] text-white px-4 py-2 rounded text-sm font-bold uppercase tracking-wide hover:bg-black transition-colors">
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>

            {/* CONTENT SECTIONS */}
            <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row gap-12">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-2/3 space-y-20">

                    {/* OVERVIEW */}
                    <section id="overview" className="scroll-mt-40">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-6 uppercase tracking-wide border-l-4 border-[#1A71B7] pl-4">
                            Project Overview
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {project.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded border border-gray-100">
                                    <CheckCircle2 size={20} className="text-[#1A71B7] mt-0.5 shrink-0" />
                                    <span className="font-medium text-gray-800">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PRICE / CONFIG */}
                    <section id="price" className="scroll-mt-40">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-6 uppercase tracking-wide border-l-4 border-[#1A71B7] pl-4">
                            Price & Configurations
                        </h2>
                        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#1C1C1C] text-white">
                                    <tr>
                                        <th className="p-4 font-bold uppercase text-sm">Type</th>
                                        <th className="p-4 font-bold uppercase text-sm">Size (Sq.ft)</th>
                                        <th className="p-4 font-bold uppercase text-sm">Price</th>
                                        <th className="p-4 font-bold uppercase text-sm text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {project.configurations.map((config, idx) => (
                                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                            <td className="p-4 font-medium">{config.type}</td>
                                            <td className="p-4 text-gray-600">{config.size}</td>
                                            <td className="p-4 font-bold text-[#1A71B7]">{config.price}</td>
                                            <td className="p-4 text-center">
                                                <button
                                                    onClick={() => setIsModalOpen(true)}
                                                    className="bg-[#1A71B7] text-white px-4 py-1.5 text-xs font-bold uppercase rounded hover:bg-[#155a93] transition-colors"
                                                >
                                                    Get Cost Sheet
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* AMENITIES */}
                    <section id="amenities" className="scroll-mt-40">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-6 uppercase tracking-wide border-l-4 border-[#1A71B7] pl-4">
                            Amenities
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {project.amenities.map((amenity, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow text-center">
                                    <div className="w-12 h-12 bg-blue-50 text-[#1A71B7] rounded-full flex items-center justify-center mb-3">
                                        <amenity.icon size={24} />
                                    </div>
                                    <span className="font-semibold text-gray-800">{amenity.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* LOCATION MAP */}
                    <section id="location" className="scroll-mt-40">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-6 uppercase tracking-wide border-l-4 border-[#1A71B7] pl-4">
                            Location Advantage
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {project.locationAdvantages.map((adv, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <adv.icon className="text-[#e31e24]" size={20} />
                                        <h4 className="font-bold text-lg text-[#1C1C1C]">{adv.title}</h4>
                                    </div>
                                    <ul className="space-y-2 ml-7">
                                        {adv.items.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm list-disc">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {/* Map Placeholder */}
                        <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Chennai&zoom=12&size=800x400&sensor=false')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-white px-6 py-3 rounded-full shadow-xl font-bold text-[#1A71B7] hover:scale-105 transition-transform">
                                    View on Google Maps
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* GALLERY */}
                    <section id="gallery" className="scroll-mt-40">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-6 uppercase tracking-wide border-l-4 border-[#1A71B7] pl-4">
                            Gallery
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {project.images.map((img, idx) => (
                                <div key={idx} className="relative aspect-[4/3] group overflow-hidden rounded-lg cursor-pointer">
                                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* RIGHT SIDEBAR (STICKY ON DESKTOP) */}
                <div className="w-full lg:w-1/3">
                    <div className="sticky top-40 space-y-6">
                        {/* Form Card */}
                        <div className="bg-[#1C1C1C] text-white p-8 rounded-lg shadow-2xl">
                            <h3 className="text-2xl font-bold mb-2 text-center uppercase">Get Best Quote</h3>
                            <p className="text-gray-400 text-center text-sm mb-6">Fill the form to get exclusive offers.</p>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                                <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-[#1A71B7] placeholder:text-gray-500" />
                                <input type="text" placeholder="Mobile Number" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-[#1A71B7] placeholder:text-gray-500" />
                                <input type="email" placeholder="Email ID" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-[#1A71B7] placeholder:text-gray-500" />
                                <button type="submit" className="w-full bg-[#1A71B7] text-white font-bold py-3 rounded hover:bg-[#155a93] transition-colors uppercase tracking-wider text-sm">
                                    Get Callback
                                </button>
                            </form>
                        </div>

                        {/* Brochure Card */}
                        <div className="bg-[#e31e24] p-6 rounded-lg text-white text-center cursor-pointer hover:bg-red-700 transition-colors" onClick={() => setIsModalOpen(true)}>
                            <Download size={32} className="mx-auto mb-3" />
                            <h4 className="font-bold text-xl uppercase mb-1">Download Brochure</h4>
                            <p className="text-white/80 text-sm">Get floor plans & layout details.</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
            <FloatingButtons onOpenEnquiry={() => setIsModalOpen(true)} />
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ProjectDetailPage;
