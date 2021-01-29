import styled from '@emotion/styled';
import anime from 'animejs';
import React from 'react';
import { useTheme } from '../ThemeContext';

function Toggle() {
  const moonPath =
    'M9 12.9898C9 19.6172 12.5 24.9898 12.5 24.9898C5.87258 24.9898 0.5 19.6172 0.5 12.9898C0.5 6.36235 5.87258 0.989772 12.5 0.989772C12.5 0.989772 9 6.36235 9 12.9898Z';
  const sunPath =
    'M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z';

  const { colorMode, setColorMode } = useTheme();

  const handleClick = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
    anime({
      targets: '#toggle',
      d: [{ value: colorMode === 'dark' ? moonPath : sunPath }],
      duration: 300,
      easing: 'easeInOutQuad',
    });
  };

  return (
    <ToggleWrapper
      onClick={handleClick}
      onMouseDown={(e) => e.preventDefault()}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 26 26"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={colorMode === 'dark' ? sunPath : moonPath} id="toggle" />
      </svg>
      <Hidden>Toggle</Hidden>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.button`
  background: 0;
  border: none;
  padding: 0;
  color: inherit;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-accent);
    cursor: pointer;
  }
  svg {
    transform-box: fill-box;
  }
`;

const Hidden = styled.span`
  display: none;
`;

export default Toggle;
