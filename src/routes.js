import React from 'react';

import DefaultLayout from './layouts/default-layout';
import FeedContainer from './containers/Feed/index';
import ExploreContainer from './containers/Explore/index';

var routes = [
  {
    component: DefaultLayout,
    routes: [
      {
        path: '/feed',
        exact: true,
        component: FeedContainer,
      },
      {
        path: '/explore',
        exact: true,
        component: ExploreContainer,
      },
    ],
  },
];

export default routes;
