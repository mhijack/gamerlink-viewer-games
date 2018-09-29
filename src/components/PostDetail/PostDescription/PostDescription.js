import React from 'react';

import PostDescriptionInfo from './PostDescriptionInfo/PostDescriptionInfo';

import SVG from 'react-inlinesvg';
import twitchIcon from '../../../assets/img/twitch.svg';

import './PostDescription.css';

const PostDescription = props => {
    return (
        <div className="post-description">
            {props.streaming ? (
                <SVG src={twitchIcon} className="twitch-icon" />
            ) : null}
            <PostDescriptionInfo streaming={props.streaming} />
        </div>
    );
};

export default PostDescription;
