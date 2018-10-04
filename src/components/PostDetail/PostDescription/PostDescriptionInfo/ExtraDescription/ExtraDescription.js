import React from 'react';

import { Transition } from 'react-transition-group';

import './ExtraDescription.css';

const ExtraDescription = ({ isShowMore, text }) => {
    return (
        <Transition
            classNames="description--extra"
            timeout={{
                enter: 300,
                exit: 0
            }}
            in={isShowMore}
            // mountOnEnter
            // unmountOnExit
        >
            {state => {
                let extraDescriptionStyle = {};

                switch (state) {
                    case 'entering':
                        extraDescriptionStyle['maxHeight'] = '0';
                        break;
                    case 'entered':
                        extraDescriptionStyle['maxHeight'] = '100vh';
                        break;
                    case 'exiting':
                        extraDescriptionStyle['maxHeight'] = '0';
                        break;
                    case 'exited':
                        extraDescriptionStyle['maxHeight'] = '0';
                        extraDescriptionStyle['paddingTop'] = '0';
                        break;
                    default:
                        break;
                }

                return (
                    <p
                        className="post__description--extra"
                        style={extraDescriptionStyle}
                    >
                        {text}
                    </p>
                );
            }}
        </Transition>
    );
};

export default ExtraDescription;
