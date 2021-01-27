import React from 'react';
import { minify } from 'terser';
import App from './src/components/App';
import theme from './src/theme';
import { kebabCase } from './src/utils';

function setColorsByTheme() {
  const theme = '🌈';

  let colorMode = 'light';

  const defaultPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const persistedPreference = window.localStorage.getItem('color-mode');

  if (persistedPreference) {
    colorMode = persistedPreference;
  } else if (defaultPreference.matches) {
    colorMode = 'dark';
  }

  const root = document.documentElement;

  // Set font variables
  Object.entries(theme.fonts).forEach(([name, font]) => {
    const cssVarName = `--font-${'kebabCase'(name)}`;
    root.style.setProperty(cssVarName, font);
  });

  // Set color variables
  Object.entries(theme.modes[colorMode].colors).forEach(([name, color]) => {
    const cssVarName = `--color-${'kebabCase'(name)}`;
    root.style.setProperty(cssVarName, color);
  });

  // Set prism variables
  Object.entries(theme.modes[colorMode].prism).forEach(([name, color]) => {
    const cssVarName = `--prism-${'kebabCase'(name)}`;
    root.style.setProperty(cssVarName, color);
  });

  root.style.setProperty('--initial-color-mode', colorMode);
}

const ThemeScript = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(theme))
    .replace(/'kebabCase'/g, `(${kebabCase})`);

  let calledFunction = `(${boundFn})()`;
  minify(calledFunction).then((m) => (calledFunction = m.code));

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeScript key="theme-script" />);
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
