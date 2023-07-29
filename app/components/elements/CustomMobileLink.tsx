'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type CustomLinkParams = {
    href: string;
    title: string;
    className: string;
    toggle: () => void;
};

const CustomMobileLink = ({ href, title, className = '', toggle }: CustomLinkParams) => {
    const pathName = usePathname();
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span
                className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                ${pathName === href ? 'w-full' : 'w-0'}
                dark:bg-dark
                `}
            >
                &nbsp;
            </span>
        </button>
    );
};

export default CustomMobileLink;
