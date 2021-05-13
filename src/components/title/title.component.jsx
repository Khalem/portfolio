import React from 'react';
import { motion } from 'framer-motion';

import './title.styles.scss';

const Title = ({ text, color, textAlign='left', delay=2 }) => {
    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay,
                duration: 1
            }
        }
    };

    return (
        <motion.h1
            initial='hidden'
            animate='visible'
            variants={variants}
            className='title' 
            style={{ color, textAlign }}
        >
            {text}
        </motion.h1>
    );
}

export default Title;