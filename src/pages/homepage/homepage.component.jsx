import React from 'react';
import AboutMe from '../../components/about-me/about-me.component';
import Contact from '../../components/contact/contact.component';

import Landing from '../../components/landing/landing.component';
import WorkSamples from '../../components/work-samples/work-samples.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <section className='homepage'>
            <Landing />
            <WorkSamples />
            <AboutMe />
            <Contact />
        </section>
    );
};

export default HomePage;