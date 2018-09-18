import React from 'react';

import { string } from 'prop-types';
import bemCl from 'bem-cl';
import './Commit.css';

import Card from '@material-ui/core/es/Card/Card';
import CardContent from '@material-ui/core/es/CardContent/CardContent';
import Typography from '@material-ui/core/es/Typography/Typography';

const b = bemCl('gv-commit');

class Commit extends React.PureComponent {
  static propTypes = {
    sha: string.isRequired,
    message: string.isRequired
  };

  static defaultProps = {};

  handleShowCommits = e => {
    this.props.showCommits(this.props.fullName);
  };

  render() {
    const { sha, message } = this.props;

    const lines = message.split('\n');
    const header = lines.pop();
    return (
      <Card className={b().toString()}>
        <CardContent>
          <Typography color="textSecondary">{sha}</Typography>
          <Typography variant="headline" component="h4" className={b('header'.toString())}>
            {header}
          </Typography>
          <Typography component="p">
            {lines.map(function(item) {
              return (
                <span>
                  {item}
                  <br />
                </span>
              );
            })}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Commit;
