import styled from '@emotion/styled';
import path from 'path';
import React from 'react';
import { useBasePath } from '../../utils';
import Logo from '../Logo';
import Navigation, { NavLink } from '../Navigation';

function Header({ name }: HeaderProps) {
  const basePath = useBasePath();

  return (
    <Wrapper>
      <NavLink to={path.join('/', basePath)}>
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
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  justify-items: end;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 3rem);
  max-width: 65rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  @media (min-width: 768px) {
    position: static;
    padding: 1rem 0;
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
