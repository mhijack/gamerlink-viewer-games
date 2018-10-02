import React from 'react';

import { Transition } from 'react-transition-group';

const ExtraDescription = ({ isShowMore, text }) => {
    return (
        <Transition
            classNames="description--extra"
            timeout={200}
            in={isShowMore}
        >
            {/* {this.state.isShowMore ? (
                        <p className="post__description--extra">
                            <br />
                            {extraDescription}
                        </p>
                    ) : null} */}
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
                        extraDescriptionStyle['maxHeight'] = '100vh';
                        break;
                    case 'exited':
                        extraDescriptionStyle['maxHeight'] = '0';
                        break;
                }
                return (
                    <p
                        className="post__description--extra"
                        style={extraDescriptionStyle}
                    >
                        <br />
                        {text}
                    </p>
                );
            }}
        </Transition>
    );
};

export default ExtraDescription;
