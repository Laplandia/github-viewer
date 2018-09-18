import React from 'react';
import { connect } from 'react-redux';
import commits from '../../../store/commits';
import Loading from '../../components/Loading/Loading';
import application from '../../../store/application';
import Commit from '../../components/Commit/Commit';
import SearchBar from 'material-ui-search-bar';

class RepoContainer extends React.Component {
  static propTypes = {};

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
    const { commits, isFetching, searchCommits } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>
        <SearchBar
          value={this.state.value}
          onChange={newValue => this.setState({ value: newValue })}
          onRequestSearch={() => searchCommits(this.state.value)}
        />
        {commits.map(commit => <Commit key={commit.sha} sha={commit.sha} message={commit.commit.message} />)}
      </div>
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
    showCommits: commits.actions.showCommits,
    searchCommits: commits.actions.search
  }
)(RepoContainer);
