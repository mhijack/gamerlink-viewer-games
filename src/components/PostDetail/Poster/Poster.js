import React from 'react';

import cover from '../../../assets/img/cover.png';

import './Poster.css';

const Poster = props => {
    // in production site the source of image will be an absolute path linking to address on our server
    return <img src={cover} alt={props.name} className="poster" />;
};

export default Poster;
