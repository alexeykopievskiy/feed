import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '.';
import styles from './stories.scss';

const stories = storiesOf('components/<Header>', module);

stories.add('Default theme', () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
});
