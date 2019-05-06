import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import styles from './index.scss';

import Logo from '../logo';
import Link from '../link';
import Notifications from '../notifications';
import Button from '../button';
import Icon from '../icon';

import avatarSmall from '../../assets/avatar-profile.png';
import contentMain from '../../assets/card_1.png';

class CardFeed extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCardHover: false,
    };
  }

  onHoverContainer = e => {
    this.setState({ isCardHover: !this.state.isCardHover });
  };

  render() {
    const { className } = this.props;
    const { isCardHover } = this.state;

    return (
      <div
        onMouseEnter={this.onHoverContainer}
        onMouseLeave={this.onHoverContainer}
        className={cls(
          styles['container'],
          isCardHover && styles['container--hover']
        )}
      >
        <div className={styles['inner']}>
          <div className={styles['header']}>
            <Link className={styles['header-link']} to="">
              <div className={styles['header-author']}>
                <img className={styles['avatar']} src={avatarSmall} />
                <p className={styles['header-title']}>Bruno montero</p>
              </div>
              <Button theme="null">
                <Icon
                  name="more"
                  className={cls(
                    styles['icon-more'],
                    isCardHover && styles['icon--hover']
                  )}
                  size={12}
                />
              </Button>
            </Link>
          </div>
          <div className={styles['content']}>
            <div className={styles['content-main']}>
              <img src={contentMain} />
              <div
                className={cls(
                  styles['content-hover'],
                  isCardHover && styles['content--hover']
                )}
              >
                <div className={styles['content-top']}>
                  <div className={styles['title']}>IKEA Digital concept</div>
                  <div className={styles['comments']}>
                    <Icon name="comments" size={14} className={styles['icon-comments']} />
                    <span className={styles['comments-text']}>21</span>
                  </div>
                </div>
                <div className={styles['content-bottom']}>
                  <p className={styles['content-description']}>
                    User Experience, Interaction Design, Animation Design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['footer']}>
            <Button theme="null" className={styles['badge-btn']}>
              <div className={styles['badge']}>
                <Icon
                  className={styles['icon-tokens']}
                  name="tokens"
                  size={14}
                />
                <span className={styles['badge-text']}>$ 956</span>
              </div>
            </Button>
            <Button theme="null" className={styles['badge-btn']}>
              <div className={styles['badge']}>
                <Icon className={styles['icon-like']} name="like" size={14} />
                <span className={styles['badge-text']}>511</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const { string } = PropTypes;

CardFeed.propTypes = {
  className: string,
};

export default CardFeed;
