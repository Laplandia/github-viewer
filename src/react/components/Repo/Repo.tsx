import React from 'react';

import CardContent from '@material-ui/core/es/CardContent/CardContent';
import Typography from '@material-ui/core/es/Typography/Typography';
import CardActions from '@material-ui/core/es/CardActions/CardActions';
import Button from '@material-ui/core/es/Button/Button';
import {RepoCard} from "./Repo.styles";

type RepoProps = {
  name: string,
  description: string,
  fullName: string,
  showCommits: Function,
  stars: number,
  forks: number
}

export const Repo = ({name, description, fullName, showCommits, stars, forks}: RepoProps)=> {

  const handleShowCommits = () => {
    showCommits(fullName);
  };
  return (
      <RepoCard>
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
          <Button size="small" onClick={handleShowCommits}>
            See commits
          </Button>
        </CardActions>
      </RepoCard>
  );
};
