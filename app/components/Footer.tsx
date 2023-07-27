import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

function Footer() {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center'>
                    Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>by&nbsp;
                    <Link href='https://devdreaming.com' className='underline underline-offset-2' target='_blank'>
                        Nyx
                    </Link>
                </div>
                <div className='flex items-center'>
                    <Link href='https://devdreaming.com' target='_blank'>
                        Say Hello
                    </Link>
                </div>
            </Layout>
        </footer>
    );
}

export default Footer;
