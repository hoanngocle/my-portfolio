'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher';

function SocialIcon() {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a
                href='https://twitter.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mr-3 sm:mx-1'
            >
                <TwitterIcon className='' />
            </motion.a>
            <motion.a
                href='https://github.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark'
            >
                <GithubIcon className='' />
            </motion.a>
            <motion.a
                href='https://linkedin.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 sm:mx-1'
            >
                <LinkedInIcon className='' />
            </motion.a>
            <motion.a
                href='https://pinterest.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 sm:mx-1 bg-light rounded-full'
            >
                <PinterestIcon className='' />
            </motion.a>
            <motion.a
                href='https://dribbble.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 sm:mx-1'
            >
                <DribbbleIcon className='' />
            </motion.a>
            <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
                `}
            >
                {mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
            </button>
        </nav>
    );
}

export default SocialIcon;
