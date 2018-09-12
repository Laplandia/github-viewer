import { all } from 'redux-saga/effects';

import repos from './store/repos';
import commits from './store/commits';

function* rootSaga() {
  yield all([...repos.sagas(), ...commits.sagas()]);
}

export default rootSaga;
