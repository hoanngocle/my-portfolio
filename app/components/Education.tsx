'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import DetailEducation from './elements/DetailEducation';

function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-[2px] w-[4px] h-full bg-dark origin-top dark:bg-light'
                ></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <DetailEducation
                        type='Software Engineer'
                        time='https://google.com'
                        place='2022-Present '
                        info="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />

                    <DetailEducation
                        type='Software Engineer'
                        time='https://google.com'
                        place='2022-Present '
                        info="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />

                    <DetailEducation
                        type='Software Engineer'
                        time='https://google.com'
                        place='2022-Present '
                        info="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />
                    <DetailEducation
                        type='Software Engineer'
                        time='https://google.com'
                        place='2022-Present '
                        info="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />
                </ul>
            </div>
        </div>
    );
}
export default Education;
