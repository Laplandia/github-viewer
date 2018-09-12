import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import application from '../../../store/application';
import Typography from '@material-ui/core/es/Typography/Typography';

class HeaderContainer extends React.Component {
  static propTypes = { screen: string.isRequired };

  static defaultProps = {};

  render() {
    const { screen } = this.props;

    return (
      <Typography variant="headline" component="h1">
        {screen === 'repos' ? 'Repositories' : 'Commits'}
      </Typography>
    );
  }
}

export default connect(
  state => ({
    screen: application.selectors.getScreen(state.application)
  }),
  {}
)(HeaderContainer);
