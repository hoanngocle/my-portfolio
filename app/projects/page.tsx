import { Metadata } from 'next';
import React from 'react';
import AnimatedText from '../components/elements/AnimatedText';
import Layout from '../components/Layout';

type Props = {};

export const metadata: Metadata = {
    title: 'Dev Dreaming | About',
    description: 'My portfolio create by Nyx'
};

const Projects = (props: Props) => {
    return (
        <article className='flex flex-col items-center w-full justify-center'>
            <Layout className=''>
                <AnimatedText className='' text='Imagination Trumps Knowledge!'></AnimatedText>
            </Layout>
        </article>
    );
};

export default Projects;
