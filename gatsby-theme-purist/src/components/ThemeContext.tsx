import React, { useEffect, useMemo, useState } from 'react';
import colors from '../themes/colors';
import { kebabCase } from '../utils';

const ThemeContext = React.createContext({
  colorMode: '',
  setColorMode: (mode) => {},
});

function ThemeProvider({ children }) {
  const [colorMode, rawSetColorMode] = useState('');

  useEffect(() => {
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

      Object.entries(colors[mode]).forEach(([name, color]) => {
        const cssVarName = `--color-${kebabCase(name)}`;
        root.style.setProperty(cssVarName, color);
      });

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
export { ThemeProvider };
