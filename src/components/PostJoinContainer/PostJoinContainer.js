import React, { Component } from 'react';

import PostJoinInputContainer from './PostJoinInputContainer/PostJoinInputContainer';

import './PostJoinContainer.css';
import PropTypes from 'prop-types';

class PostJoinContainer extends Component {
    state = {
        isJoined: false,
        // Controls loading state after user clicked join/leave button
        isJoining: false
    };

    // Resets joining state to false (removing loading screen)
    // Toggles joined state
    handleToggleJoined = () => {
        this.setState(prevState => ({
            isJoined: !prevState.isJoined,
            isJoining: false
        }));
    };

    // Initiates loading screen
    handleToggleLoadingText = isJoining => {
        this.setState({ isJoining });
    };

    render() {
        // Join Confirmation text
        let joiningConfirmation = this.state.isJoined ? (
            <div className="post__join--confirmation">
                Once the viewer game starts you will be notified if you are
                selected.
            </div>
        ) : null;
        // Notify user that we're waiting response from server during joining and leaving
        if (this.state.isJoining) {
            joiningConfirmation = (
                <div className="post__join--confirmation">
                    {this.state.isJoined ? 'Leaving' : 'Joining'}
                    ...
                </div>
            );
        }

        return (
            <div className="post__join--container">
                <PostJoinInputContainer
                    isJoined={this.state.isJoined}
                    gameName={this.props.gameName}
                    handleToggleLoadingText={this.handleToggleLoadingText}
                    handleUpdateEnteredCount={
                        this.props.handleUpdateEnteredCount
                    }
                    handleToggleJoined={this.handleToggleJoined}
                    buttonDisabled={this.state.isJoining}
                />

                {/* Did not extract it into a component because it is only a single line of text, and won't be re-used. */}
                {joiningConfirmation}
            </div>
        );
    }
}

PostJoinContainer.propTypes = {
    gameName: PropTypes.string.isRequired,
    numEntered: PropTypes.number.isRequired,
    handleUpdateEnteredCount: PropTypes.func.isRequired
};

export default PostJoinContainer;
