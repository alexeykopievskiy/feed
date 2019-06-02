import { createBrowserHistory, createMemoryHistory } from 'history';
import { isServer } from './utils';

export default isServer() ? createMemoryHistory() : createBrowserHistory();
