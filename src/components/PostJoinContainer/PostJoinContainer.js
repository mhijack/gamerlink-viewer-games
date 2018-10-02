import React, { Component } from 'react';

import PostJoinInputContainer from './PostJoinInputContainer/PostJoinInputContainer';
import PostJoinConfirmation from './PostJoinConfirmation/PostJoinConfirmation';

import './PostJoinContainer.css';

// determines
class PostJoinContainer extends Component {
    state = {
        isJoined: true
    };

    render() {
        return (
            <div className="post__join--container">
                <PostJoinInputContainer isJoined={this.state.isJoined} />
                {this.state.isJoined ? <PostJoinConfirmation /> : null}
            </div>
        );
    }
}

export default PostJoinContainer;
