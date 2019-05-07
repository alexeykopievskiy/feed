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

const Icon = props => {
  const { size, name, png, onClick, ...iconProps } = props;
  const Component = components[name];
  let className = cls(styles.icon, props.className, png && styles.png);

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
      />
    );
  }

  return null;
};

Icon.propTypes = {
  className: string,
  size: number,
  name: string.isRequired,
  onClick: func,
  png: bool,
};

Icon.defaultProps = {
  size: 24,
  onClick: () => {},
};

export default Icon;
