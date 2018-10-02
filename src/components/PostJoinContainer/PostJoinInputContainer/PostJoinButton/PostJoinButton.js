import React from 'react';

import Button from '../../../Button/Button';

import './PostJoinButton.css';

const PostJoinButton = ({ isJoined }) => {
    // const style = isJoined
    //     ? {
    //           backgroundColor: 'linear-gradient(#66e979, #4fcd61)'
    //       }
    //     : {};
    const style = {
        background: 'linear-gradient(#66e979, #4fcd61)',
        border: '1px solid #2bb041'
    };

    return (
        <Button
            text="JOIN"
            className="post__join--button"
            onClick={() => console.log('toggling join and leave')}
            style={style}
        />
    );
};

export default PostJoinButton;
