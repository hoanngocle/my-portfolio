import { useRef } from 'react';
import LiIcon from './LiIcon';
import { motion } from 'framer-motion';

type DetailExperienceParams = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
};

const DetailExperience = ({ position, company, companyLink, time, address, work }: DetailExperienceParams) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
        >
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;{' '}
                    <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>
                        @{company}
                    </a>
                </h3>

                <span className='capitalize font-medium text-dark/75 dark:text-white/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>{work}</p>
            </motion.div>
        </li>
    );
};

export default DetailExperience;
