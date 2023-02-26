import React from 'react';
import { ThemeProvider } from 'styled-components';

export interface ThemeProviderProps {
  colors?: {
    primary?: string;
    light?: string;
  };
  fonts?: string[];
  fontSizes: {
    small?: string;
    medium?: string;
    large?: string;
  };
}

const mainTheme: ThemeProviderProps = {
  colors: {
    primary: '#5C50BB',
    light: '#EFEDFD',
  },
  fonts: ['Avenir LT Std', 'sans-serif', 'Roboto'],
  fontSizes: {
    small: '14px',
    medium: '20px',
    large: '24px',
  },
};

const Theme = ({ children, theme = mainTheme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
