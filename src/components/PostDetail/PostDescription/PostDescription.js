import React from 'react';

import PostTwitchIcon from '../PostTwitchIcon/PostTwitchIcon';
import PostDescriptionInfo from './PostDescriptionInfo/PostDescriptionInfo';

import './PostDescription.css';

const PostDescription = props => {
    return (
        <div className="post-description">
            <PostTwitchIcon streaming={props.streaming} />
            <PostDescriptionInfo streaming={props.streaming} />
        </div>
    );
};

export default PostDescription;
