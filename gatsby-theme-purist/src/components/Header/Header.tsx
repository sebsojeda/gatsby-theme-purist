import styled from '@emotion/styled';
import React from 'react';
import Logo from '../Logo';
import Navigation, { NavLink } from '../Navigation';

function Header({ name }: HeaderProps) {
  return (
    <Wrapper>
      <NavLink to="/">
        <LogoWrapper>
          <Logo />
          <SiteName>{name}</SiteName>
        </LogoWrapper>
      </NavLink>
      <Navigation />
    </Wrapper>
  );
}

interface HeaderProps {
  name: string;
}

const Wrapper = styled.div`
  background-color: var(--color-background);
  padding: 1rem 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  justify-items: end;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 3rem);
  max-width: 65rem;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 1.5rem;
    z-index: 1;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SiteName = styled.div`
  margin-left: 1rem;
`;

export default Header;
