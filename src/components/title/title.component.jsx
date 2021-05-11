import React from 'react';

import './title.styles.scss';

const Title = ({ text, color, textAlign='left' }) => (
    <h1 className='title' style={{ color, textAlign }}>{text}</h1>
);

export default Title;