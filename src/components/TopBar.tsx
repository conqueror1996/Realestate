import React from 'react';

const TopBar: React.FC = () => {
    return (
        <div className="bg-charcoal text-white py-3 text-[11px] md:text-xs font-medium tracking-wide-caps relative z-50 overflow-hidden border-b border-charcoal-light">
            <div className="max-w-[1920px] mx-auto px-4 flex justify-center items-center">
                <div className="animate-marquee whitespace-nowrap opacity-90">
                    <span className="uppercase">ENQUIRE FOR PRIVACY - +91-89395 40008 | EXCLUSIVE VILLA PLOTS AVAILABLE FOR VIEWING</span>
                </div>
            </div>
        </div>
    );
};
export default TopBar;
