import Image from 'next/image';
import profilePic from './../public/images/profile/developer-pic-1.png';
import AnimatedText from './components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from './components/Icons';

export default function Home() {
    return (
        <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
                <Image src={profilePic} alt='IMACODER' className='w-full h-auto'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText
                    text='Turning Vision Into Reality With Code And Design.'
                    className='!text-6xl text-left'
                />
                <p className='my-4 text-base font-medium'>
                    As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                    Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
                <div className='flex items-center self-start mt-2'>
                    <Link
                        href='/dummy.pdf'
                        target={'_blank'}
                        className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                        download={true}
                    >
                        Resume <LinkArrow className='w-6 ml-1'></LinkArrow>
                    </Link>
                    <Link
                        href='mailto:hoanngocle.93@gmail.com'
                        target='_blank'
                        className='ml-4 text-lg font-medium capitalize text-dark underline'
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}
