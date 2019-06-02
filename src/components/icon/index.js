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
import cross from './svg/cross';
import menu from './svg/menu';
import all from './svg/all';
import architecture from './svg/architecture';
import design from './svg/design';
import illustration from './svg/illustration';
import motion from './svg/motion';
import photo from './svg/photo';
import product from './svg/product';
import ui from './svg/ui';
import ux from './svg/ux';
import plus from './svg/plus';

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
  cross,
  menu,
  all,
  architecture,
  design,
  illustration,
  motion,
  photo,
  product,
  ui, 
  ux,
  plus,
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

  onIconHoverUp = () => {
    this.setState({ isIconHovered: true });
  };

  onIconHoverDown = () => {
    this.setState({ isIconHovered: false });
  };

  onIconUp = () => {
    this.setState({ isIconActive: false });
    this.setState({ isIconHovered: false });
  };

  onIconDown = () => {
    this.setState({ isIconActive: true });
    this.setState({ isIconHovered: false });
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
      color,
      press,
      ...iconProps
    } = this.props;
    const { isIconHovered, isIconActive } = this.state;
    const Component = components[name];
    let className = cls(styles.icon, this.props.className, png && styles.png);

    let iconColor = '';

    if (isIconActive) {
      iconColor = press ? press : '#e0e0e8';
    } else if (isIconHovered || hovered) {
      iconColor = hover ? hover : '#4e47ee';
    } else {
      iconColor = color ? color : '#3b3a3a';
    }

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
          onMouseEnter={this.onIconHoverUp}
          onMouseLeave={this.onIconHoverDown}
          onMouseUp={this.onIconUp}
          onMouseDown={this.onIconDown}
          color={iconColor}
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
