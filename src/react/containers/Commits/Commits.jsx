import React from 'react';
import { connect } from 'react-redux';
import commits from '../../../store/commits';
import Loading from '../../components/Loading/Loading';
import application from '../../../store/application';
import Commit from '../../components/Commit/Commit';

class RepoContainer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    this.props.init(this.props.repoId);
  }

  /* ------------------------------------------------------------------------------------------ */
  /* RENDER                                                                                     */
  /* ------------------------------------------------------------------------------------------ */
  render() {
    const { commits, isFetching, showCommits } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>{commits.map(commit => <Commit key={commit.sha} sha={commit.sha} message={commit.commit.message} />)}</div>
    );
  }
}

export default connect(
  state => ({
    repoId: application.selectors.getSelectedRepo(state.application),
    commits: commits.selectors.getCommits(state.commits),
    isFetching: commits.selectors.getIsFetching(state.commits)
  }),
  {
    init: commits.actions.init,
    showCommits: commits.actions.showCommits
  }
)(RepoContainer);
