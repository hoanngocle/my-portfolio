import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import NavBar from './components/NavBar';

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
        <html lang='en' className={`${montserrat.className} font-mont bg-light w-full min-h-screen`}>
            <body>
                <NavBar></NavBar>
                <main className='flex items-center text-dark w-full min-h-screen'>
                    <div className='w-full h-full inline-block z-0 bg-light p-32 pt-0'>{children}</div>
                </main>
            </body>
        </html>
    );
}
