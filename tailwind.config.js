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
                sans: ['Outfit', 'sans-serif'],
                serif: ['Outfit', 'sans-serif'],
            },
            letterSpacing: {
                'tight-headings': '-0.02em',
                'wide-caps': '0.04em',
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1440px',
                },
            },
            fontSize: {
                'title-h1': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
                'title-h2': ['36px', { lineHeight: '1.2', fontWeight: '400' }],
                'title-card': ['20px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
                'body-lg': ['18px', { lineHeight: '1.6' }],
                'body-base': ['16px', { lineHeight: '1.6' }],
                'ui-label': ['13px', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '500' }],
                'ui-btn': ['14px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
            }
        },
    },
    plugins: [],
}
