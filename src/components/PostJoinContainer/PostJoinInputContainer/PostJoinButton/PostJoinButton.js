import React from 'react';

import Button from '../../../Button/Button';

import './PostJoinButton.css';

const PostJoinButton = ({ isJoined, handleJoinGame }) => {
    // const style = isJoined
    //     ? {
    //           backgroundColor: 'linear-gradient(#66e979, #4fcd61)'
    //       }
    //     : {};

    const classes = ['post__join--button'];
    classes.push(isJoined ? 'leave' : 'join');

    return (
        <Button
            text={isJoined ? 'LEAVE' : 'JOIN'}
            className={classes.join(' ')}
            onClick={() => handleJoinGame(!isJoined)}
        />
    );
};

export default PostJoinButton;
