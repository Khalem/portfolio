import React, { useState } from 'react';
import ProjectMin from '../../components/project-min/project-min.component';

import Title from '../../components/title/title.component';
import { motion } from 'framer-motion';

import { allProjects, justForFunProjects} from '../../data/projects.data';

import './projects.styles.scss';

const Projects = () => {
    const [clicked, setClicked] = useState(null);

    const handleClick = index => {
        if (index === clicked) {
            setClicked(null);
            return;
        }

        setClicked(index);
    };

    const parentVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2
            }
        }
    }

    const childrenVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .5
            }
        }
    }

    return (
        <section className='projects'>
            <Title text='Projects' color='var(--blue)' />
            <motion.div
                initial='hidden'
                animate='visible'
                variants={parentVariants}
                className='projects-container'
            >
                {
                    allProjects.map((project, index) => (
                        <ProjectMin 
                            project={project} 
                            key={index} 
                            handleClick={handleClick} 
                            index={index} 
                            clicked={clicked}
                            childrenVariants={childrenVariants}
                        />
                    ))
                }
            </motion.div>
            <Title text='Just for Fun' color='var(--blue)' />
            <motion.div
                initial='hidden'
                animate='visible'
                variants={parentVariants}
                className='for-fun-container'
            >
                {
                    justForFunProjects.map((project, index) => (
                        <ProjectMin 
                            project={project} 
                            key={`${project.name}-${index}`} 
                            handleClick={handleClick} 
                            index={index + allProjects.length} 
                            clicked={clicked}
                            childrenVariants={childrenVariants}
                        />
                    ))
                }
            </motion.div>
        </section>
    );
};

export default Projects;