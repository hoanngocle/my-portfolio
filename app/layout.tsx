import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';
import TransitionEffect from './components/TransitionEffect';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont'
});

export const metadata: Metadata = {
    title: 'My Portfolio',
    description: 'My portfolio create by Nyx'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <Script id='theme-switcher'>
                    {` 
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.documentElement.classList.add('dark')
                    } else {
                        document.documentElement.classList.remove('dark')
                    }
                `}
                </Script>
            </head>
            <body>
                <main className={`${montserrat.className} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
                    <TransitionEffect>
                        <Header />
                        {children}
                        <Footer />
                    </TransitionEffect>
                </main>
            </body>
        </html>
    );
}
