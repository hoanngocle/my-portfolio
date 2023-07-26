import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GithubIcon } from './Icons';

type Props = {
    title: string;
    type: string;
    img: StaticImageData;
    link: string;
    github: string;
};

const Project = (props: Props) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />

            <Link href={props.link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <Image src={props.img} alt={props.title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{props.type}</span>

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
