const getIsFetching = state => state.isFetching;

const getRepos = state => {
  return state.repos;
};

export default {
  getIsFetching,
  getRepos
};
