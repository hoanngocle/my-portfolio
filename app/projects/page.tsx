import { Metadata } from 'next';
import React from 'react';
import AnimatedText from '../components/elements/AnimatedText';
import Layout from '../components/Layout';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCrypto from '../../public/images/projects/crypto-screener-cover-image.jpg';
import Project from '../components/Project';
import TransitionEffect from '../components/TransitionEffect';

type Props = {};

export const metadata: Metadata = {
    title: 'Dev Dreaming | About',
    description: 'My portfolio create by Nyx'
};

const Projects = () => {
    return (
        <article className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <TransitionEffect />

            <Layout className='pt-16'>
                <AnimatedText
                    className='mb-16 lg:!text-6xl sm:!mb-8 sm:text-6xl xs:!text-4xl'
                    text='Imagination Trumps Knowledge!'
                />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                            type={'Featured Project'}
                            title={'React Portfolio Website'}
                            summary='A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive.
'
                            img={ProjectCrypto}
                            link={'/'}
                            github={'/'}
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            type={'Featured Project'}
                            title={'React Portfolio Website'}
                            img={ProjectCrypto}
                            link={'/'}
                            github={'/'}
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            type={'Featured Project'}
                            title={'React Portfolio Website'}
                            img={ProjectCrypto}
                            link={'/'}
                            github={'/'}
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject
                            type={'Featured Project'}
                            title={'React Portfolio Website'}
                            summary='A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive.
'
                            img={ProjectCrypto}
                            link={'/'}
                            github={'/'}
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            type={'Featured Project'}
                            title={'React Portfolio Website'}
                            img={ProjectCrypto}
                            link={'/'}
                            github={'/'}
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            type={'Featured Project'}
                            title={'React Portfolio Website'}
                            img={ProjectCrypto}
                            link={'/'}
                            github={'/'}
                        />
                    </div>
                </div>
            </Layout>
        </article>
    );
};

export default Projects;
