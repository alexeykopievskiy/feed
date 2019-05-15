import React from 'react';
import Header from '../../components/header';
import Container from '../../components/container';
import styles from './index.scss';
import CardFeed from '../../components/card-feed';
import author1 from '../../assets/avatar-profile.jpg';
import author2 from '../../assets/avatar-profile2.jpg';
import author3 from '../../assets/avatar-profile3.jpg';
import author4 from '../../assets/avatar-profile4.jpg';
import author5 from '../../assets/avatar-profile5.jpg';

import image1 from '../../assets/card_1.png';
import image2 from '../../assets/card_2.jpg';
import image3 from '../../assets/card_3.jpg';
import image4 from '../../assets/card_4.jpg';
import image6 from '../../assets/card_6.jpg';
import image7 from '../../assets/card_7.jpg';
import image8 from '../../assets/card_8.jpg';


class FeedContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Container className={styles['container']}>
          <div className={styles['feed-container']}>
            <CardFeed logo={author1} image={image1} author="Bruno montero" />
            <CardFeed logo={author2} image={image2} author="Paul van dyke"/>
            <CardFeed logo={author3} image={image3} author="Rokk Ebol" />
            <CardFeed logo={author4} image={image4} author="Samuel D." />
            <CardFeed logo={author5} image={image1} author="Step by Step" />
            <CardFeed logo={author1} image={image6} author="Fuckthedesign" />
            <CardFeed logo={author2} image={image7} author="Bruno Montero" />
            <CardFeed logo={author3} image={image8} author="SMPL" />
            <CardFeed logo={author4} image={image1} author="Paul van dyke"/>
          </div>
        </Container>
      </div>
    );
  }
}

export default FeedContainer;
