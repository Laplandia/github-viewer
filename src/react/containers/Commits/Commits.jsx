import React from 'react';
import { connect } from 'react-redux';
import { func, bool, array } from 'prop-types';
import commits from '../../../store/commits';
import Loading from '../../components/Loading/Loading';
import application from '../../../store/application';
import Commit from '../../components/Commit/Commit';

import SearchInput from '../../components/SearchInput/SearchInput';

class RepoContainer extends React.Component {
  static propTypes = {
    commits: array,
    isFetching: bool,
    searchCommits: func
  };

  static defaultProps = {};

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.init(this.props.repoId);
  }

  /* ------------------------------------------------------------------------------------------ */
  /* RENDER                                                                                     */
  /* ------------------------------------------------------------------------------------------ */
  render() {
    const { commits, isFetching, searchCommits, searchTerm = '' } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>
        <SearchInput searchCommits={searchCommits} initialValue={searchTerm} />
        {commits.map(commit => (
          <Commit key={commit.sha} sha={commit.sha} message={commit.commit.message} matches={commit.text_matches} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    repoId: application.selectors.getSelectedRepo(state.application),
    commits: commits.selectors.getCommits(state.commits),
    isFetching: commits.selectors.getIsFetching(state.commits),
    searchTerm: commits.selectors.getSearchTerm(state.commits)
  }),
  {
    init: commits.actions.init,
    showCommits: commits.actions.showCommits,
    searchCommits: commits.actions.search
  }
)(RepoContainer);
