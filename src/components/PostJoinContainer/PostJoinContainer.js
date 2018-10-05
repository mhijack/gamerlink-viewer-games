import React, { Component } from 'react';

import PostJoinInputContainer from './PostJoinInputContainer/PostJoinInputContainer';

import './PostJoinContainer.css';
import PropTypes from 'prop-types';

class PostJoinContainer extends Component {
    state = {
        /*
        *   @Controls loading state after user clicked join/leave button
        */
        isJoining: false
    };

    /*
    *   @Expect this to be calculated on client side:
    *       - Server keeps an array or object of who has joined the game
    *       - Client side checks if current user is among it
    */
    componentDidMount = () => {
        this.setState({
            isJoined: false
        });
    };

    /*
    *   @Resets joining state to false (removing loading screen)
    *   @Toggles joined state
    */
    handleToggleJoined = () => {
        this.setState(prevState => ({
            isJoined: !prevState.isJoined,
            isJoining: false
        }));
    };

    /*
    *   @Initiates loading screen while joining/leaving
    */
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

        // @Show loading screen while waiting response from server during joining and leaving
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
