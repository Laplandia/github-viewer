import React from 'react';
import bemCl from 'bem-cl';
import './Loading.css';
import CircularProgress from '@material-ui/core/es/CircularProgress/CircularProgress';

const b = bemCl('gv-loading');

class Loading extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className={b()}>
        <CircularProgress size={100} />
      </div>
    );
  }
}

export default Loading;
