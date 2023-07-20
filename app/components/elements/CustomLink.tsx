'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type CustomLinkParams = {
    href: string;
    title: string;
    className: string;
};

const CustomLink = ({ href, title, className = '' }: CustomLinkParams) => {
    const pathName = usePathname();

    return (
        <Link href={href} className={`${className} relative`}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                ${pathName === href ? 'w-full' : 'w-0'}`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

export default CustomLink;
