const getIsFetching = state => state.isFetching;

const getCommits = state => state.commits;

const getRepoId = state => state.repoId;

const getSearchTerm = state => state.searchTerm;

export default {
  getIsFetching,
  getCommits,
  getRepoId,
  getSearchTerm
};
