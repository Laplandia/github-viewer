import React from 'react';
import { element } from 'prop-types';
import bemCl from 'bem-cl';
import './Report.scss';

const b = bemCl('lfa-report-layout');

class ReportLayout extends React.PureComponent {
  static propTypes = {
    top: element,
    bottom: element.isRequired,
  };

  static defaultProps = {
    top: null,
  };

  /* ------------------------------------------------------------------------------------------ */
  /* RENDER                                                                                     */
  /* ------------------------------------------------------------------------------------------ */
  render() {
    const { top, bottom } = this.props;

    return (
      <div className={b()}>
        {top && <div className={b('header')}>{top}</div>}
        <div className={b('body')}>{bottom}</div>
      </div>
    );
  }
}

export default ReportLayout;
