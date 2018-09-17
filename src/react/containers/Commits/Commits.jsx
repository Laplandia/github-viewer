import React from 'react';
import {} from 'prop-types';
import { connect } from 'react-redux';
import commits from '../../../store/commits';
import Loading from '../../components/Loading/Loading';
import Card from '@material-ui/core/es/Card/Card';
import CardContent from '@material-ui/core/es/CardContent/CardContent';
import Typography from '@material-ui/core/es/Typography/Typography';
import CardActions from '@material-ui/core/es/CardActions/CardActions';
import Button from '@material-ui/core/es/Button/Button';
import Input from '@material-ui/core/Input';
import application from '../../../store/application';
import Commit from '../../components/Commit/Commit';
import SearchBar from 'material-ui-search-bar'

class RepoContainer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor () {
      super();
      this.state = {};
  }

  componentDidMount() {
    console.log('initializing commits');
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
              onChange={(newValue) => this.setState({ value: newValue })}
              onRequestSearch={() => searchCommits(this.state.value)}
          />
          {commits.map(commit => <Commit key={commit.sha} sha={commit.sha} message={commit.commit.message} />)}</div>
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
