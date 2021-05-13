import React from 'react';

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

    return (
        <FadeInWhenVisible>
            <div className={`project-container ${flexClass}`}>
                <div style={{ backgroundImage: `url(${image})` }}  className='project-image' />
                <div className='project'>
                    <Tag text={tag} margin={true} />
                    <h1 className='project-title'>{name}</h1>
                    <p className='project-desc'>{bio}</p>
                    <a href={liveSite} target='_blank'>View Site <span className='arrow'><ArrowUpRight color='var(--blue)' /></span></a>
                    <a href={codeUrl} target='_blank'>View Code <span className='arrow'><ArrowUpRight color='var(--blue)' /></span></a>
                </div>
            </div>
        </FadeInWhenVisible>
    );
}

export default Project;