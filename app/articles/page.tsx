import { Metadata } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/elements/AnimatedText';
import FeaturedArticle from '../components/FeaturedArticle';
import Article1 from '../../public/images/articles/pagination component in reactjs.jpg';

type Props = {};
export const metadata: Metadata = {
    title: 'Dev Dreaming | Article',
    description: 'My portfolio created by Nyx'
};

const Articles = (props: Props) => {
    return (
        <article className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16' text='Words Can Change The World! '></AnimatedText>
                <ul className='grid grid-col-2 gap-16'>
                    <FeaturedArticle
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination
                        component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component
                        in your ReactJS project'
                        img={Article1}
                        link={'/'}
                        time='9 min read'
                    ></FeaturedArticle>
                    <li></li>
                </ul>
            </Layout>
        </article>
    );
};

export default Articles;
