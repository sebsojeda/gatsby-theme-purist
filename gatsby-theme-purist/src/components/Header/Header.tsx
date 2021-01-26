import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import Toggle from '../Toggle';

function Header({ name }: HeaderProps) {
  return (
    <Wrapper>
      <NavLink to="/">
        <Flex justifyContent={'flex-start'}>
          <Logo />
          <SiteName>{name}</SiteName>
        </Flex>
      </NavLink>
      <Grid>
        <Flex justifyContent={'space-between'}>
          <NavLink to="/articles">Articles</NavLink>
        </Flex>
        <Toggle />
        <Search limit={5} />
      </Grid>
    </Wrapper>
  );
}

interface HeaderProps {
  name: string;
}

interface FlexProps {
  justifyContent: string;
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

const Wrapper = styled.div`
  display: grid;
  padding: 2.5rem 0;
  grid-template-columns: max-content 1fr;
  justify-items: end;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, max-content));
  align-items: center;
  gap: 2rem;
`;

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  justify-content: ${(p) => p.justifyContent};
  & > * {
    margin: 0 1rem;
  }
  margin: 0 -1rem;
`;

const SiteName = styled.div`
  display: inline-block;
  margin-left: 1rem;
`;

export default Header;
