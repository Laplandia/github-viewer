const getIsFetching = state => state.isFetching;

const getCommits = state => {
  console.log('state');
  console.log(state);
  return state.commits;
};

export default {
  getIsFetching,
  getCommits
};
