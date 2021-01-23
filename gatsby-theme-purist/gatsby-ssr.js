import React from 'react';
import { minify } from 'terser';
import App from './src/components/App';
import theme from './src/theme';
import { kebabCase } from './src/utils';

function setColorsByTheme() {
  const colors = '🌈';

  let colorMode = 'light';

  const defaultPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const persistedPreference = window.localStorage.getItem('color-mode');

  if (persistedPreference) {
    colorMode = persistedPreference;
  } else if (defaultPreference.matches) {
    colorMode = 'dark';
  }

  const root = document.documentElement;

  Object.entries(colors[colorMode]).forEach(([name, color]) => {
    const cssVarName = `--color-${'kebabCase'(name)}`;
    root.style.setProperty(cssVarName, color);
  });

  root.style.setProperty('--initial-color-mode', colorMode);
}

const Styles = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(theme.colors))
    .replace("'kebabCase'", `(${kebabCase})`);

  let calledFunction = `(${boundFn})()`;
  minify(calledFunction).then((m) => (calledFunction = m.code));

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<Styles />);
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
