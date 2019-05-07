import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import styles from './index.scss';

import search from './svg/search';
import messages from './svg/messages';
import notification from './svg/notification';
import tokens from './svg/tokens';
import more from './svg/more';
import like from './svg/like';
import comments from './svg/comments';
import hide from './svg/hide';
import share from './svg/share';
import flag from './svg/flag';
import followers from './svg/followers';

const { bool, number, func, string } = PropTypes;

const components = {
  search,
  messages,
  notification,
  tokens,
  more,
  like,
  comments,
  hide,
  share,
  flag,
  followers,
};

const xmlns = 'http://www.w3.org/2000/svg';
const version = 1.1;

class Icon extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isIconHovered: false,
      isIconActive: false,
    };
  }

  onIconHover = () => {
    this.setState({ isIconHovered: !this.state.isIconHovered });
  };

  onIconPush = () => {
    console.log('push');
    this.setState({ isIconActive: !this.state.isIconActive });
  };

  render() {
    const {
      size,
      name,
      png,
      onClick,
      hover,
      hovered,
      notification,
      ...iconProps
    } = this.props;
    const { isIconHovered, isIconActive } = this.state;
    const Component = components[name];
    let className = cls(styles.icon, this.props.className, png && styles.png);

    let iconHover =
      isIconHovered || hovered || isIconActive
        ? hover
          ? hover
          : isIconActive
          ? '#9f9fab'
          : '#4e47ee'
        : '#3b3a3a';

    if (png) {
      return (
        <img
          onClick={onClick}
          className={className}
          width={size}
          height={size}
          src={Component}
          alt=""
        />
      );
    } else if (Component) {
      return (
        <Component
          {...{ xmlns, version, onClick, ...iconProps }}
          className={className}
          width={size}
          height={size}
          onMouseEnter={this.onIconHover}
          onMouseLeave={this.onIconHover}
          onMouseUp={this.onIconPush}
          onMouseDown={this.onIconPush}
          color={iconHover}
          notify={notification}
        />
      );
    }

    return null;
  }
}

Icon.propTypes = {
  className: string,
  size: number,
  name: string.isRequired,
  onClick: func,
  png: bool,
  hover: string,
};

Icon.defaultProps = {
  size: 24,
  notification: false,
  hovered: false,
  onClick: () => {},
};

export default Icon;
