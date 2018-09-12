import actionTypes from './actionTypes';

const defaultState = {
  repoId: null,
  isFetching: true,
  error: null,
  commits: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT: {
      return {
        ...state,
        repoId: action.repoId
      };
    }

    case actionTypes.INIT_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }

    case actionTypes.INIT_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        commits: action.commits
      };
    }

    case actionTypes.INIT_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }

    case actionTypes.SET_USER_ID: {
      return {
        ...state,
        userId: action.userId
      };
    }

    default: {
      return state;
    }
  }
};
