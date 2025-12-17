import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, ArrowUp } from 'lucide-react';

interface FloatingButtonsProps {
    onOpenEnquiry?: () => void;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = () => {
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
            {/* WhatsApp Button - Bottom Right */}
            <a
                href="https://wa.me/918939540008"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
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

            {/* Scroll to Top Button - Positioned above WhatsApp */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-28 right-8 w-10 h-10 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 hover:bg-[#1A71B7] hover:text-white hover:border-[#1A71B7] transition-all duration-300 z-40 flex items-center justify-center transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </>
    );
};

export default FloatingButtons;
