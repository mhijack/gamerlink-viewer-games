import React from 'react';

import twitchIcon from '../../../assets/img/twitch.svg';

const PostTwitchIcon = props => {
    return props.streaming ? (
        <img className="twitch-icon" src={twitchIcon} alt="twitch" />
    ) : null;
};

export default PostTwitchIcon;
