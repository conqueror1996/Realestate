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
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Montserrat', 'sans-serif'],
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
                // H1 - Hero Statement (Authority + Aspiration)
                'title-h1': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                // H2 - Section Headings (Structure)
                'title-h2': ['40px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
                // H3 - Sub-Section / Cards
                'title-h3': ['24px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
                // Body Text (Readability)
                'body-base': ['17px', { lineHeight: '1.7', letterSpacing: '0.01em', fontWeight: '400' }],
                // Small Meta / Labels
                'ui-label': ['13px', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
                // Buttons
                'ui-btn': ['14px', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '600' }],
                // Legacy support (aliased to h3) to prevent build errors if used
                'title-card': ['24px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],

                // Keep existing extras for backwards compat if needed, or adjust
                '5xl': ['48px', { lineHeight: '1.1' }],
                '6xl': ['60px', { lineHeight: '1.1' }],
                '7xl': ['72px', { lineHeight: '1.1' }],
            }
        },
    },
    plugins: [],
}
