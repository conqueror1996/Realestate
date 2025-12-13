/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': 'var(--primary-blue)',
                'secondary-blue': 'var(--secondary-blue)',
                'accent-yellow': 'var(--accent-yellow)',
                'dark-navy': 'var(--dark-navy)',
                'light-gray-bg': 'var(--light-gray-bg)',
                'text-gray': 'var(--text-gray)',
                'accent-green': 'var(--success-green)', // Mapped to success-green variable
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1300px',
                },
            },
        },
    },
    plugins: [],
}
