import React from 'react';

import Project from '../project/project.component';

import { homepageProjects } from '../../data/projects.data';

import './work-samples.styles.scss';

const WorkSamples = () => (
    <section className='work-samples'>
        <h1 className='work-samples-title'>Work Samples</h1>
        <div className='projects-container'>
            {
                homepageProjects.map((project, index) => (
                    <Project project={project} key={index} />
                ))
            }
        </div>
        <h2 className='view-all'>View All Projects</h2>
    </section>
);

export default WorkSamples;