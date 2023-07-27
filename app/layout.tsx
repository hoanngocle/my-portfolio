import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

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
            <body>
                <main className={`${montserrat.className} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
