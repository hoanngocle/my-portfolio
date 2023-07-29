import { motion, useMotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

const FramerImage = motion(Image);

type PropsImage = {
    title: string;
    img: StaticImageData;
    link: string;
};

const MovingImage = (props: PropsImage) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event: any) {
        // @ts-ignore
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event: any) {
        // @ts-ignore
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={props.link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{props.title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef}
                src={props.img}
                alt={props.title}
                className='w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden'
                priority
                sizes='(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        50vw'
            />
        </Link>
    );
};

export default MovingImage;
