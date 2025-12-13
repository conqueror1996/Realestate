import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingButtons: React.FC = () => {
    const [showChatPopup, setShowChatPopup] = useState(true);

    return (
        <>
            {/* Right Side Floating Buttons */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
                {/* Phone Button */}
                <a
                    href="tel:+918939540008"
                    className="bg-[#0091D0] text-white p-4 rounded-l-lg shadow-lg hover:pr-6 transition-all duration-300 flex items-center justify-center"
                    aria-label="Call us"
                >
                    <Phone size={24} />
                </a>

                {/* Message/Enquiry Button */}
                <button
                    className="bg-[#0091D0] text-white p-4 rounded-l-lg shadow-lg hover:pr-6 transition-all duration-300 flex items-center justify-center"
                    aria-label="Send message"
                >
                    <MessageCircle size={24} />
                </button>
            </div>

            {/* Bottom Left WhatsApp Button */}
            <div className="fixed bottom-6 left-6 z-50">
                <a
                    href="https://wa.me/918939540008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="WhatsApp"
                >
                    <MessageCircle size={32} fill="white" />
                </a>
            </div>

            {/* Bottom Right Chat Widget */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="relative">
                    {/* Chat Popup */}
                    {showChatPopup && (
                        <div className="absolute bottom-full right-0 mb-3 bg-white rounded-lg shadow-2xl p-4 w-64 animate-bounce">
                            <button
                                onClick={() => setShowChatPopup(false)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                            >
                                <X size={14} />
                            </button>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                                <div>
                                    <p className="font-bold text-sm text-gray-900 mb-1">We're Online!</p>
                                    <p className="text-xs text-gray-600">How may I assist you today?</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Chat Button */}
                    <button
                        className="w-16 h-16 bg-[#0091D0] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                        aria-label="Chat with us"
                    >
                        <MessageCircle size={28} />
                    </button>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-24 right-6 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all z-40 flex items-center justify-center"
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </>
    );
};

export default FloatingButtons;
