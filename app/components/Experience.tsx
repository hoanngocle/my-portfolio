'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Detail from './elements/Detail';

function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
                ></motion.div>
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
