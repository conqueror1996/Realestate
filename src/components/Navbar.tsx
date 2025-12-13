import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Projects', href: '#' },
        { name: 'About Us', href: '#', hasDropdown: true },
        { name: 'Customer Referral', href: '#' },
        { name: 'Build Assist', href: '#' },
        { name: 'Blogs', href: '#' },
        { name: 'NRI Corner', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center" style={{ height: '70px' }}>
                    {/* Logo */}
                    <div className="flex-shrink-0 py-3">
                        <a href="/" className="block">
                            <img
                                src="https://www.gsquarehousing.com/wp-content/uploads/2023/10/g-square-logo.svg"
                                alt="G Square"
                                style={{ height: '50px' }}
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-600 hover:text-[#0091D0] transition-colors relative"
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        letterSpacing: '0.3px'
                                    }}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <span className="ml-1 text-gray-400">▼</span>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Hamburger Menu Icon (Desktop) */}
                        <button
                            className="ml-8 p-2 text-[#0091D0] hover:bg-blue-50 rounded transition-colors"
                            aria-label="Menu"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-[#0091D0]"
                        aria-label="Toggle menu"
                    >
                        <Menu size={28} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
                        <div className="p-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-100 rounded"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-8 mt-2">
                                <a href="/" onClick={() => setIsOpen(false)} className="block">
                                    <img
                                        src="https://www.gsquarehousing.com/wp-content/uploads/2023/10/g-square-logo.svg"
                                        alt="G Square"
                                        className="h-12"
                                    />
                                </a>
                            </div>

                            <nav className="space-y-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#0091D0] rounded"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
