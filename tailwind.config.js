/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Luxury Palette
                'charcoal': '#1C1C1C',
                'charcoal-light': '#333333',
                'stone-light': '#F4F4F2',
                'luxury-white': '#FFFFFF',
                'border-gray': '#E5E5E5',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Libre Baskerville', 'serif'],
            },
            letterSpacing: {
                'tight-headings': '-0.02em',
                'wide-caps': '0.12em', // Increased for air
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1440px',
                },
            },
            // Extend standard sizes to match exact luxury specs
            fontSize: {
                'title-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
                'title-lg': ['44px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
                'title-md': ['28px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '400' }],
                'body-lg': ['18px', { lineHeight: '1.7' }], // For Founder's message
                'body-base': ['17px', { lineHeight: '1.65' }],
                'ui-sm': ['14px', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '500' }],
            }
        },
    },
    plugins: [],
}
