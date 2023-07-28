import React from 'react';
import Logo from './Logo';
import CustomLink from './elements/CustomLink';
import SocialIcon from './SocialIcon';

function Header() {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
            <button className='flex flex-col justify-center items-center'>
                <span className='bg:dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5'></span>
                <span className='bg:dark dark:bg-light block h-0.5 w-6 rounded-sm '></span>
                <span className='bg:dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 '></span>
            </button>

            <nav>
                <CustomLink href='/' title='Home' className='mr-4' />
                <CustomLink href='/about' title='About' className='mx-4' />
                <CustomLink href='/projects' title='Projects' className='mx-4' />
                <CustomLink href='/articles' title='Articles' className='ml-4' />
            </nav>

            <SocialIcon />

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
}

export default Header;
