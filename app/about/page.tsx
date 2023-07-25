import { Metadata } from 'next';
import AnimatedText from '../components/elements/AnimatedText';
import Layout from '../components/Layout';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import AnimatedNumbers from '../components/elements/AnimatedNumbers';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';

export const metadata: Metadata = {
    title: 'Dev Dreaming | About',
    description: 'My portfolio create by Nyx'
};

export default function About() {
    return (
        <article className='flex flex-col items-center w-full justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful,
                            functional, and user-centered digital experiences. With 4 years of experience in the field.
                            I am always looking for new and innovative ways to bring my clients' visions to life.
                        </p>

                        <p className='mt-4 font-medium'>
                            I believe that design is about more than just making things look pretty – it's about solving
                            problems and creating intuitive, enjoyable experiences for users.
                        </p>
                        <p className='mt-4 font-medium'>
                            Whether I'm working on a website, mobile app, or other digital product, I bring my
                            commitment to design excellence and user-centered thinking to every project I work on. I
                            look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt='DevDreaming' className='w-full h-auto rounded-2xl' />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={50}></AnimatedNumbers>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={30}></AnimatedNumbers>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>project completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={7}></AnimatedNumbers>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                        </div>
                    </div>
                </div>

                <Skills></Skills>
                <Experience></Experience>
                <Education></Education>
            </Layout>
        </article>
    );
}
