import React from 'react';
import cls from 'classnames';
import Container from '../../components/container';
import styles from './index.scss';
import CardFeed from '../../components/card-feed';
import author1 from '../../assets/avatar-profile.jpg';
import author2 from '../../assets/avatar-profile2.jpg';

import image1 from '../../assets/card_1.png';
import image2 from '../../assets/card_2.jpg';
import Button from '../../components/button';
import Icon from '../../components/icon';

class ExploreContainer extends React.PureComponent {
  render() {
    return (
      <div className={styles['root']}>
        <Container className={styles['container']}>
          <div className={styles['feed-container']}>
            <div className={styles['feed-block']}>
              <div className={styles['feed-header']}>
                <div className={styles['feed-head']}>
                  <h2 className={styles['feed-title']}>Trending</h2>
                  <Button
                    size="sm"
                    theme="dark"
                    className={styles['feed-follow']}
                  >
                    Follow
                  </Button>
                </div>
                <Button
                  className={cls(
                    styles['feed-more'],
                    styles['feed-more--responsive']
                  )}
                  theme="null"
                >
                  <div className={styles['icon-container']}>
                    <Icon
                      className={styles['icon-main']}
                      name="plus"
                      size={9}
                    />
                    <Icon
                      classname={styles['icon-mobile']}
                      name="plus"
                      size={17}
                    />
                  </div>
                  <p className={styles['feed-more-p--main']}>View more</p>
                  <p className={styles['feed-more-p--mobile']}>More</p>
                </Button>
              </div>
              <div className={styles['feed-block__container']}>
                <CardFeed
                  logo={author1}
                  image={image1}
                  author="Bruno montero"
                />
                <CardFeed
                  logo={author2}
                  image={image2}
                  author="Paul van dyke"
                />
                <CardFeed
                  logo={author1}
                  image={image1}
                  author="Bruno montero"
                />
                <CardFeed
                  logo={author2}
                  image={image2}
                  author="Paul van dyke"
                />
                <CardFeed
                  logo={author1}
                  image={image1}
                  author="Bruno montero"
                />
                <CardFeed
                  logo={author2}
                  image={image2}
                  author="Paul van dyke"
                />
              </div>
            </div>
            <div className={styles['feed-divider']} />
          </div>
        </Container>
      </div>
    );
  }
}

export default ExploreContainer;
