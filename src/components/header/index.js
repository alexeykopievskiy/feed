import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import styles from './index.scss';

import Logo from '../logo';
import Link from '../link';
import Notifications from '../notifications';
import Button from '../button';
import Icon from '../icon';

import avatar from '../../assets/avatar-profile.jpg';
import logoM from '../../assets/lava-m.png';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  onMenuOpen = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const { className } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <header className={cls(styles['header'], className)}>
        {isMenuOpen && (
          <div className={styles['header-collapse']}>
            <div className={styles['header-collapse-container']}>
              <div className={styles['header-collapse-head']}>
                <div className={styles['header-collapse-line']}>
                  <div className={styles['header-collapse-user']}>
                    <div className={styles['header-collapse-avatar']}>
                      <img src={avatar} />
                    </div>
                    <p>Bruno montero</p>
                  </div>
                  <Icon
                    className={styles['header-collapse-icon']}
                    name="cross"
                    onClick={this.onMenuOpen}
                    size={22}
                    color="#d2d2db"
                  />
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
              </div>
              <div className={styles['header-collapse-content']}>
                <div className={styles['nav-mobile']}>
                  <Link className={styles['nav-item']} to="">
                    Feed
                  </Link>
                  <Link className={styles['nav-item']} to="">
                    Explore
                  </Link>
                  <Link className={styles['nav-item']} to="">
                    ArtFeed
                  </Link>
                  <Link className={styles['nav-item']} to="">
                    ArtBlog
                  </Link>
                </div>
                <Button className={styles['button-create--mobile']}>
                  Create project
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className={styles['nav-bar']}>
          <Icon name="menu" size={25} onClick={this.onMenuOpen} />
          <Link to="">
            <Logo className={styles['logo']} />
            <img src={logoM}  className={styles['logo--mobile']} />
          </Link>
          <div className={styles['nav']}>
            <Link className={styles['nav-item']} to="">
              Feed
            </Link>
            <Link className={styles['nav-item']} to="">
              Explore
            </Link>
            <Link className={styles['nav-item']} to="">
              ArtFeed
            </Link>
            <Link className={styles['nav-item']} to="">
              ArtBlog
            </Link>
          </div>
        </div>
        <div className={styles['status-bar']}>
          <Notifications />
          <Button size="md" className={styles['button-create']}>
            Create project
          </Button>
          <Button className={styles['button-avatar']} theme="null">
            <img className={styles['avatar']} src={avatar} />
          </Button>
        </div>
      </header>
    );
  }
}

const { string } = PropTypes;

Header.propTypes = {
  className: string,
};

export default Header;
