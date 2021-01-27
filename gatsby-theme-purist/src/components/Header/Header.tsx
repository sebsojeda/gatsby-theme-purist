import styled from '@emotion/styled';
import React from 'react';
import Logo from '../Logo';
import Navigation, { NavLink } from '../Navigation';

function Header({ name }: HeaderProps) {
  return (
    <Wrapper>
      <NavLink to="/">
        <Flex>
          <Logo />
          <SiteName>{name}</SiteName>
        </Flex>
      </NavLink>
      <Navigation />
    </Wrapper>
  );
}

interface HeaderProps {
  name: string;
}

const Wrapper = styled.div`
  padding: 2.5rem 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  justify-items: end;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SiteName = styled.div`
  display: inline-block;
  margin-left: 1rem;
`;

export default Header;
