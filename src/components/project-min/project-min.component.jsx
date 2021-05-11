import React from 'react';
import { animate, motion } from 'framer-motion';
import { ArrowUpRight } from 'react-feather';

import './project-min.styles.scss';

const ProjectMin = ({ project: { name, bio, liveSite, codeUrl, heroku }, index, clicked, handleClick }) => {
    const infoVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    const iconVariants = {
        rest: {
            x: 0
        },
        hover: {
            x: 10,
            rotate: 45
        }
    }

    return (
        <div className={`project ${index === clicked + 1 && clicked !== null ? 'move-project' : '' }`}>
            <motion.h2 
                className='project-title' 
                onClick={() => handleClick(index)} 
                style={ index !== clicked ? {color: 'var(--blue)'} : {color: 'var(--dark)'} }
                whileHover={{ x: 20 }}
            >
                {name}
            </motion.h2>
            {
                index === clicked ?
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={infoVariants}
                    transition={{ duration: .3 }}
                    className='project-info'
                >
                    <p className='project-bio'>{bio}</p>
                    <div className='project-links'>
                        <motion.a href={liveSite} target='_blank' className='project-link' initial='rest' whileHover='hover' animate='rest'>
                            Live Site <motion.span className='arrow' variants={iconVariants}><ArrowUpRight color='var(--highlight)' /></motion.span>
                        </motion.a>
                        <motion.a href={codeUrl} target='_blank' className='project-link' initial='rest' whileHover='hover' animate='rest'>
                            Code <motion.span className='arrow' variants={iconVariants}><ArrowUpRight color='var(--highlight)' /></motion.span>
                        </motion.a>
                    </div>
                </motion.div>
                : null
            }
        </div>
    );
};

export default ProjectMin;