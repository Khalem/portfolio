import React from 'react';

import Tag from '../tag/tag.component';

import './landing.styles.scss';

const Landing = () => (
    <header className='landing'>
        <nav className='homepage-nav'>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className='landing-content'>
            <Tag text='Front End Developer' />
            <h1 className='landing-title'>
                Khalem <br />
                Connaughton
            </h1>
            <p className='landing-secondary'>Hi. I’m a 23 year old web developer based out of Meath.</p>
            <p className='landing-cta'>My Work</p>
        </div>
    </header>
);

export default Landing;