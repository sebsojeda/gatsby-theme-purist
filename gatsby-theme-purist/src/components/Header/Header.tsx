import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import Toggle from '../Toggle';

function Header({ name }: HeaderProps) {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <NavLink to="/">
          <Logo />
          <SiteName>{name}</SiteName>
        </NavLink>
      </LogoWrapper>
      <HorizontalRule />
      <NavWrapper>
        <Nav>
          <NavLink to="/articles">Articles</NavLink>
        </Nav>
        <Toggle />
        <Search limit={5} />
      </NavWrapper>
    </HeaderWrapper>
  );
}

const Nav = styled.nav`
  display: flex;
  & > * {
    margin: 0 1rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: var(--color-accent);
  }
`;

const HeaderWrapper = styled.div`
  display: grid;
  padding: 2.5rem 0;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin: 0 1rem;
  }
`;

const HorizontalRule = styled.hr`
  border-color: var(--color-muted);
  display: inline;
  margin: 1.25rem 5rem;
  @media (min-width: 640px) {
    display: none;
  }
`;

const SiteName = styled.div`
  margin-left: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

interface HeaderProps {
  name: string;
}

export default Header;
