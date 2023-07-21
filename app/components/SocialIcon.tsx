'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon } from './Icons';

function SocialIcon() {
    return (
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a
                href='https://twitter.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mr-3'
            >
                <TwitterIcon className='' />
            </motion.a>
            <motion.a
                href='https://github.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3'
            >
                <GithubIcon className='' />
            </motion.a>
            <motion.a
                href='https://linkedin.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3'
            >
                <LinkedInIcon className='' />
            </motion.a>
            <motion.a
                href='https://pinterest.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3'
            >
                <PinterestIcon className='' />
            </motion.a>
            <motion.a
                href='https://dribbble.com'
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 ml-3'
            >
                <DribbbleIcon className='' />
            </motion.a>
        </nav>
    );
}

export default SocialIcon;
