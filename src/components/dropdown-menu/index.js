import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class DropdownMenu extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles['dropdown']}>
        {children}
      </div>
    );
  }
}

const { node } = PropTypes;

DropdownMenu.propTypes = {
  children: node,
};

export default DropdownMenu;
