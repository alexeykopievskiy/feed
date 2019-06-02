import React from 'react';
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
      <Icon name="hide" className={styles.icon} />
      <Icon name="share" className={styles.icon} />
      <Icon name="flag" className={styles.icon} />
      <Icon name="followers" className={styles.icon} />
      <Icon name="cross" className={styles.icon} />
      <Icon name="all" className={styles.icon} />
      <Icon name="architecture" className={styles.icon} />
      <Icon name="design" className={styles.icon} />
      <Icon name="illustration" className={styles.icon} />
      <Icon name="motion" className={styles.icon} />
      <Icon name="photo" className={styles.icon} />
      <Icon name="product" className={styles.icon} />
      <Icon name="ui" className={styles.icon} />
      <Icon name="ux" className={styles.icon} />
      <Icon name="plus" className={styles.icon} />
    </div>
  );
});
