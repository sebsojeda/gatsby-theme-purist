import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

function Navigation() {
  return (
    <React.Fragment>
      <DesktopNavigation />
      <MobileNavigation />
    </React.Fragment>
  );
}

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-accent);
  }
`;

export default Navigation;
export { NavLink };
