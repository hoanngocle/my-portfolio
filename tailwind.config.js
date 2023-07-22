/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-roboto-mono)']
            },
            colors: {
                dark: '#1b1b1b',
                light: '#f5f5f5',
                primary: '#B63E96',
                primaryDark: '#58E609'
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite'
            }
        }
    },
    plugins: []
};
