import React, { Component } from 'react';

import PostJoinInput from './PostJoinInput/PostJoinInput';
import PostJoinButton from './PostJoinButton/PostJoinButton';

import './PostJoinInputContainer.css';
import PropTypes from 'prop-types';

class PostJoinInputContainer extends Component {
    state = {
        inputValue: ''
    };

    // controlled input element
    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    /*  @params: isJoined: Joined state when the user clicks join/leave button
    **  @return: void
    */
    handleJoinGame = (isJoined, gameId) => {
        if (this.state.inputValue.length > 0) {
            // Start loading screen
            this.props.handleToggleLoadingText(true);

            // I used setTimeout to mimic contacting server (assumes we ALWAYS get a success response)
            setTimeout(() => {
                // Update numEntered with isJoined
                this.props.handleUpdateEnteredCount(isJoined);
                // Stop loading screen
                this.props.handleToggleJoined();
            }, 1000);
        } else {
            alert('Please enter valid game ID!');
        }
    };

    render = () => {
        const { isJoined, gameName, buttonDisabled } = this.props;
        const inputConfig = {
            placeholder: `${gameName} ID`
        };

        return (
            <div className="post__join--input-container">
                <PostJoinInput
                    placeholder={inputConfig.placeholder}
                    isJoined={isJoined}
                    handleInputChange={this.handleInputChange}
                    inputValue={this.state.inputValue}
                    handleJoinGame={isJoined =>
                        this.handleJoinGame(isJoined, this.state.inputValue)
                    }
                />
                <PostJoinButton
                    isJoined={isJoined}
                    handleJoinGame={isJoined =>
                        this.handleJoinGame(isJoined, this.state.inputValue)
                    }
                    buttonDisabled={buttonDisabled}
                />
            </div>
        );
    };
}

PostJoinInputContainer.propTypes = {
    isJoined: PropTypes.bool.isRequired,
    gameName: PropTypes.string.isRequired,
    handleToggleLoadingText: PropTypes.func.isRequired,
    handleUpdateEnteredCount: PropTypes.func.isRequired,
    handleToggleJoined: PropTypes.func.isRequired
};

export default PostJoinInputContainer;
