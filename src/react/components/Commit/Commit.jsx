import React from 'react';

import { func, string, number } from 'prop-types';
import bemCl from 'bem-cl';
import './Commit.css';

import Card from '@material-ui/core/es/Card/Card';
import CardContent from '@material-ui/core/es/CardContent/CardContent';
import Typography from '@material-ui/core/es/Typography/Typography';
import CardActions from '@material-ui/core/es/CardActions/CardActions';
import Button from '@material-ui/core/es/Button/Button';

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

    return (
      <Card className={b().toString()}>
        <CardContent>
          <Typography color="textSecondary">{sha}</Typography>
          <Typography component="p">
            {message.split('\n').map(function(item) {
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
