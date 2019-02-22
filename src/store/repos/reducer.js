import actionTypes from './actionTypes';

export const defaultState = {
  isFetching: true,
  error: null,
  repos: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
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
        repos: action.repos
      };
    }

    case actionTypes.INIT_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
};
