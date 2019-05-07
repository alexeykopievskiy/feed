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

import popup1 from '../../assets/popup_1.png';
import popup2 from '../../assets/popup_2.png';
import popup3 from '../../assets/popup_3.png';

class CardFeed extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCardHover: false,
      isAuthorActive: false,
      isDropdownActive: false,
    };
  }

  onHoverContainer = () => {
    this.setState({ isCardHover: !this.state.isCardHover });
  };

  handleAuthorClick = () => {
    this.setState({ isAuthorActive: !this.state.isAuthorActive });
  };

  handleDropdownClick = () => {
    this.setState({ isDropdownActive: !this.state.isDropdownActive });
  };

  render() {
    const { className } = this.props;
    const { isCardHover, isAuthorActive, isDropdownActive } = this.state;

    return (
      <div
        onMouseEnter={this.onHoverContainer}
        onMouseLeave={this.onHoverContainer}
        className={cls(
          styles['container'],
          isCardHover && styles['container--hover']
        )}
      >
        {isDropdownActive && (
          <div className={styles['dropdown']}>
            <Button theme="null" className={styles['dropdown-btn']}>
              <Icon className={styles['dropdown-icon']} name="hide" size={16} />
              <span className={styles['dropdown-text']}>Hide</span>
            </Button>
            <Button theme="null" className={styles['dropdown-btn']}>
              <Icon className={styles['dropdown-icon']} name="flag" size={16} />
              <span className={styles['dropdown-text']}>Flag</span>
            </Button>
            <Button theme="null" className={styles['dropdown-btn']}>
              <Icon
                className={styles['dropdown-icon']}
                name="share"
                size={16}
              />
              <span className={styles['dropdown-text']}>Share</span>
            </Button>
          </div>
        )}
        {isAuthorActive && (
          <div className={styles['popup-author']}>
            <div
              className={
                styles[
                  'popup-author                                                           '
                ]
              }
            >
              <div className={styles['popup-author-head']}>
                <div className={styles['header-author']}>
                  <img
                    className={styles['popup-author-avatar']}
                    src={avatarSmall}
                  />
                  <p className={styles['popup-author-title']}>Bruno montero</p>
                </div>
                <Button size="sm" theme="dark">
                  Follow
                </Button>
              </div>
              <div className={styles['popup-author-badges']}>
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
                    <Icon
                      className={styles['icon-like']}
                      name="like"
                      size={14}
                    />
                    <span className={styles['badge-text']}>511</span>
                  </div>
                </Button>
                <Button theme="null" className={styles['badge-btn']}>
                  <div className={styles['badge']}>
                    <Icon
                      className={styles['icon-like']}
                      name="followers"
                      size={14}
                    />
                    <span className={styles['badge-text']}>1511</span>
                  </div>
                </Button>
              </div>
              <div className={styles['popup-author-content']}>
                <Link to="">
                  <img src={popup1} />
                </Link>
                <Link to="">
                  <img src={popup2} />
                </Link>
                <Link to="">
                  <img src={popup3} />
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className={styles['inner']}>
          <div className={styles['header']}>
            <Button
              onClick={this.handleAuthorClick}
              theme="null"
              className={styles['header-link']}
              to=""
            >
              <div className={styles['header-author']}>
                <img className={styles['avatar']} src={avatarSmall} />
                <p className={styles['header-title']}>Bruno montero</p>
              </div>
            </Button>
            <Button theme="null" onClick={this.handleDropdownClick}>
              <Icon
                name="more"
                className={cls(
                  styles['icon-more'],
                  isCardHover && styles['icon--hover']
                )}
                size={12}
              />
            </Button>
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
                    <Icon
                      name="comments"
                      size={14}
                      className={styles['icon-comments']}
                    />
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
