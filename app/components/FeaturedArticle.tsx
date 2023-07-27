'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import DarkBackground from './elements/DarkBackground';

const FramerImage = motion(Image);

type Props = {
    title: string;
    summary: string;
    img: StaticImageData;
    link: string;
    time: string;
};

const FeaturedArticle = (props: Props) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <DarkBackground />

            <Link
                href={props.link}
                target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage
                    src={props.img}
                    alt={props.title}
                    className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <Link href={props.link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-light'>
                    {props.title}
                </h2>
            </Link>

            <p className='text-sm mb-2 dark:text-light'>{props.summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{props.time}</span>
        </li>
    );
};

export default FeaturedArticle;
