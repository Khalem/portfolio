import React from 'react';

import Tag from '../tag/tag.component';
import { ArrowUpRight } from 'react-feather';

import './project.styles.scss';

const Project = ({ project: { name, bio, tag, liveSite, codeUrl, image } }) => (
    <div className='project-container'>
        <div style={{ backgroundImage: `url(${image})` }}  className='project-image' />
        <div className='project'>
            <Tag text={tag} margin={true} />
            <h1 className='project-title'>{name}</h1>
            <p className='project-desc'>{bio}</p>
            <a href={liveSite} target='_blank'>View Site <span className='arrow'><ArrowUpRight color='var(--blue)' /></span></a>
            <a href={codeUrl} target='_blank'>View Code <span className='arrow'><ArrowUpRight color='var(--blue)' /></span></a>
        </div>
    </div>
);

export default Project;