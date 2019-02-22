import actionTypes from './actionTypes';

export const defaultState = {
  repoId: null,
  isFetching: true,
  error: null,
  commits: [],
  searchTerm: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT: {
      return {
        ...state,
        repoId: action.repoId,
        searchTerm: ''
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

    case actionTypes.SEARCH: {
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    }

    case actionTypes.SEARCH_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }

    case actionTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        commits: action.commits.items
      };
    }

    case actionTypes.SEARCH_FAILURE: {
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
