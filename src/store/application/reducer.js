import actionTypes from './actionTypes';

const defaultState = {
  screen: 'repos', // todo: enum
  selectedRepo: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_COMMITS: {
      return {
        ...state,
        screen: 'commits',
        selectedRepo: action.repoUrl
      };
    }

    case actionTypes.SHOW_REPOS: {
      return {
        ...state,
        screen: 'repos'
      };
    }

    default: {
      return state;
    }
  }
};
