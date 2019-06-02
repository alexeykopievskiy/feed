import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>
);

const { object } = PropTypes;

Root.propTypes = {
  store: object.isRequired,
  history: object.isRequired,
};

export default Root;
