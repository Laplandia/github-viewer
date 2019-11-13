import React from 'react';
import {Header} from "./Main.styles";


type MainLayoutProps = {
  header: React.Component,
  body: React.Component
}

export const MainLayout = ({header, body}:MainLayoutProps)=> {
  return (
      <div>
        <Header>{header}</Header>
        <div>{body}</div>
      </div>
  )
};
