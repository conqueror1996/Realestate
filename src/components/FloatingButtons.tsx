import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, ArrowUp } from 'lucide-react';

const FloatingButtons: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show scroll-to-top button after scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* Unified Right Side Floating Dock */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0 bg-white shadow-2xl rounded-l-2xl overflow-hidden border border-gray-100">

                {/* Call Button */}
                <a
                    href="tel:+918939540008"
                    className="group relative p-4 hover:bg-gray-50 transition-colors flex items-center justify-center border-b border-gray-100 w-16 h-16"
                    aria-label="Call Us"
                >
                    <Phone size={22} className="text-gray-700 group-hover:text-[#1A71B7] transition-colors" />
                    {/* Tooltip */}
                    <span className="absolute right-full mr-2 bg-black text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        Call Us
                    </span>
                </a>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/918939540008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 hover:bg-gray-50 transition-colors flex items-center justify-center border-b border-gray-100 w-16 h-16"
                    aria-label="WhatsApp"
                >
                    <div className="relative">
                        <MessageCircle size={22} className="text-gray-700 group-hover:text-[#25D366] transition-colors" />
                        {/* Online Notification Dot */}
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
                        </span>
                    </div>
                    <span className="absolute right-full mr-2 bg-[#25D366] text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        WhatsApp
                    </span>
                </a>

                {/* Enquiry / Chat Button */}
                <button
                    className="group relative p-4 hover:bg-gray-50 transition-colors flex items-center justify-center w-16 h-16"
                    aria-label="Enquire Now"
                >
                    <Mail size={22} className="text-gray-700 group-hover:text-[#1A71B7] transition-colors" />
                    <span className="absolute right-full mr-2 bg-[#1A71B7] text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        Enquire
                    </span>
                </button>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 hover:border-[#1A71B7] hover:text-[#1A71B7] transition-all duration-300 z-40 flex items-center justify-center transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </>
    );
};

export default FloatingButtons;
