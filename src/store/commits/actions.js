import actionTypes from './actionTypes';

const init = repoId => ({
  type: actionTypes.INIT,
  repoId
});

const initRequest = () => ({
  type: actionTypes.INIT_REQUEST
});

const initSuccess = commits => ({
  type: actionTypes.INIT_SUCCESS,
  commits
});

const initFailure = error => ({
  type: actionTypes.INIT_FAILURE,
  error
});

const search = searchTerm => ({
  type: actionTypes.SEARCH,
  searchTerm
});

const searchRequest = () => ({
  type: actionTypes.SEARCH_REQUEST
});

const searchSuccess = commits => ({
  type: actionTypes.SEARCH_SUCCESS,
  commits
});

const searchFailure = error => ({
  type: actionTypes.SEARCH_FAILURE,
  error
});

export default {
  init,
  initRequest,
  initSuccess,
  initFailure,
  search,
  searchSuccess,
  searchRequest,
  searchFailure
};
