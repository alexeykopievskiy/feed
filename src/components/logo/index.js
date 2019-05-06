import React from 'react';
import PropTypes from 'prop-types';
import logo from './Lava_logo.svg';

const Logo = props => {
  const { className } = props;

  return (
    <img src={logo} className={className} />
  );
};


const { string } = PropTypes;

Logo.propTypes = {
  className: string,
}

export default Logo;
