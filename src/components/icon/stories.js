import React from 'react';
import cls from 'classnames';
import { storiesOf } from '@storybook/react';
import Icon from '.';
import styles from './stories.scss';

const stories = storiesOf('components/<Icon>', module);

stories.add('x24', () => {
  return (
    <div>
      <Icon name="search" className={styles.icon} />
      <Icon name="messages" className={styles.icon} />
      <Icon name="notification" className={styles.icon} />
      <Icon name="tokens" className={styles.icon} />
      <Icon name="like" className={styles.icon} />
      <Icon name="more" className={styles.icon} />
      <Icon name="comments" className={styles.icon} />
    </div>
  );
});
