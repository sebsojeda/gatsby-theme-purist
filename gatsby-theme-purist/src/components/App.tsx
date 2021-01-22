import { Global } from '@emotion/react';
import React from 'react';
import global from '../styles/global';
import { ThemeProvider } from './ThemeContext';

function App({ children }) {
  return (
    <ThemeProvider>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
}

export default App;
