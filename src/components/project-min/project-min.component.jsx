import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'react-feather';

import './project-min.styles.scss';

const ProjectMin = ({ project: { name, bio, liveSite, codeUrl, heroku }, index, clicked, handleClick, childrenVariants }) => {
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
            rotate: 0
        },
        hover: {
            rotate: 45
        }
    }

    return (
        <motion.div className={`project ${index === clicked + 1 && clicked !== null ? 'move-project' : '' }`} variants={childrenVariants}>
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
                        <motion.a 
                            href={liveSite} 
                            target='_blank' 
                            className='project-link' 
                            initial='rest' 
                            whileHover='hover' 
                            animate='rest'
                            rel="noreferrer"
                        >
                            View Site 
                            <motion.span className='arrow' variants={iconVariants}><ArrowUpRight color='var(--highlight)' /></motion.span>
                        </motion.a>
                        <motion.a 
                            href={codeUrl} 
                            target='_blank' 
                            className='project-link' 
                            initial='rest' 
                            whileHover='hover' 
                            animate='rest'
                            rel="noreferrer"
                        >
                            View Code 
                            <motion.span className='arrow' variants={iconVariants}><ArrowUpRight color='var(--highlight)' /></motion.span>
                        </motion.a>
                    </div>
                </motion.div>
                : null
            }
            {
                // display loading warning for projects hosted on heroku - won't show on mobile
                index === clicked && heroku ?
                <div className='heroku-warning'>
                    <h2 className='heroku-warning-title'>NOTE:</h2>
                    <p>This project may take a few seconds to load as it’s hosted on Heroku.</p>
                    <p>The project could potentially be ‘asleep’.</p>
                </div>
                : null
            }
        </motion.div>
    );
};

export default ProjectMin;