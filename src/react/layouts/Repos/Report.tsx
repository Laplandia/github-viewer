import React from 'react';
import {Header} from "./Report.styles";

type ReportLayoutProps = {
  top?: React.Component,
  bottom: React.Component
}

export const ReportLayout = ({top, bottom}:ReportLayoutProps)=> {
  return (
      <div>
        {top && <Header>{top}</Header>}
        <div>{bottom}</div>
      </div>
  )
};
