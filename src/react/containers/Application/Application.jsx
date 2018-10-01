import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

import HeaderContainer from '../Header';
import MainLayout from '../../layouts/Main';
import application from '../../../store/application';
import Repos from '../Repos/Repos';
import Commits from '../Commits/Commits';

class Application extends React.Component {
  static propTypes = {
    screen: string.isRequired
  };

  static defaultProps = {};

  /* ------------------------------------------------------------------------------------------ */
  /* HANDLERS                                                                                   */
  /* ------------------------------------------------------------------------------------------ */

  /* ------------------------------------------------------------------------------------------ */
  /* RENDER                                                                                     */
  /* ------------------------------------------------------------------------------------------ */
  renderRepos = () => <Repos />;

  renderCommits = () => <Commits />;

  render() {
    const { screen } = this.props;
    const pageRenderer = {
      repos: this.renderRepos,
      commits: this.renderCommits
    };

    return (
      <div>
        <MainLayout header={<HeaderContainer />} body={pageRenderer[screen]()} />
      </div>
    );
  }
}

export default connect(
  state => ({
    screen: application.selectors.getScreen(state.application)
  }),
  {
    initApplication: application.actions.init
  }
)(Application);
