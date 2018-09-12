import actionTypes from './actionTypes';

// const fetchSProjecttatus = () => ({
//   type: actionTypes.FETCH_PROJECT_STATUS,
// });

const showCommits = repoUrl => ({
  type: actionTypes.SHOW_COMMITS,
  repoUrl: repoUrl
});

export default {
  showCommits
};
