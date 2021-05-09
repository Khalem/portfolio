import React from 'react';

import Avatar from 'avataaars';

import './about-me.styles.scss';
import Title from '../title/title.component';

const AboutMe = () => (
    <section className='about-me'>
        <Title text='About Me' color='var(--light)' />
        <Avatar
            style={{width: '200px', height: '200px'}}
            avatarStyle='Circle'
            avatarBackground='red'
            topType='ShortHairTheCaesar'
            accessoriesType='Blank'
            hairColor='BrownDark'
            facialHairType='BeardLight'
            clotheType='Hoodie'
            clotheColor='Red'
            eyeType='Happy'
            eyebrowType='RaisedExcitedNatural'
            mouthType='Smile'
            skinColor='Pale'
        />
        <p className='about-me-text'>
            Hi. My name is Khalem, I’m a 23 year old front end developer from Meath, Ireland.
        </p>
        <p className='about-me-text'>
            I’m enjoying working with React at the moment, although I have used Python and Django in the past.
        </p>
    </section>
);

export default AboutMe;