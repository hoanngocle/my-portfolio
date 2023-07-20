import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import CustomLink from './elements/CustomLink';
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';

function NavBar() {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4' />
                <CustomLink href='/about' title='About' className='mx-4' />
                <CustomLink href='/projects' title='Projects' className='mx-4' />
                <CustomLink href='/articles' title='Articles' className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <a href='https://twitter.com' target={'_blank'}>
                    <TwitterIcon className='' />
                </a>
                <a href='/' target={'_blank'}>
                    <GithubIcon className='' />
                </a>
                <a href='/' target={'_blank'}>
                    <LinkedInIcon className='' />
                </a>
                <a href='/' target={'_blank'}>
                    <PinterestIcon className='' />
                </a>
                <a href='/' target={'_blank'}>
                    <DribbbleIcon className='' />
                </a>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo></Logo>
            </div>
        </header>
    );
}

export default NavBar;
