import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInWhenVisible = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px'
    });

    useEffect(() => {
        if (!inView) return;

        controls.start('visible');
    }, [controls, inView]);

    const variants = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <motion.div 
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWhenVisible;