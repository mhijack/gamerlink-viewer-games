import React from 'react';

import PostJoinInput from './PostJoinInput/PostJoinInput';
import PostJoinButton from './PostJoinButton/PostJoinButton';

import './PostJoinInputContainer.css';

const PostJoinInputContainer = ({ isJoined, gameName, handleJoinGame }) => {
    const inputConfig = {
        placeholder: `${gameName} ID`
    };

    return (
        <div className="post__join--input-container">
            <PostJoinInput placeholder={inputConfig.placeholder} isJoined={isJoined} />
            <PostJoinButton isJoined={isJoined} handleJoinGame={handleJoinGame}/>
        </div>
    );
};

export default PostJoinInputContainer;
