import { CssBaseline, ThemeProvider } from '@mui/material';
// import darkTheme from './darkTheme';
import customTheme from './customTheme';

export const AppTheme = ({ children }) => {
   return (
      <ThemeProvider theme={customTheme}>
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
};
