import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { Button as ButtonAntd } from 'antd';
import styles from './index.scss';

const themes = ['default', 'null', 'link', 'black-link', 'red-link', 'empty'];

const Button = props => {
  const { theme, ...other } = props;
  const className = cls(
    styles.button,
    props.className,
    styles[theme],
    `button--${theme}`,
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
  onClick: func,
};

Button.defaultProps = {
  low: false,
  theme: themes[0],
  onClick: () => {},
};

export default Button;
