import React from 'react';

import cover from '../../../assets/img/cover.png';

import './Poster.css';
import PropTypes from 'prop-types';

/*
*   @Renders
*/
const Poster = ({ gameName }) => {
    // In production site the source of image will be an absolute path linking to address on our server
    return (
        <img src={cover} alt={`${gameName} game cover`} className="poster" />
    );
};

Poster.propTypes = {
    gameName: PropTypes.string.isRequired
};

export default Poster;
