import React from 'react';
import { Linkedin, Codepen, GitHub } from 'react-feather';
import FadeInWhenVisible from '../fade-in-when-visible/fade-in-when-visible.component';

import Title from '../title/title.component';

import './contact.styles.scss';

const Contact = () => (
    <section className='contact'>
        <Title text='Get in Touch' color='var(--light)' textAlign='center' />
        <FadeInWhenVisible>
            <div className='email-container'>
                <p className='email'>khalem.connaughton@gmail.com</p>
                <p className='email-desc'>The best way to get in touch is through email. My emails are checked regularly and will receive a response as soon as possible.</p>
            </div>
            <div className='socials-container'>
                <p className='social-title'>Socials</p>
                <div className='social-icons'>
                    <a 
                        href='https://www.linkedin.com/in/khalem-connuaghton-ba1323166/' 
                        target='_blanks' 
                        className='social-icon'
                        aria-label='LinkedIn'
                    >
                        <Linkedin color='var(--blue)' size={37} strokeWidth={1} />
                    </a>
                    <a 
                        href='https://codepen.io/khalem-conn' 
                        target='_blanks' 
                        className='social-icon'
                        aria-label='Codepen'
                    >
                        <Codepen color='var(--blue)' size={37} strokeWidth={1}/>
                    </a>
                    <a 
                        href='https://github.com/khalem' 
                        target='_blanks' 
                        className='social-icon' 
                        aria-label='Github'
                    >
                        <GitHub color='var(--blue)' size={37} strokeWidth={1} />
                    </a>
                </div>
            </div>
        </FadeInWhenVisible>
    </section>
);

export default Contact;