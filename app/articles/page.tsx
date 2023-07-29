import { Metadata } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/elements/AnimatedText';
import FeaturedArticle from '../components/FeaturedArticle';
import Article1 from '../../public/images/articles/pagination component in reactjs.jpg';
import Article2 from '../../public/images/articles/smooth scrolling in reactjs.png';
import Article from '../components/Article';

type Props = {};
export const metadata: Metadata = {
    title: 'Dev Dreaming | Article',
    description: 'My portfolio created by Nyx'
};

const Articles = (props: Props) => {
    return (
        <article className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText
                    className='mb-16 lg:!text-6xl sm:!mb-8 sm:text-6xl xs:!text-4xl'
                    text='Words Can Change The World! '
                />
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
                    <FeaturedArticle
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination
                        component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component
                        in your ReactJS project'
                        img={Article1}
                        link={'/'}
                        time='9 min read'
                    />
                    <FeaturedArticle
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination
                        component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component
                        in your ReactJS project'
                        img={Article2}
                        link={'/'}
                        time='9 min read'
                    />
                </ul>

                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
                <ul>
                    <Article
                        img={Article1}
                        title='Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers'
                        date={'April 4, 2023'}
                        link={'/'}
                    />

                    <Article
                        img={Article1}
                        title='Creating An Efficient Modal Component In React Using Hooks And Portals'
                        date={'May 15, 2023'}
                        link={'/'}
                    />

                    <Article
                        img={Article1}
                        title='Build A Fabulous Todo List App With React, Redux And Framer-Motion'
                        date={'June 20, 2023'}
                        link={'/'}
                    />

                    <Article
                        img={Article1}
                        title='Redux Simplified: A Beginner Guide For Web Developers'
                        date={'July 5, 2023'}
                        link={'/'}
                    />

                    <Article
                        img={Article1}
                        title='What Is Higher Order Component (Hoc) In React?'
                        date={'July 15, 2023'}
                        link={'/'}
                    />

                    <Article
                        img={Article1}
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        date={'July 25, 2023'}
                        link={'/'}
                    />
                </ul>
            </Layout>
        </article>
    );
};

export default Articles;
