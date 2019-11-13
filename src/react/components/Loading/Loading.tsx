import React from 'react';
import CircularProgress from '@material-ui/core/es/CircularProgress/CircularProgress';
import { LoadingWrapper } from "./Loading.styles";

export const Loading = () => (
  <LoadingWrapper>
    <CircularProgress size={100} />
  </LoadingWrapper>
);