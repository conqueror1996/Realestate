import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navGroups = [
        {
            title: 'Projects',
            items: ['Mumbai', 'Navi Mumbai', 'Mumbai 3.0']
        },
        {
            title: 'About Us',
            items: []
        },

        {
            title: 'Contact',
            items: []
        }
    ];

    const getLink = (groupTitle: string, item: string) => {
        if (groupTitle === 'Projects') {
            const slug = item.toLowerCase().replace(' ', '_').replace('.', '_');
            return `/projects/${slug}`;
        }
        if (item === 'About Us') return '/about-us';
        return '#';
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="block">
                            <img
                                src="/future_group_logo.png"
                                alt="Future Group"
                                className="h-10 md:h-12"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navGroups.map((group) => (
                            <div
                                key={group.title}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(group.title)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-[#1A71B7] transition-colors py-8 tracking-wide uppercase"
                                    onClick={() => {
                                        if (group.title === 'About Us') {
                                            window.location.href = '/about-us';
                                        }
                                        if (group.title === 'Contact') {
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }
                                    }}
                                >
                                    {group.title}
                                    {group.items.length > 0 && (
                                        <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === group.title ? 'rotate-180' : ''}`} />
                                    )}
                                </button>

                                {/* Dropdown Menu */}
                                {group.items.length > 0 && (
                                    <div className={`absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-[#1A71B7] rounded-none overflow-hidden transition-all duration-300 transform origin-top ${activeDropdown === group.title ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                                        <div className="py-2">
                                            {group.items.map((item) => (
                                                <a
                                                    key={item}
                                                    href={getLink(group.title, item)}
                                                    className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1A71B7] transition-colors"
                                                >
                                                    {item}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-6">

                        <a
                            href="#"
                            className="bg-[#1A71B7] text-white px-6 py-3 rounded-none text-sm font-bold uppercase tracking-wider hover:bg-[#007bb5] transition-colors shadow-lg shadow-blue-200"
                        >
                            Enquire
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-800 hover:text-[#1A71B7]"
                        aria-label="Toggle menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />

            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 p-2 text-gray-500 hover:text-red-500 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="mb-10 mt-2">
                        <img
                            src="/future_group_logo.png"
                            alt="Future Group"
                            className="h-10 md:h-12"
                        />
                    </div>

                    <div className="space-y-6">
                        {navGroups.map((group) => (
                            <div key={group.title}>
                                {group.items.length > 0 ? (
                                    <>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">
                                            {group.title}
                                        </h4>
                                        <div className="space-y-2">
                                            {group.items.map((item) => (
                                                <a
                                                    key={item}
                                                    href={getLink(group.title, item)}
                                                    className="block py-2 text-gray-800 hover:text-[#1A71B7] text-sm font-medium"
                                                >
                                                    {item}
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => {
                                            if (group.title === 'About Us') {
                                                window.location.href = '/about-us';
                                            } else if (group.title === 'Contact') {
                                                setIsOpen(false);
                                                const contactSection = document.getElementById('contact');
                                                if (contactSection) {
                                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }
                                        }}
                                        className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2 hover:text-[#1A71B7] w-full text-left"
                                    >
                                        {group.title}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100">
                        <a href="#" className="block w-full bg-[#1A71B7] text-white text-center py-4 rounded-none font-bold uppercase tracking-wider text-sm shadow-lg">
                            Enquire Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
