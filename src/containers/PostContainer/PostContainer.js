import React, { Component } from 'react';

import './PostContainer.css';

import PostDetail from '../../components/PostDetail/PostDetail';
import PostInput from '../../components/PostInput/PostInput';

class PostContainer extends Component {
    state = {
        game: 'Fortnite',
        streaming: true,
        streamPlatform: 'Twitch'
    };

    render() {
        return (
            <div className="post-container game-background">
                <PostDetail streaming={this.state.streaming} />
                <PostInput />
            </div>
        );
    }
}

export default PostContainer;
