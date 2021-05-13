import React from 'react';
import { useLocation, withRouter } from 'react-router';
import { motion } from 'framer-motion';

import './nav.styles.scss';

const Nav = ({ history }) => {
    const { pathname } = useLocation();

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: .5,
            }
        }
    };

    return (
        <motion.nav className='nav' initial='hidden' animate='visible' variants={variants}>
            <ul>
                <li 
                    onClick={() => history.push('/')} 
                    className={`${pathname === '/' ? 'active' : ''}`}
                >
                    Home
                </li>
                <li 
                    onClick={() => history.push('/projects')} 
                    className={`${pathname === '/projects' ? 'active' : ''}`}
                >
                    All Projects
                </li>
            </ul>
        </motion.nav>
    );
}

export default withRouter(Nav);