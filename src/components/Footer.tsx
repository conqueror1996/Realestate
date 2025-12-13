import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
    const [openOffice, setOpenOffice] = useState<string | null>(null);
    const [openSection, setOpenSection] = useState<string | null>(null);

    const offices = [
        { name: 'Chennai - Registered Office', locations: [] },
        { name: 'Chennai - Corporate Office', locations: [] },
        { name: 'Chennai - Corporate Office', locations: [] },
        { name: 'Coimbatore - Zonal Office', locations: [] },
        { name: 'Hyderabad - Zonal Office', locations: [] },
        { name: 'Trichy- Zonal Office', locations: [] },
        { name: 'Mysuru- Zonal Office', locations: [] },
    ];

    const residentialPlots = {
        'South Chennai': ['Anna Nagar', 'Adyar', 'Velachery'],
        'North Chennai': ['Puzhal', 'Redhills', 'Thiruvallur'],
        'Rest of Chennai': ['Tambaram', 'Chromepet', 'Pallavaram'],
        'Hyderabad': ['Kompally', 'Bachupally'],
        'Trichy': ['Samayapuram', 'Thuvakudi'],
        'Myuru': ['Mysore Road'],
        'Coimbatore': ['Saravanampatti', 'Thondamuthur'],
        'Hosur': ['Denkanikottai'],
        'Other Locations': ['Bangalore', 'Pune']
    };

    const commercialPlots = {
        'Chennai': ['OMR', 'GST Road'],
        'ECR': ['East Coast Road'],
        'OMB': ['Old Mahabalipuram Road'],
        'Trichy': ['Trichy Main'],
        'Coimbatore': ['Coimbatore Main']
    };

    const toggleOffice = (office: string) => {
        setOpenOffice(openOffice === office ? null : office);
    };

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className="bg-[#3a3a3a] text-white">
            {/* Our Offices Section */}
            <div className="bg-[#4a4a4a] py-8">
                <div className="max-w-[1400px] mx-auto px-4">
                    <h3 className="text-xl font-bold mb-6 text-center">OUR OFFICES</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {offices.map((office, idx) => (
                            <div key={idx}>
                                <button
                                    onClick={() => toggleOffice(office.name)}
                                    className="w-full flex items-center justify-between text-left text-sm py-2 px-3 bg-[#3a3a3a] rounded hover:bg-[#2a2a2a] transition-colors"
                                >
                                    <span>{office.name}</span>
                                    <ChevronDown size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Residential & Commercial Plots */}
            <div className="py-12 border-b border-gray-600">
                <div className="max-w-[1400px] mx-auto px-4">
                    {/* Residential Plots */}
                    <div className="mb-10">
                        <h3 className="text-lg font-bold mb-6">RESIDENTIAL PLOTS</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4">
                            {Object.entries(residentialPlots).map(([location, areas]) => (
                                <div key={location}>
                                    <button
                                        onClick={() => toggleSection(`res-${location}`)}
                                        className="flex items-center gap-2 text-sm font-medium mb-2 hover:text-[#0091D0] transition-colors"
                                    >
                                        {location}
                                        <ChevronDown size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Commercial Plots */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">COMMERCIAL PLOTS</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4">
                            {Object.entries(commercialPlots).map(([location, areas]) => (
                                <div key={location}>
                                    <button
                                        onClick={() => toggleSection(`com-${location}`)}
                                        className="flex items-center gap-2 text-sm font-medium mb-2 hover:text-[#0091D0] transition-colors"
                                    >
                                        {location}
                                        <ChevronDown size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="py-8">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
                        {/* Logo */}
                        <div>
                            <img
                                src="https://www.gsquarehousing.com/wp-content/uploads/2023/10/g-square-logo.svg"
                                alt="G Square"
                                className="h-12 brightness-0 invert mb-4"
                            />
                        </div>

                        {/* Column 1 */}
                        <div>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Overview</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Seller's Spot</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Awards</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">CSR</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">News & Media</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Built - To - Suit</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Investor Page</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Customer Referral</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Build Assist</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Testimonials</a></li>
                                <li><a href="#" className="hover:text-[#0091D0] transition-colors">Employee Life</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h4 className="text-sm font-semibold mb-4">Follow Us On</h4>
                            <div className="flex gap-3">
                                <a href="#" className="w-8 h-8 bg-[#0091D0] rounded flex items-center justify-center hover:bg-[#007AB8] transition-colors">
                                    <Facebook size={16} />
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#0091D0] rounded flex items-center justify-center hover:bg-[#007AB8] transition-colors">
                                    <Twitter size={16} />
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#0091D0] rounded flex items-center justify-center hover:bg-[#007AB8] transition-colors">
                                    <Instagram size={16} />
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#0091D0] rounded flex items-center justify-center hover:bg-[#007AB8] transition-colors">
                                    <Linkedin size={16} />
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#0091D0] rounded flex items-center justify-center hover:bg-[#007AB8] transition-colors">
                                    <Youtube size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center pt-6 border-t border-gray-600">
                        <p className="text-xs text-gray-400">
                            COPYRIGHTS © 2025. ALL RIGHTS RESERVED. <a href="#" className="hover:text-[#0091D0]">PRIVACY POLICY</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition-all z-40 flex items-center justify-center"
                aria-label="Scroll to top"
            >
                <ChevronUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;
