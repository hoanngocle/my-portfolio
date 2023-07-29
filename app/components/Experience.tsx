'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import DetailExperience from './elements/DetailExperience';

function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-[2px] w-[4px] h-full bg-dark dark:bg-light origin-top
                    md:w-[2px] md:left-[30px] sm:left-[20px]'
                ></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <DetailExperience
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

                    <DetailExperience
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

                    <DetailExperience
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

                    <DetailExperience
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
