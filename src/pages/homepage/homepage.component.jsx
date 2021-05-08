import React from 'react';

import Landing from '../../components/landing/landing.component';
import WorkSamples from '../../components/work-samples/work-samples.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <section className='homepage'>
            <Landing />
            <WorkSamples />
        </section>
    );
};

export default HomePage;