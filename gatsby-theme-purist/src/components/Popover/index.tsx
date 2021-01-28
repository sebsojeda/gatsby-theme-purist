import React from 'react';
import Loadable from 'react-loadable';

const LoadablePopover = Loadable({
  loader: () => import('./Popover'),
  loading: () => <React.Fragment />,
});

export default LoadablePopover;
