'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GithubIcon } from './Icons';
import { motion } from 'framer-motion';
import DarkBackground from './elements/DarkBackground';

type Props = {
    type: string;
    title: string;
    summary: string;
    img: StaticImageData;
    link: string;
    github: string;
};
const FramerImage = motion(Image);

const FeaturedProject = (props: Props) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark'>
            <DarkBackground />

            <Link href={props.link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage
                    src={props.img}
                    alt={props.title}
                    className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            50vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{props.type}</span>
                <Link href={props.link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{props.title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-white'>{props.summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={props.github} target='_blank' className='w-10'>
                        <GithubIcon className='' />
                    </Link>
                    <Link
                        href={props.link}
                        target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProject;
