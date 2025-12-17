import React, { useState, useEffect } from 'react';
import { X, User, Mail } from 'lucide-react';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, mobile, email } = formData;
        const message = `New Enquiry:%0A%0AName: ${name}%0AMobile: ${mobile}%0AEmail: ${email}`;
        const whatsappUrl = `https://wa.me/917021983877?text=${message}`;
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    if (!isVisible && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className={`
                relative bg-white w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row
                transform transition-all duration-300 scale-95
                ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
            `}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/10 md:bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                >
                    <X size={20} className="text-gray-600" />
                </button>

                {/* Left Side - Image/Branding (Desktop Only) */}
                <div className="hidden md:block w-1/2 bg-[#1A71B7] relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                        alt="Premium Property"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                    />
                    <div className="relative z-10 p-12 flex flex-col h-full justify-between text-white">
                        <div>
                            <h3 className="text-3xl font-bold mb-4 font-heading">Find Your <br />Dream Plot</h3>
                            <p className="text-white/90 text-lg font-light">India's Largest Plotted Real Estate Developer</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm font-medium opacity-90">
                                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</span>
                                100% Clear Titles
                            </div>
                            <div className="flex items-center gap-3 text-sm font-medium opacity-90">
                                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</span>
                                5 Year Free Maintenance
                            </div>
                            <div className="flex items-center gap-3 text-sm font-medium opacity-90">
                                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</span>
                                24/7 CCTV Surveillance
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 relative">
                    <div className="text-center md:text-left mb-8">
                        <span className="text-[#1A71B7] font-bold tracking-wider text-xs uppercase mb-2 block">Enquire Now</span>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Instant Call Back</h2>
                        <p className="text-gray-500 text-sm">Fill the form below and our experts will contact you shortly.</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1A71B7] transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1A71B7] focus:ring-1 focus:ring-[#1A71B7] transition-all"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                <span className="text-gray-500 font-medium text-sm">+91</span>
                                <div className="h-4 w-[1px] bg-gray-300"></div>
                            </div>
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-full pl-16 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1A71B7] focus:ring-1 focus:ring-[#1A71B7] transition-all"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                required
                            />
                        </div>

                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1A71B7] transition-colors" size={20} />
                            <input
                                type="email"
                                placeholder="Email Address (Optional)"
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1A71B7] focus:ring-1 focus:ring-[#1A71B7] transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <button className="w-full bg-[#1A71B7] text-white font-bold py-4 rounded-sm uppercase tracking-wider hover:bg-[#155a93] transition-colors shadow-lg shadow-blue-900/10 mt-2">
                            Submit Enquiry
                        </button>

                        <p className="text-[10px] text-gray-400 text-center mt-4">
                            By submitting this form, you authorize us to contact you via Call/SMS/WhatsApp.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryModal;
