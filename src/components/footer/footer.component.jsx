import React from 'react';

import { Heart } from 'react-feather';

import './footer.styles.scss';

const Footer = () => (
    <footer className='footer'>
        <a href='https://github.com/Khalem/portfolio' target='_blank' className='created-by'>
            <span className='created-by-text'>Made with</span> 
            <span className='heart'><Heart color='var(--highlight)' fill='var(--highlight)' size={18}/></span>
            <span className='created-by-text'>by me! (Obviously)</span>
        </a>
    </footer>
);

export default Footer;