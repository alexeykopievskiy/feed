import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from 'antd';
import cls from 'classnames';
import { Link as LinkReactRouter } from 'react-router-dom';
import styles from './index.scss';
import autobind from 'autobind-decorator';

const { Link: AnchorLink } = Anchor;

class Link extends React.Component {
  @autobind
  handleClick() {
    this.props.onClick();
  }

  render() {
    const {
      anchor,
      to,
      className,
      label,
      children,
    } = this.props;
    const classNames = cls(
      className,
      styles.link,
    );

    const content = label || children;

    const isExternal = typeof to === 'string' && (to.indexOf('http://') === 0 || to.indexOf('https://') === 0);

    if (anchor) {
      return (
        <AnchorLink
          href={anchor}
          className={classNames}
          onClick={this.handleClick}
          title={content}
        />
      );
    } else {
      return to && !isExternal ? (
        <LinkReactRouter to={to} className={classNames} onClick={this.handleClick}>
          {content}
        </LinkReactRouter>
      ) : <a href={to || 'javascript:void(0);'} onClick={this.handleClick} className={classNames} target={isExternal ? '_blank' : undefined}>{content}</a>;
    }
  }
}

const { func, node, string } = PropTypes;

Link.propTypes = {
  anchor: string,
  className: string,
  to: string,
  label: string,
  children: node,
  onClick: func,
};

Link.defaultProps = {
  anchor: null,
  onClick: () => {}
};

export default Link;