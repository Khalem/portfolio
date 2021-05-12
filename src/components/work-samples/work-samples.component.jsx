import React from 'react';
import { withRouter } from 'react-router';

import Project from '../project/project.component';
import Title from '../title/title.component';

import { homepageProjects } from '../../data/projects.data';

import './work-samples.styles.scss';

const WorkSamples = ({ history }) => (
    <section className='work-samples' id='work_samples'>
        <Title text='Work Samples' color='var(--blue)' textAlign='center' />
        <div className='projects-container'>
            {
                homepageProjects.map((project, index) => (
                    <Project project={project} key={index} />
                ))
            }
        </div>
        <h2 className='view-all' onClick={() => history.push('/projects')}>View All Projects</h2>
    </section>
);

export default withRouter(WorkSamples);