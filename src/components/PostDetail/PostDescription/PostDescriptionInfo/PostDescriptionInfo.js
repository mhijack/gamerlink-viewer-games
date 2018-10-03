import React, { Component } from 'react';

import Button from '../../../Button/Button';
import ExtraDescription from './ExtraDescription/ExtraDescription';
import PostUser from './PostUser/PostUser';
import PostEntry from './PostEntry/PostEntry';

import live from '../../../../assets/img/live.svg';

import InlineSVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

import './PostDescriptionInfo.css';

class PostDescriptionInfo extends Component {
    state = {
        isShowMore: false,
        overFlowText: null
    };

    toggleShoreMore = () => {
        this.setState(prevState => {
            return {
                isShowMore: !prevState.isShowMore
            };
        });
    };

    formatPostInfo = post => {
        // Assuming description consists of 2 parts: main desc and extra desc
        // Length of main description is kept below a limit when the user is prompted input
        // No length restriction on extra desc
        let { mainDescription, extraDescription } = post;
        if (extraDescription.length > 0 && !this.state.isShowMore) {
            mainDescription = mainDescription.concat('...');
        }

        return {
            ...post,
            mainDescription,
            extraDescription
        };
    };

    render() {
        // Format full description text
        const {
            author,
            mainDescription,
            extraDescription
        } = this.formatPostInfo(this.props.post);

        // Applying button and live now text
        const styles = {
            showMoreButton: {
                outline: 'none',
                border: 'none',
                backgroundColor: 'transparent',
                color: '#4bcf61',
                display: 'block',
                fontSize: '1.4rem',
                cursor: 'pointer',
                margin: 'auto 0',
                alignSelf: 'flex-start',
                fontWeight: '700'
            },
            liveIconStyle: {
                height: '.8rem',
                width: '.8rem'
            },
            entryIconStyle: {
                height: '2rem',
                width: '2rem'
            }
        };

        return (
            <div className="post__description--info">
                <h3 className="post__username--text">
                    {author}

                    {this.props.post.streaming ? (
                        <span className="post__live">
                            <InlineSVG
                                src={live}
                                className="post__live--icon"
                                style={styles.liveText}
                            />
                            Live Now
                        </span>
                    ) : null}
                </h3>

                <p className="post__description--main">{mainDescription}</p>

                <ExtraDescription
                    isShowMore={this.state.isShowMore}
                    text={extraDescription}
                />

                {/* Display show more button ONLY IF user have extra description */}
                {extraDescription.length > 0 ? (
                    <Button
                        style={styles.showMoreButton}
                        onClick={this.toggleShoreMore}
                        text={this.state.isShowMore ? 'SHOW LESS' : 'SHOW MORE'}
                    />
                ) : null}

                <PostUser
                    numSlots={this.props.post.numSlots}
                    style={styles.liveIconStyle}
                />

                <PostEntry
                    style={styles.entryIconStyle}
                    numEntered={this.props.post.numEntered}
                />
            </div>
        );
    }
}

PostDescriptionInfo.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostDescriptionInfo;
