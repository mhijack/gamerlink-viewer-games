import React from 'react';

import './PostEntry.css';

import InlineSVG from 'react-inlinesvg';
import entry from '../../../../../assets/img/user-entered.svg';

const PostEntry = ({ numEntered, style }) => {
    return (
        <p className="post__entry">
            <span className="entry--icon">
                <InlineSVG
                    src={entry}
                    className="post__entry--icon"
                    style={style}
                />
            </span>
            {numEntered} ENTERED
        </p>
    );
};

export default PostEntry;
