import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export interface ThemeProviderProps {
  colors: {
    primary: string;
    light: string;
  };
  fontFamily: string;
}

export const mainTheme: ThemeProviderProps = {
  colors: {
    primary: '#5C50BB',
    light: '#EFEDFD',
  },
  fontFamily: 'Avenir LT Std, sans-serif, Roboto',
};

interface ThemeProps {
  children: ReactNode;
  theme?: object;
}
const Theme: FC<ThemeProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
