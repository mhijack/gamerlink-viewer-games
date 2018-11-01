import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PostContainer.css';

import PostDetail from '../../components/PostDetail/PostDetail';
import PostJoinContainer from '../../components/PostJoinContainer/PostJoinContainer';

import * as postActions from '../../store/actions/post';

/*
*   @Root container of entire application's functionality
*/
class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { post } = this.props;

        return (
            <div className="post-container game-background">
                <PostDetail post={post} gameName={this.props.gameName} />
                <PostJoinContainer
                    gameName={this.props.gameName}
                    numEntered={this.props.post.numEntered}
                    handleUpdateEnteredCount={
                        this.props.handleUpdateEnteredCount
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.postReducer.post,
        gameName: state.postReducer.gameName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUpdateEnteredCount: isJoined =>
            dispatch(postActions.toggleJoinLeave(isJoined))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer);
