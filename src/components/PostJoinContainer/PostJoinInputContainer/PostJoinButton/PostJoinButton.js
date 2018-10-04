import React from 'react';

import Button from '../../../Button/Button';

import './PostJoinButton.css';

const PostJoinButton = ({ isJoined, handleJoinGame, buttonDisabled }) => {
    const classes = ['post__join--button'];
    classes.push(isJoined ? 'leave' : 'join');

    return (
        <Button
            text={isJoined ? 'LEAVE' : 'JOIN'}
            className={classes.join(' ')}
            onClick={() => handleJoinGame(isJoined)}
            disabled={buttonDisabled}
        />
    );
};

export default PostJoinButton;
