'use client';

import { motion } from 'framer-motion';
import React from 'react';

const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
};

type AnimatedTextParam = {
    text: string;
    className: string;
};

function AnimatedText({ text, className = '' }: AnimatedTextParam) {
    return (
        <div className='w-full mx-auto flex items-center justify-center text-center sm:py-0'>
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize text-8xl !leading-tight dark:text-light ${className}`}
                variants={quote}
                initial='initial'
                animate='animate'
            >
                {text.split(' ').map((word, index) => (
                    <motion.span key={word + '-' + index} className='inline-block' variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}

export default AnimatedText;
