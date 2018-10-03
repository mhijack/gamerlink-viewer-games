import React, { Component } from 'react';

import './PostJoinInput.css';

class PostInput extends Component {
    state = {
        inputValue: ''
    };

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleFocus = e => {
        // Prevents focus to mimic disabled input field
        e.target.blur();
    };

    render() {
        const isJoined = this.props.isJoined;

        return (
            <input
                className="post__join--input"
                value={this.state.inputValue}
                onChange={isJoined ? null : this.handleChange}
                onFocus={isJoined ? this.handleFocus : null}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default PostInput;
