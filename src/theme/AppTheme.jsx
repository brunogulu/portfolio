import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { memo } from 'react';
import customTheme from './customTheme';

export const AppTheme = memo(({ children }) => (
   <ThemeProvider theme={customTheme}>
      <CssBaseline enableColorScheme />
      {children}
   </ThemeProvider>
));
