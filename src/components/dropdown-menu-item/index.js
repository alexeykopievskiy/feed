import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import Button from '../button';
import Icon from '../icon';

class DropdownMenuItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownItemHovered: false,
    };
  }

  handleDropdownItemHover = () => {
    this.setState({
      isDropdownItemHovered: !this.state.isDropdownItemHovered,
    });
  };

  render() {
    const { children, icon, ...rest } = this.props;
    const { isDropdownItemHovered } = this.state;

    return (
      <Button
        onMouseEnter={this.handleDropdownItemHover}
        onMouseLeave={this.handleDropdownItemHover}
        theme="null"
        className={styles['dropdown-btn']}
      >
        <Icon
          hovered={isDropdownItemHovered}
          className={styles['dropdown-icon']}
          name={icon}
          size={16}
        />
        <span className={styles['dropdown-text']}>{children}</span>
      </Button>
    );
  }
}

const { string } = PropTypes;

DropdownMenuItem.propTypes = {
  className: string,
};

export default DropdownMenuItem;
