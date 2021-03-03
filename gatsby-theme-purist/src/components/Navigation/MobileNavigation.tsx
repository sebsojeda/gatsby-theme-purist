import { MenuAltRight } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import path from 'path';
import React, { useState } from 'react';
import { useBasePath } from '../../utils';
import Toggle from '../Toggle';
import { NavLink } from './Navigation';

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const basePath = useBasePath();

  return (
    <Wrapper>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        onMouseDown={(e) => e.preventDefault()}
        isOpen={isOpen}
      >
        <MenuAltRight size="30" />
      </MenuButton>
      <NavWrapper isOpen={isOpen}>
        <Nav>
          <Animate delay={0.3} isOpen={isOpen}>
            <NavLink to={path.join('/', basePath, 'articles')}>
              Articles
            </NavLink>
          </Animate>
          <FadeIn isOpen={isOpen}>
            <Toggle />
          </FadeIn>
        </Nav>
      </NavWrapper>
    </Wrapper>
  );
}

interface MenuProps {
  isOpen: boolean;
}

interface AnimateProps extends MenuProps {
  delay: number;
}

const MenuButton = styled.button<MenuProps>`
  background-color: transparent;
  color: var(--color-text);
  border: none;
  display: block;
  position: ${(p) => (p.isOpen ? 'fixed' : 'static')};
  top: 1rem;
  right: 1.5rem;
  z-index: 3;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: var(--color-accent);
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  padding: 10rem 2rem;
  display: flex;
  & > * + * {
    margin-top: 4rem;
  }
  flex-direction: column;
  justify-content: left;
`;

const FadeIn = styled.div<MenuProps>`
  opacity: ${(p) => (p.isOpen ? '1' : '0')};
  transition: opacity 0.8s ease-in-out;
  visibility: ${(p) => (p.isOpen ? 'visible' : 'hidden')};
`;

const Animate = styled.div<AnimateProps>`
  visibility: ${(p) => (p.isOpen ? 'visible' : 'hidden')};
  transform: translateX(${(p) => (p.isOpen ? '0' : '-500px')});
  opacity: ${(p) => (p.isOpen ? '1' : '0')};
  transition: transform 0.5s ease-in-out ${(p) => p.delay}s,
    opacity 0.5s ease-in-out ${(p) => p.delay + 0.2}s;
  & > * {
    font-size: 1.75rem;
  }
`;

const Wrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavWrapper = styled.div<MenuProps>`
  position: fixed;
  width: 100%;
  visibility: ${(p) => (p.isOpen ? 'visible' : 'hidden')};
  opacity: ${(p) => (p.isOpen ? '1' : '0')};
  overflow: hidden;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--color-blurred-background);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease-in-out;
`;

export default MobileNavigation;
