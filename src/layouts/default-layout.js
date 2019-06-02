import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";
import Header from '../components/header';

class DefaultLayout extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
          <Header />
          {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default DefaultLayout;
