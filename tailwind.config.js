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
                'charcoal-light': '#222222',
                'stone-light': '#F4F4F2',
                'luxury-white': '#FFFFFF',
                'border-gray': '#E5E5E5',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            letterSpacing: {
                'tight-headings': '-0.02em',
                'wide-caps': '0.08em',
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1440px',
                },
            },
            fontSize: {
                // H1 - Hero Statement
                'title-h1': ['80px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
                // H2 - Section Headings
                'title-h2': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
                // H3 - Card / Feature Titles
                'title-card': ['18px', { lineHeight: '1.3', fontWeight: '600' }],
                // Extra Sizes
                'title-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
                'title-lg': ['48px', { lineHeight: '1.2', fontWeight: '500' }],
                // Body Text
                'body-base': ['15px', { lineHeight: '1.7', fontWeight: '400' }],
                'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
                // Small Meta / Labels
                'ui-label': ['12px', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
                // Buttons
                'ui-btn': ['14px', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '500' }],
            }
        },
    },
    plugins: [],
}
