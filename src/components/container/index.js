import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { Row, Col } from 'antd';
import styles from './index.scss';

const Container = props => {
  const { children, className, wide } = props;
  const classNames = cls(styles.container, className, wide && styles.wide);
  return (
    <div className={classNames}>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </div>
  );
};

const { bool, node, string } = PropTypes;

Container.propTypes = {
  children: node,
  className: string,
  wide: bool,
};

export default Container;