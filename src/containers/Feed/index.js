import React from 'react';
import Header from '../../components/header';
import Container from '../../components/container';
import styles from './index.scss';
import CardFeed from '../../components/card-feed';

class FeedContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Container className={styles['container']}>
          <div className={styles['feed-container']}>
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
          </div>
        </Container>
      </div>
    );
  }
}

export default FeedContainer;
