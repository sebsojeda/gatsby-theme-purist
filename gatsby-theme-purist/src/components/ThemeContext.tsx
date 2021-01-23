import React, { useContext, useLayoutEffect, useMemo, useState } from 'react';
import theme from '../theme';
import { kebabCase } from '../utils';

const ThemeContext = React.createContext({
  colorMode: null,
  setColorMode: (_: string) => {},
});

const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  const [colorMode, rawSetColorMode] = useState(null);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(mode) {
      const root = window.document.documentElement;

      window.localStorage.setItem('color-mode', mode);

      Object.entries(theme.colors[mode]).forEach(
        ([name, color]: [string, string]) => {
          const cssVarName = `--color-${kebabCase(name)}`;
          root.style.setProperty(cssVarName, color);
        },
      );

      rawSetColorMode(mode);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeProvider, useTheme };
