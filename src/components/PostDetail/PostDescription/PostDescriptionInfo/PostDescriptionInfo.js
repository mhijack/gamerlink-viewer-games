import React from 'react';

import live from '../../../../assets/img/live.svg';
import SVG from 'react-inlinesvg';

import './PostDescriptionInfo.css';

const PostDescriptionInfo = props => {
    const post = {
        author: 'InVerum',
        body:
            'Going to be playing some 4P Fortnite with viewers from 4-8PM. I will add you as a friend and messag on Twitch if you get selected, so make sure your ID when joining!'
    };

    const { author, body } = post;
    console.log('live', live);
    return (
        <div className="post__description--info">
            <h1 className="post__username--text">
                {author}
                <span className="post__live">
                    <SVG
                        src={live}
                        className="post__live--icon"
                        style={{ height: '8px', width: '8px' }}
                    />
                    Live Now
                </span>
            </h1>
            <p className="post__body">{body}</p>
        </div>
    );
};

export default PostDescriptionInfo;
