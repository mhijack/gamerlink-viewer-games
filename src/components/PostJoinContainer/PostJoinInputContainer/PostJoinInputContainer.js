import React from 'react';

import PostJoinInput from './PostJoinInput/PostJoinInput';
import PostJoinButton from './PostJoinButton/PostJoinButton';

import './PostJoinInputContainer.css';

const PostJoinInputContainer = props => {
    return (
        <div className="post__join--input-container">
            <PostJoinInput />
            <PostJoinButton />
        </div>
    )
}

export default PostJoinInputContainer;