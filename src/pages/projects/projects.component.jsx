import React, { useState } from 'react';
import ProjectMin from '../../components/project-min/project-min.component';

import Title from '../../components/title/title.component';

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

    return (
        <section className='projects'>
            <Title text='Projects' color='var(--blue)' />
            <div className='projects-container'>
                {
                    allProjects.map((project, index) => (
                        <ProjectMin project={project} key={index} handleClick={handleClick} index={index} clicked={clicked}/>
                    ))
                }
            </div>
            <Title text='Just for Fun' color='var(--blue)' />
            <div className='for-fun-container'>
                {
                    justForFunProjects.map((project, index) => (
                        <ProjectMin project={project} key={`${project.name}-${index}`} handleClick={handleClick} index={index + allProjects.length} clicked={clicked} />
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;