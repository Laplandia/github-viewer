import React from 'react';

import { func, string, number } from 'prop-types';
import bemCl from 'bem-cl';
import './Repo.css';

import Card from '@material-ui/core/es/Card/Card';
import CardContent from '@material-ui/core/es/CardContent/CardContent';
import Typography from '@material-ui/core/es/Typography/Typography';
import CardActions from '@material-ui/core/es/CardActions/CardActions';
import Button from '@material-ui/core/es/Button/Button';

const b = bemCl('gv-repo');

class Repo extends React.PureComponent {
  static propTypes = {
    name: string.isRequired,
    description: string.isRequired,
    fullName: string.isRequired,
    showCommits: func.isRequired,
    stars: number.isRequired,
    forks: number.isRequired
  };

  static defaultProps = {};

  handleShowCommits = () => {
    this.props.showCommits(this.props.fullName);
  };

  render() {
    const { name, description, stars, forks } = this.props;

    return (
      <Card className={b().toString()}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary">
            Stars: {stars} Forks: {forks}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.handleShowCommits}>
            See commits
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Repo;
