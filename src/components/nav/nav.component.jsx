import React from 'react';
import { useLocation, withRouter } from 'react-router';

import './nav.styles.scss';

const Nav = ({ history }) => {
    const { pathname } = useLocation();

    return (
        <nav className='nav'>
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
        </nav>
    );
}

export default withRouter(Nav);