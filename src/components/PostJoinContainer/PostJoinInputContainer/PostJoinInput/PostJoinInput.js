import React from 'react';

import './PostJoinInput.css';

const PostInput = props => {
    const {
        inputValue,
        handleInputChange,
        placeholder,
        isJoined,
        handleJoinGame
    } = props;

    return (
        <input
            className="post__join--input"
            value={inputValue}
            onChange={isJoined ? null : handleInputChange}
            // Prevents user from changing userID if they have already joined the game
            onFocus={isJoined ? e => e.target.blur() : null}
            placeholder={placeholder}
            onKeyDown={e => {
                if (e.keyCode === 13) {
                    handleJoinGame();
                    // Removes mouse cursor from input field
                    e.target.blur();
                }
            }}
        />
    );
};

export default PostInput;
