import * as actionTypes from './actionTypes';

export const toggleJoinLeave = isJoined => {
    return {
        type: actionTypes.TOGGLE_JOIN_LEAVE,
        isJoined
    };
};
