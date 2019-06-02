/*import React from "react";
import { render } from "react-dom";
import "./styles/index.css";
import FeedContainer from "./containers/Feed";

render(<FeedContainer />, document.getElementById("root"));*/

import React from 'react';
import { render } from 'react-dom';
import Root from './root';
import store from './store';
import history from './history';
import "./styles/index.css";

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
