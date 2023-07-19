import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

type CustomLinkParams = {
    href: string;
    title: string;
    className: string;
};

const CustomLink = ({ href, title, className = '' }: CustomLinkParams) => {
    return (
        <Link href={href} className={`${className} relative`}>
            {title}
            <span className='h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300'>
                &nbsp;
            </span>
        </Link>
    );
};

function NavBar() {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4' />
                <CustomLink href='/about' title='About' className='mx-4' />
                <CustomLink href='/projects' title='Projects' className='mx-4' />
                <CustomLink href='/articles' title='Articles' className='ml-4' />
            </nav>
            <nav>
                <Link href='/' target={'_blank'}>
                    Twitter
                </Link>
                <Link href='/' target={'_blank'}>
                    Facebook
                </Link>
                <Link href='/' target={'_blank'}>
                    Twitter
                </Link>
                <Link href='/' target={'_blank'}>
                    Twitter
                </Link>
                <Link href='/' target={'_blank'}>
                    Twitter
                </Link>
                <Link href='/' target={'_blank'}>
                    Twitter
                </Link>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo></Logo>
            </div>
        </header>
    );
}

export default NavBar;
