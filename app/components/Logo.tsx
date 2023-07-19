'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function Logo() {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink
                href='/'
                className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
                whileHover={{
                    backgroundColor: ['#1F2F86', '#2E4897', '#4865A6', '#6081B9', '#253E83', '#BBF3C0'],
                    transition: { duration: 1.5, repeat: Infinity }
                }}
            >
                BS
            </MotionLink>
        </div>
    );
}

export default Logo;
