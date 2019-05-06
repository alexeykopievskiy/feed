import '@babel/polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import template from './template';
import store from '../src/store';
import routes from '../src/routes';

export default clientStats => (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route, match }) => {
    return route.component.preload
      ? route.component.preload(match, store)
      : Promise.resolve(null);
  });

  return Promise.all(promises)
    .then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      );

      // https://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/
      if (context.url) {
        // context.url will contain the URL to redirect to if a <Redirect> was used
        res.writeHead(302, {
          Location: context.url,
        });
      } else {
        if (context.status === 404) {
          res.status(404);
        } else {
          res.status(200);
        }

        const helmet = Helmet.rewind();
        const preloadedState = store.getState();
        res.send(
          template({
            markup,
            helmet,
            preloadedState,
            clientBuildHash: clientStats.hash,
          })
        );
      }
      res.end();
    })
    .catch(err => {
      /* eslint-disable no-console */
      console.error(err);
      /* eslint-enable no-console */
      res.status(500).send(err.message);
    });
};
