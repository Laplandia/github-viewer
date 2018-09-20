import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import Application from './react/containers/Application';

import './index.css';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path={'/'} component={Application} />
        <Route path={'/:projectId'} component={Application} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
