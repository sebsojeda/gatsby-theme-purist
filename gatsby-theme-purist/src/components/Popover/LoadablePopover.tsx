import React from 'react';
import Loadable from 'react-loadable';
import { PopoverWrapper } from './Popover';

const LoadablePopover = Loadable({
  loader: () => import('./Popover'),
  loading: () => <PopoverWrapper>Loading...</PopoverWrapper>,
});

export default LoadablePopover;
