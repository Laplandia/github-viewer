import actionTypes from './actionTypes';

const init = () => ({
  type: actionTypes.INIT
});

const initRequest = () => ({
  type: actionTypes.INIT_REQUEST
});

const initSuccess = repos => ({
  type: actionTypes.INIT_SUCCESS,
  repos
});

const initFailure = error => ({
  type: actionTypes.INIT_FAILURE,
  error
});

export const setUserId = userId => ({
  type: actionTypes.SET_USER_ID,
  userId
});

export default {
  init,
  initRequest,
  initSuccess,
  initFailure
};
