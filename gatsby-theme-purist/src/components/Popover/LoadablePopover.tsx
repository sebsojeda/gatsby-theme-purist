import Loadable from 'react-loadable';

const LoadablePopover = Loadable({
  loader: () => import('./Popover'),
  loading() {
    return 'Loading...';
  },
});

export default LoadablePopover;
