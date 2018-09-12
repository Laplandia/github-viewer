import { takeLatest, all, put } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import actions from './actions';
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

  try {
    const fetchResponse = yield request({
      url: `https://api.github.com/search/commits?q=repo:${action.repo}+${action.searchTerm}`
    });
    yield put(actions.searchSuccess(fetchResponse));
  } catch (error) {
    yield put(actions.searchFailure(error));
  }
}

export default function*() {
  yield all([takeLatest([actionTypes.INIT], init), takeLatest([actionTypes.SEARCH], search)]);
}
