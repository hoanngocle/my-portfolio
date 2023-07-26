import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    title: string;
    summary: string;
    img: StaticImageData;
    link: string;
    time: string;
};

const FeaturedArticle = (props: Props) => {
    return (
        <li>
            <Link href={props.link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={props.img} alt={props.title} className='w-full h-auto' />
            </Link>

            <Link href={props.link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='capitalize text-2xl font-bold my-2'>{props.title}</h2>
            </Link>

            <p className='text-sm mb-2'>{props.summary}</p>
            <span className='text-primary font-semibold'>{props.time}</span>
        </li>
    );
};

export default FeaturedArticle;
