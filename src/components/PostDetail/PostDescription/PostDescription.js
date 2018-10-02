import React from 'react';

import PostDescriptionInfo from './PostDescriptionInfo/PostDescriptionInfo';

import TwitchIcon from 'react-inlinesvg';
import twitchIcon from '../../../assets/img/twitch.svg';

import PropTypes from 'prop-types';

import './PostDescription.css';

const PostDescription = ({ post }) => {
    return (
        <div className="post-description">
            {post.streaming ? (
                <a href={post.liveStreamAddress} className="twitch-icon">
                    <TwitchIcon src={twitchIcon} />
                </a>
            ) : null}
            <PostDescriptionInfo post={post} />
        </div>
    );
};

PostDescription.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostDescription;
