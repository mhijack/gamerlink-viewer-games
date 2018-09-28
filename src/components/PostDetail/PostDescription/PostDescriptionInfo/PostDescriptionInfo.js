import React from 'react';

import live from '../../../../assets/img/live.svg';

import './PostDescriptionInfo.css';

const PostDescriptionInfo = props => {
    return (
        <div className="post__description--info">
            <h1 className="post__username--text">InVerum<span className="post__live"><img className="post__live--icon" src={live} alt="is live now" /> Live Now</span></h1>
            <p className="post__body">
                Going to be playing some 4P Fortnite with viewers from 4-8PM. I
                will add you as a friend and messag on Twitch if you get
                selected, so make sure your ID when joining!
            </p>
        </div>
    );
};

export default PostDescriptionInfo;
