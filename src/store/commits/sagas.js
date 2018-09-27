import { takeLatest, all, put, select } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import actions from './actions';
import selectors from './selectors';
import request from '../../helpers/request';

function* init(action) {
  yield put(actions.initRequest());

  try {
    const fetchResponse = yield request({
      url: `https://api.github.com/repos/${action.repoId}/commits`
    });
    yield put(actions.initSuccess(fetchResponse));
  } catch (error) {
    yield put(actions.initFailure(error));
  }
}

function* search(action) {
  yield put(actions.searchRequest());
  const state = yield select();
  const repoName = selectors.getRepoId(state.commits);

  if (action.searchTerm === '') {
    yield put(actions.init(repoName));
    return;
  }

  try {
    const requestObject = {
      url: `https://api.github.com/search/commits?q=repo:${repoName}+${action.searchTerm}`,
      headers: [
        ['Accept', 'application/vnd.github.cloak-preview'],
        ['Accept', 'application/vnd.github.v3.text-match+json']
      ]
    };

    const fetchResponse = yield request(requestObject);
    yield put(actions.searchSuccess(fetchResponse));
  } catch (error) {
    yield put(actions.searchFailure(error));
  }
}

export default function*() {
  yield all([takeLatest([actionTypes.INIT], init), takeLatest([actionTypes.SEARCH], search)]);
}
