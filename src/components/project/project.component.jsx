import React from 'react';
import { motion } from 'framer-motion';

import Tag from '../tag/tag.component';
import { ArrowUpRight } from 'react-feather';

import './project.styles.scss';
import FadeInWhenVisible from '../fade-in-when-visible/fade-in-when-visible.component';

const Project = ({ project: { name, bio, tag, liveSite, codeUrl, image }, index }) => {
    let flexClass = '';

    if (index % 2 === 0) {
        flexClass = 'row-reverse';
    } else {
        flexClass = 'row';
    }

    const iconVariants = {
        rest: {
            rotate: 0
        },
        hover: {
            rotate: 45
        }
    }

    return (
        <FadeInWhenVisible>
            <div className={`project-container ${flexClass}`}>
                <div style={{ backgroundImage: `url(${image})` }}  className='project-image' />
                <div className='project'>
                    <Tag text={tag} margin={true} />
                    <h1 className='project-title'>{name}</h1>
                    <p className='project-desc'>{bio}</p>
                    <motion.a
                        initial='rest' 
                        whileHover='hover' 
                        animate='rest'
                        href={liveSite} 
                        target='_blank'
                        rel="noreferrer"
                    >
                        View Site 
                        <motion.span className='arrow' variants={iconVariants}><ArrowUpRight color='var(--highlight)' /></motion.span>
                    </motion.a>
                    <motion.a
                        initial='rest' 
                        whileHover='hover' 
                        animate='rest'
                        href={codeUrl} 
                        target='_blank'
                        rel="noreferrer"
                    >
                        View Code 
                        <motion.span className='arrow' variants={iconVariants}><ArrowUpRight color='var(--highlight)' /></motion.span>
                    </motion.a>
                </div>
            </div>
        </FadeInWhenVisible>
    );
}

export default Project;