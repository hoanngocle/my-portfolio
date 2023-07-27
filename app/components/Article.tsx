'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import MovingImage from './elements/MovingImage';

type Props = {
    img: StaticImageData;
    title: string;
    date: string;
    link: string;
};

const Article = (props: Props) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            viewport={{ once: true }}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'
        >
            <MovingImage title={props.title} img={props.img} link={props.link} />
            <span className='text-primary font-semibold pl-4'>{props.date}</span>
        </motion.li>
    );
};

export default Article;
