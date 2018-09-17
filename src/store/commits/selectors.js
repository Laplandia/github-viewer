const getIsFetching = state => state.isFetching;

const getCommits = state =>
   state.commits;

const getRepoId = state =>  state.repoId;

export default {
  getIsFetching,
  getCommits,
  getRepoId
};
