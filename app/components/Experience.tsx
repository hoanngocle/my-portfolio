import { motion, useScroll } from 'framer-motion';
import { cp } from 'fs';
import { useRef } from 'react';

type DetailParams = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
};

const Detail = ({ position, company, companyLink, time, address, work }: DetailParams) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;{' '}
                    <a href={companyLink} target='_blank' className='text-primary capitalize'>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>{work}</p>
            </div>
        </li>
    );
};

function Experience() {
    const { ref } = useRef
    const { scrollYProgess } = useScroll(
        {
            target: 
        });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

            <div className='w-[75%] mx-auto relative'>
                <div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'></div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Detail
                        position='Software Engineer'
                        company='Google'
                        companyLink='https://google.com'
                        time='2022-Present '
                        address='Mountain View'
                        work="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />

                    <Detail
                        position='Software Engineer'
                        company='Google'
                        companyLink='https://google.com'
                        time='2022-Present '
                        address='Mountain View'
                        work="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />

                    <Detail
                        position='Software Engineer'
                        company='Google'
                        companyLink='https://google.com'
                        time='2022-Present '
                        address='Mountain View'
                        work="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />

                    <Detail
                        position='Software Engineer'
                        company='Google'
                        companyLink='https://google.com'
                        time='2022-Present '
                        address='Mountain View'
                        work="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />
                </ul>
            </div>
        </div>
    );
}
export default Experience;
