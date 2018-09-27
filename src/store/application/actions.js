import actionTypes from './actionTypes';

const showCommits = repoUrl => ({
  type: actionTypes.SHOW_COMMITS,
  repoUrl: repoUrl
});

const showRepos = () => ({
  type: actionTypes.SHOW_REPOS
});

export default {
  showCommits,
  showRepos
};
