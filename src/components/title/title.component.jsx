import React from 'react';

import './title.styles.scss';

const Title = ({ text, color }) => (
    <h1 className='title' style={{ color }}>{text}</h1>
);

export default Title;