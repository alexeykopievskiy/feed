import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
import reducer from './reducer';
import { isServer } from './utils';


let store;
let initialState = {};

if (!isServer() && window.__PRELOADED_STATE__) {
  // Grab the state from a global variable injected into the server-generated HTML
  initialState = window.__PRELOADED_STATE__;
  // Allow the passed state to be garbage-collected
  delete window.__PRELOADED_STATE__;
}

store = createStore(
  reducer(history),
  initialState,
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
  )
);

export default store;
