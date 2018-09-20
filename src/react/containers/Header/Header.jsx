import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import application from '../../../store/application';
import Typography from '@material-ui/core/es/Typography/Typography';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import BackIcon from '@material-ui/icons/KeyboardBackspace';


class HeaderContainer extends React.Component {
  static propTypes = { screen: string.isRequired };

  static defaultProps = {};

    handleShowRepos = e => {
        this.props.showRepos();
    };

  render() {
    const { screen } = this.props;

    return (
      <Typography variant="headline" component="h1">
          {screen === 'commits' && <IconButton onClick={this.handleShowRepos}>
              <BackIcon />
          </IconButton>} {screen === 'repos' ? 'Repositories' : 'Commits'}
      </Typography>
    );
  }
}

export default connect(
  state => ({
    screen: application.selectors.getScreen(state.application)
  }),
  {
    showRepos: application.actions.showRepos
  }
)(HeaderContainer);
