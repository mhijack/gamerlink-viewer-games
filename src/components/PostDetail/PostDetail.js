import React from 'react';

import './PostDetail.css';

import Poster from './Poster/Poster';

import PostDescription from './PostDescription/PostDescription';

import PropTypes from 'prop-types';

const PostDetail = ({ post }) => {
    return (
        <div className="post-detail">
            <Poster />
            <PostDescription post={post} />
        </div>
    );
};

PostDetail.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostDetail;
