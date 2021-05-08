import React from 'react';

import './tag.styles.scss';

const Tag = ({ text, margin }) => (
    <p className={`tag ${margin ? 'adjust-position' : ''}`}>{text}</p>
);

export default Tag;