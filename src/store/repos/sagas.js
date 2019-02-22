import { takeLatest, all, put } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import actions from './actions';
import request from '../../helpers/request';

export function* init() {
  yield put(actions.initRequest());

  try {
    const fetchResponse = yield request({
      url: `https://api.github.com/search/repositories?q=user:facebook&sort=stars&order=desc`
    });
    yield put(actions.initSuccess(fetchResponse.items));
  } catch (error) {
    yield put(actions.initFailure(error));
  }
}

export default function*() {
  yield all([takeLatest([actionTypes.INIT], init)]);
}
