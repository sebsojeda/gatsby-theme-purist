import styled from '@emotion/styled';
import React from 'react';
import Search from '../Search';
import Toggle from '../Toggle';
import { NavLink } from './Navigation';

function DesktopNavigation() {
  return (
    <Nav>
      <Flex>
        <NavLink to="/articles">Articles</NavLink>
        <Toggle />
      </Flex>
      <Search limit={5} />
    </Nav>
  );
}

const Nav = styled.nav`
  display: none;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, minmax(0, max-content));
  gap: 2rem;
  @media (min-width: 768px) {
    display: grid;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & a {
    margin-right: 2rem;
  }
`;

export default DesktopNavigation;
