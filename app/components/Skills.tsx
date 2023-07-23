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
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
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
            <h2 className='font-bold text-8xl w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>

                <Skill name='CSS' x='-10vw' y='11vw'></Skill>
                <Skill name='HTML' x='12vw' y='5vw'></Skill>
                <Skill name='ReactJS' x='28vw' y='6vw'></Skill>
                <Skill name='TypeScript' x='-14vw' y='-6vw'></Skill>
                <Skill name='NextJS' x='-30vw' y='-5vw'></Skill>
                <Skill name='Tailwind CSS' x='18vw' y='-12vw'></Skill>
                <Skill name='Database' x='30vw' y='-5vw'></Skill>
                <Skill name='AWS' x='0vw' y='20vw'></Skill>
                <Skill name='Linux' x='-15vw' y='-25vw'></Skill>
                <Skill name='PHP' x='0vw' y='-20vw'></Skill>
                <Skill name='NodeJS' x='-25vw' y='18vw'></Skill>
                <Skill name='Python' x='18vw' y='18vw'></Skill>

                {/* <Skill name='sCSS' x='-5vm' y='-10vm'></Skill> */}
            </div>
        </>
    );
}
export default Skills;
