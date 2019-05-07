import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { Button as ButtonAntd } from 'antd';
import styles from './index.scss';

const themes = ['default', 'null', 'dark', 'black-link', 'red-link', 'empty'];
const sizes = ['lg', 'md', 'sm'];

const Button = props => {
  const { theme, size, ...other } = props;
  const className = cls(
    styles.button,
    props.className,
    styles[theme],
    styles[size],
    `button--${theme}`,
    `button--${size}`
  );

  return (
    <ButtonAntd {...other} className={className}>
      {props.children}
    </ButtonAntd>
  );
};

const { func, node, oneOf, string } = PropTypes;

Button.propTypes = {
  children: node,
  className: string,
  theme: oneOf(themes),
  size: oneOf(sizes),
  onClick: func,
};

Button.defaultProps = {
  theme: themes[0],
  onClick: () => {},
};

export default Button;
