import { put, takeLatest, all } from 'redux-saga/effects';
import commitSaga, {init, search} from '../sagas';
import actions from '../actions';
import actionTypes from '../actionTypes';

describe('Commits sagas', () => {
  it('Should take actions', async () => {
    const generator = commitSaga();
    put(actions.init('facebook'));
    const next = generator.next().value;

    expect(next).toEqual(all([takeLatest([actionTypes.INIT], init), takeLatest([actionTypes.SEARCH], search)]));
  });
});
