'use client';

import { motion } from 'framer-motion';

type SkillParams = {
    name: string;
    x: string;
    y: string;
};

const Skill = ({ name, x, y }: SkillParams) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute 
            dark:bg-light dark:text-dark dark:shadow-light 
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-dark xs:dark:text-light xs:font-bold
            '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

function Skills() {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div
                className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[40vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm'
            >
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer 
                    dark:bg-light dark:text-dark dark:shadow-light
                    lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>

                <Skill name='CSS' x='-10vw' y='11vw' />
                <Skill name='HTML' x='12vw' y='5vw' />
                <Skill name='ReactJS' x='28vw' y='6vw' />
                <Skill name='TypeScript' x='-14vw' y='-6vw' />
                <Skill name='NextJS' x='-30vw' y='-5vw' />
                <Skill name='Tailwind CSS' x='18vw' y='-12vw' />
                <Skill name='Database' x='30vw' y='-5vw' />
                <Skill name='AWS' x='0vw' y='20vw' />
                <Skill name='Linux' x='-15vw' y='-25vw' />
                <Skill name='PHP' x='0vw' y='-20vw' />
                <Skill name='NodeJS' x='-25vw' y='18vw' />
                <Skill name='Python' x='18vw' y='18vw' />
            </div>
        </>
    );
}
export default Skills;
