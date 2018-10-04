import React from 'react';

import Poster from './Poster/Poster';
import PostDescription from './PostDescription/PostDescription';

import './PostDetail.css';
import PropTypes from 'prop-types';

/*
*   @Container component for game poster and post descriptions
*/
const PostDetail = ({ post, gameName }) => {
    return (
        <div className="post-detail">
            <Poster gameName={gameName} />
            <PostDescription post={post} />
        </div>
    );
};

PostDetail.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostDetail;
