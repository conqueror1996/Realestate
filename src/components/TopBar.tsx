import React from 'react';

const TopBar: React.FC = () => {
    return (
        <div className="bg-[#0091D0] text-white py-2 text-[11px] md:text-xs font-semibold tracking-wide relative z-50 overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 flex justify-center items-center">
                <div className="animate-marquee whitespace-nowrap">
                    <span className="uppercase">ENQUIRE NOW FOR A FREE SITE VISIT - +91-89395 40008 | BOOK A VILLA PLOT THIS CHRISTMAS & NEW YEAR AND ENJOY 50% OFF ON STAMP DUTY CHARGES</span>
                </div>
            </div>
        </div>
    );
};
export default TopBar;
