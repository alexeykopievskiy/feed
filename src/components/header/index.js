import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import styles from './index.scss';

import Logo from '../logo';
import Link from '../link';
import Notifications from '../notifications';
import Button from '../button';

import avatar from '../../assets/avatar-profile.png';

const Header = props => {
  const { className } = props;

  return (
    <header className={cls(styles['header'], className)}>
      <div className={styles['nav-bar']}>
        <Link to="">
          <Logo className={styles['logo']} />
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
        <Button size="md">Create project</Button>
        <div className={styles['avatar']}>
          <Button theme="null">
            <img src={avatar} />
          </Button>
        </div>
      </div>
    </header>
  );
};

const { string } = PropTypes;

Header.propTypes = {
  className: string,
};

export default Header;
