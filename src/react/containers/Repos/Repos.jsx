import React from 'react';
import {} from 'prop-types';
import { connect } from 'react-redux';
import repos from '../../../store/repos';
import Loading from '../../components/Loading/Loading';
import application from '../../../store/application';
import Repo from '../../components/Repo/Repo';

class RepoContainer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    console.log('initializing repos');
    this.props.init();
  }

  /* ------------------------------------------------------------------------------------------ */
  /* RENDER                                                                                     */
  /* ------------------------------------------------------------------------------------------ */
  render() {
    const { repos, isFetching, showCommits } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>
        {repos.map(repository => (
          <Repo
            key={repository.id}
            description={repository.description}
            name={repository.name}
            fullName={repository.full_name}
            showCommits={showCommits}
            forks={repository.forks}
            stars={repository.stargazers_count}
          />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    repos: repos.selectors.getRepos(state.repos),
    isFetching: repos.selectors.getIsFetching(state.repos)
  }),
  {
    init: repos.actions.init,
    showCommits: application.actions.showCommits
  }
)(RepoContainer);
