import React from 'react';
import { element } from 'prop-types';
import bemCl from 'bem-cl';
import './Main.css';

const b = bemCl('gv-main-layout');

class MainLayout extends React.PureComponent {
  static propTypes = {
    header: element.isRequired,
    body: element.isRequired
  };

  static defaultProps = {};

  /* ------------------------------------------------------------------------------------------ */
  /* RENDER                                                                                     */
  /* ------------------------------------------------------------------------------------------ */
  render() {
    const { header, body } = this.props;

    return (
      <div className={b()}>
        <div className={b('header')}>{header}</div>
        <div className={b('body')}>{body}</div>
      </div>
    );
  }
}

export default MainLayout;
