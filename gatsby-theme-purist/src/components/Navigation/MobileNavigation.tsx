import { MenuAltRight } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import Toggle from '../Toggle';
import { NavLink } from './Navigation';

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((wasOpened) => {
      if (wasOpened) {
        document.body.classList.remove('menu-open');
      } else {
        document.body.classList.add('menu-open');
      }
      return !wasOpened;
    });
  };

  return (
    <Wrapper>
      <MenuIcon size="30" onClick={handleMenuToggle} isOpen={isOpen} />
      <Nav isOpen={isOpen}>
        <Animate delay={0.3} isOpen={isOpen}>
          <NavLink to="/articles">Articles</NavLink>
        </Animate>
        <Animate delay={0.5} isOpen={isOpen}>
          <Toggle />
        </Animate>
      </Nav>
    </Wrapper>
  );
}

interface MenuProps {
  isOpen: boolean;
}

interface AnimateProps extends MenuProps {
  delay: number;
}

const Animate = styled.div<AnimateProps>`
  margin-left: 5rem;
  transition: all 0.4s ease-in-out;
  transition-delay: ${(p) => p.delay}s;
  opacity: ${(p) => (p.isOpen ? '1' : '0')};
  transform: translateX(${(p) => (p.isOpen ? '0' : '-500px')});
  & > * {
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav<MenuProps>`
  display: grid;
  position: fixed;
  align-items: center;
  justify-items: left;
  width: ${(p) => (p.isOpen ? '100vw' : '0')};
  overflow: hidden;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: var(--color-background);
  backdrop-filter: blur(15px);
  transition: all 0.3s ease-in-out;
  opacity: ${(p) => (p.isOpen ? '0.95' : '0')};
`;

const MenuIcon = styled(MenuAltRight)<MenuProps>`
  display: block;
  position: ${(p) => (p.isOpen ? 'fixed' : 'static')};
  top: 2.5rem;
  right: 1rem;
  z-index: 9999;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: var(--color-accent);
    cursor: pointer;
  }
`;

export default MobileNavigation;
