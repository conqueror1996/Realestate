import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, ArrowUp } from 'lucide-react';

interface FloatingButtonsProps {
    onOpenEnquiry?: () => void;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenEnquiry }) => {
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
            {/* Right Side Floating Buttons (Call & Enquire) */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
                {/* Call Button */}
                <a
                    href="tel:+918939540008"
                    className="bg-[#1A71B7] text-white p-3 rounded-l-md shadow-lg hover:bg-[#155a93] transition-all duration-300 transform hover:-translate-x-1 flex items-center justify-center w-12 h-12"
                    aria-label="Call Us"
                    title="Call Us"
                >
                    <Phone size={20} />
                </a>

                {/* Enquiry Button (Triggers Modal via URL hash or just links to contact for now) */}
                <button
                    onClick={onOpenEnquiry}
                    className="bg-[#1A71B7] text-white p-3 rounded-l-md shadow-lg hover:bg-[#155a93] transition-all duration-300 transform hover:-translate-x-1 flex items-center justify-center w-12 h-12"
                    aria-label="Enquire"
                    title="Enquire Now"
                // In a real app, this might trigger the modal state
                >
                    <Mail size={20} />
                </button>
            </div>

            {/* WhatsApp Button - Bottom Left */}
            <a
                href="https://wa.me/918939540008"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
                aria-label="WhatsApp"
            >
                <div className="relative">
                    <MessageCircle size={32} strokeWidth={2} />
                    {/* Ripple Effect */}
                    <span className="absolute -inset-2 rounded-full border border-[#25D366] opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>

                    {/* Online Dot */}
                    <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-[#25D366]"></span>
                </div>
            </a>

            {/* Scroll to Top Button - Bottom Right */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 w-10 h-10 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 hover:bg-[#1A71B7] hover:text-white hover:border-[#1A71B7] transition-all duration-300 z-40 flex items-center justify-center transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </>
    );
};

export default FloatingButtons;
