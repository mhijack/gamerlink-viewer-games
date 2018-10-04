import React from 'react';

import './PostUser.css';

import user from '../../../../../assets/img/user.svg';
import InlineSVG from 'react-inlinesvg';

const PostUser = ({ numSlots, style }) => {
    return (
        <p className="post__user">
            <span className="user--icon">
                <InlineSVG
                    src={user}
                    className="post__user--icon"
                    style={style}
                />
            </span>
            {numSlots} Slots
        </p>
    );
};

export default PostUser;
