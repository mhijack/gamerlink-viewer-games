import React, { Component } from 'react';

import './PostContainer.css';

import PostDetail from '../../components/PostDetail/PostDetail';
import PostInput from '../../components/PostInput/PostInput';

class PostContainer extends Component {
    state = {
        game: 'Fortnite',
        streamPlatform: 'Twitch',
        post: {
            author: 'InVerum',
            mainDescription:
                'Going to be playing some 4P Fortnite with viewers from 4-8PM. I will add you as a friend and messag on Twitch if you get selected, so make sure you add your ID when joining!',
            extraDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu faucibus justo. Nam aliquet finibus sodales. Nam eget mollis diam. Aliquam id magna eget velit tincidunt lacinia. Praesent vitae ex nulla.Curabitur quis mollis justo. Aliquam tristique at felis eu suscipit. Fusce posuere aliquam orci, quis tempus odio maximus nec. Pellentesque lobortis est quis metus mattis euismod. Aenean velit nunc, bibendum finibus nulla ut, blandit gravida orci. Duis urna arcu, eleifend quis luctus iaculis, tristique id sem. Aliquam ullamcorper auctor erat a elementum. Curabitur a eleifend nulla. Phasellus efficitur nunc mauris, ut consequat ipsum sagittis at. Fusce at sem in leo dictum interdum. Ut congue purus orci, sit amet cursus magna porta id.',
            streaming: true,
            liveStreamAddress: '#',
            numSlots: 3
        }
    };

    render() {
        const { post } = this.state;
        return (
            <div className="post-container game-background">
                <PostDetail post={post} />
                <PostInput />
            </div>
        );
    }
}

export default PostContainer;
