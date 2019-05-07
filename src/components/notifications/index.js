import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import Icon from '../icon';
import Button from '../button';

const Notifications = props => {
  return (
    <div className={styles['notification-bar']}>
      <div className={styles['notification-item']}>
        <Button theme="null">
          <Icon name="search" size={16} />
        </Button>
      </div>
      <div className={styles['notification-item']}>
        <Button theme="null">
          <Icon name="messages" notification="true" size={16} />
        </Button>
      </div>
      <div className={styles['notification-item']}>
        <Button theme="null">
          <Icon name="notification" size={16} />
        </Button>
      </div>
    </div>
  );
};

const { string } = PropTypes;

Notifications.propTypes = {
  className: string,
};

export default Notifications;
