import React from 'react';

import './PostDetail.css';

import Poster from './Poster/Poster';

import PostDescription from './PostDescription/PostDescription';

const PostDetail = props => {
    return (
        <div className="post-detail">
            <Poster />
            <PostDescription streaming={props.streaming} />
        </div>
    );
};

export default PostDetail;
