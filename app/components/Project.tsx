'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GithubIcon } from './Icons';
import { motion } from 'framer-motion';
import DarkBackground from './elements/DarkBackground';

const FramerImage = motion(Image);
type Props = {
    title: string;
    type: string;
    img: StaticImageData;
    link: string;
    github: string;
};

const Project = (props: Props) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark'>
            <DarkBackground />

            <Link href={props.link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage
                    src={props.img}
                    alt={props.title}
                    className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw'
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{props.type}</span>

                <Link href={props.link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{props.title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={props.link} target='_blank' className='text-lg font-semibold underline'>
                        Visit
                    </Link>
                    <Link href={props.github} target='_blank' className='w-10'>
                        <GithubIcon className='' />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Project;
