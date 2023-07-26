import { Metadata } from 'next';
import React from 'react';
import AnimatedText from '../components/elements/AnimatedText';
import Layout from '../components/Layout';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCrypto from '../../public/images/projects/crypto-screener-cover-image.jpg';
import Project from '../components/Project';

type Props = {};

export const metadata: Metadata = {
    title: 'Dev Dreaming | About',
    description: 'My portfolio create by Nyx'
};

const Projects = (props: Props) => {
    return (
        <article className='flex flex-col items-center w-full justify-center'>
            <Layout className=''>
                <AnimatedText className='mb-16' text='Imagination Trumps Knowledge!'></AnimatedText>

                <div className='grid grid-cols-12 gap-24 gap-y-32'>
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

                    <div className='col-span-6'>
                        <Project
                            type={'Featured Project'}
                            title={'React Portfolio Website'}
                            img={ProjectCrypto}
                            link={'/'}
                            github={'/'}
                        />
                    </div>

                    <div className='col-span-6'>
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

                    <div className='col-span-6'>
                        <Project
                            type={'Featured Project'}
                            title={'React Portfolio Website'}
                            img={ProjectCrypto}
                            link={'/'}
                            github={'/'}
                        />
                    </div>

                    <div className='col-span-6'>
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
