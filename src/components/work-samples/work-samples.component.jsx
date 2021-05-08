import React from 'react';

import Tag from '../tag/tag.component';
import { ArrowUpRight } from 'react-feather';

import { homepageProjects } from '../../data/projects.data';

import './work-samples.styles.scss';

const WorkSamples = () => (
    <section className='work-samples'>
        <h1 className='work-samples-title'>Work Samples</h1>
        <div className='projects-container'>
            {
                homepageProjects.map(project => (
                    <div className='project-container'>
                        <div style={{ backgroundImage: `url(${project.image})` }}  className='project-image' />
                        <div className='project'>
                            <Tag text={project.tag} margin={true} />
                            <h1 className='project-title'>{project.name}</h1>
                            <p className='project-desc'>{project.bio}</p>
                            <a href={project.liveSite} target='_blank'>View Site <span className='arrow'><ArrowUpRight color='var(--blue)' /></span></a>
                            <a href={project.codeUrl} target='_blank'>View Code <span className='arrow'><ArrowUpRight color='var(--blue)' /></span></a>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
);

export default WorkSamples;