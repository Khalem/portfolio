import React from 'react';
import { motion } from 'framer-motion'

import Tag from '../tag/tag.component';

import './landing.styles.scss';

const Landing = () => {
    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: .5,
                staggerChildren: 1.5
            }
        }
    };

    const childrenVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <header className='landing'>
            <motion.div className='landing-content' initial='hidden' animate='visible' variants={variants} >
                <Tag text='Front End Developer' margin={false} />
                <motion.h1 className='landing-title' variants={childrenVariants}>
                    Khalem <br />
                    Connaughton
                </motion.h1>
                <motion.p className='landing-secondary' variants={childrenVariants}>Hi. I’m a 23 year old web developer based out of Meath.</motion.p>
            </motion.div>
        </header>
    );
}

export default Landing;