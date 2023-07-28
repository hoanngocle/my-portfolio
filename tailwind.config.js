/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
                circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px);'
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-roboto-mono)']
            },
            colors: {
                dark: '#1b1b1b',
                light: '#f5f5f5',
                primary: '#B63E96',
                primaryDark: '#58E6D9'
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite'
            }
        },
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }

            xs: { max: '479px' }
            // => @media (max-width: 479px) { ... }
            // => @media (max-width: 479px) { ... }
        }
    },
    plugins: []
};
