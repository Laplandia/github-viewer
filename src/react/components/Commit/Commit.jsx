import React from 'react';

import { string, array } from 'prop-types';
import bemCl from 'bem-cl';
import './Commit.css';

import Card from '@material-ui/core/es/Card/Card';
import CardContent from '@material-ui/core/es/CardContent/CardContent';
import Typography from '@material-ui/core/es/Typography/Typography';
import Highlighter from 'react-highlight-words';

const b = bemCl('gv-commit');

class Commit extends React.PureComponent {
  static propTypes = {
    sha: string.isRequired,
    message: string.isRequired,
    matches: array
  };

  static defaultProps = {};

  getCommitRanges(matches) {
    return matches.filter(match => match.property === 'message').map(match => Commit.getRange(match));
  }

  static getRange(match) {
    return match.matches.map(match => ({ start: match.indices[0], end: match.indices[1], text: match.text }));
  }

  render() {
    const { sha, message, matches = [] } = this.props;

    const matchingRanges = this.getCommitRanges(matches).flat();
    const matchingWords = matchingRanges.map(range => range.text);
    console.log(matchingWords);
    const lines = message.split('\n');
    const header = lines.shift();
    return (
      <Card className={b().toString()}>
        <CardContent>
          <Typography color="textSecondary">{sha}</Typography>
          <Typography variant="headline" component="h4" className={b('header').toString()}>
            <Highlighter searchWords={matchingWords} autoEscape={true} textToHighlight={header} />
          </Typography>
          <Typography component="p">
            {lines.map(function(item) {
              return (
                <span>
                  <Highlighter searchWords={matchingWords} autoEscape={true} textToHighlight={item} />
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
