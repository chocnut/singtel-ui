import React from 'react';
import { ThemeProvider } from 'styled-components';

export interface ThemeProviderProps {
  colors?: {
    primary?: string;
    light?: string;
  };
  fontFamily?: string;
}

export const mainTheme: ThemeProviderProps = {
  colors: {
    primary: '#5C50BB',
    light: '#EFEDFD',
  },
  fontFamily: 'Avenir LT Std, sans-serif, Roboto',
};

const Theme = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
