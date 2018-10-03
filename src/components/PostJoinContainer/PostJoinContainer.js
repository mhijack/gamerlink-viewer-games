import React, { Component } from 'react';

import PostJoinInputContainer from './PostJoinInputContainer/PostJoinInputContainer';

import './PostJoinContainer.css';

// determines
class PostJoinContainer extends Component {
    state = {
        isJoined: false
    };

    handleJoinGame = isJoining => {
        // 1. Prevent user from typing in input field
        // 2. Register user in database, so that:
        // if joining, increment ENTERED by 1; if leaving, decrement ENTERED by 1;

        if (isJoining)
            console.log('joining');
        else
            console.log('leaving');
        setTimeout(() => {
            this.setState(prevState => ({
                isJoined: !prevState.isJoined
            }));
        }, 1000);
    };

    render() {
        return (
            <div className="post__join--container">
                <PostJoinInputContainer
                    isJoined={this.state.isJoined}
                    gameName={this.props.gameName}
                    handleJoinGame={this.handleJoinGame}
                />

                {/* Did not extract it into a component because it is only a single line of text, and won't be re-used. */}
                {this.state.isJoined ? (
                    <div className="post__join--confirmation">
                        Once the viewer game starts you will be notified if you
                        are selected.
                    </div>
                ) : null}
            </div>
        );
    }
}

export default PostJoinContainer;
