import { combineReducers } from 'redux';

import application from './store/application';
import repos from './store/repos';
import commits from './store/commits';

export default combineReducers({
  application: application.reducer,
  repos: repos.reducer,
  commits: commits.reducer
});
