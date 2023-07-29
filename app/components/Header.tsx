'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import CustomLink from './elements/CustomLink';
import SocialIcon from './SocialIcon';
import CustomMobileLink from './elements/CustomMobileLink';
import { motion } from 'framer-motion';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                ></span>
            </button>

            {/* PC Header */}
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4' />
                    <CustomLink href='/about' title='About' className='mx-4' />
                    <CustomLink href='/projects' title='Projects' className='mx-4' />
                    <CustomLink href='/articles' title='Articles' className='ml-4' />
                </nav>

                <SocialIcon />
            </div>

            {/* Mobile Header */}
            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
                >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink href='/' title='Home' className='' toggle={handleClick} />
                        <CustomMobileLink href='/about' title='About' className='' toggle={handleClick} />
                        <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleClick} />
                        <CustomMobileLink href='/articles' title='Articles' className='' toggle={handleClick} />
                    </nav>

                    <SocialIcon />
                </motion.div>
            ) : null}

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
}

export default Header;
