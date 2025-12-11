import React, { useCallback, useMemo, memo } from 'react';
import { alpha, Box, Tab, Tabs, Typography } from '@mui/material';
import { Logo } from '../../assets';
import customTheme from '../../theme/customThemeOld';

// Datos constantes fuera del componente
const NAV_LINKS = ['inicio', 'sobre mí', 'habilidades', 'contacto'];
const COLOR = customTheme.palette.primary;

// Componente memoizado
const NavbarComponent = memo(({ getIndex }) => {
   const [tabIndex, setTabIndex] = React.useState(0);

   // Handler memoizado
   const handleChange = useCallback(
      (_, newNavIndex) => {
         setTabIndex(newNavIndex);
         getIndex(newNavIndex);
      },
      [getIndex]
   );

   // Estilos memoizados
   const containerStyles = useMemo(
      () => ({
         bgcolor: alpha(COLOR.dark, 0.6),
         borderBottom: `1px solid ${alpha(COLOR.main, 0.1)}`,
         px: '3.4rem',
      }),
      []
   );

   const logoTextStyles = useMemo(
      () => ({
         ml: '1.25rem',
         typography: 'logo',
      }),
      []
   );

   const tabsStyles = useMemo(
      () => ({
         height: '80px',
         '& .MuiTabs-indicator': { height: '4px' },
      }),
      []
   );

   const tabStyles = useMemo(
      () => ({
         minWidth: 'auto',
         ml: '2rem',
         p: 0,
         typography: 'navLinks',
         '&.Mui-selected': { fontWeight: '500' },
      }),
      []
   );

   return (
      <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         sx={containerStyles}
      >
         <Box display="flex" alignItems="center">
            <Logo fill="white" width="52px" />
            <Typography sx={logoTextStyles}>Bruno.</Typography>
         </Box>

         <Tabs value={tabIndex} sx={tabsStyles} onChange={handleChange}>
            {NAV_LINKS.map(link => (
               <Tab key={link} label={link} disableRipple sx={tabStyles} />
            ))}
         </Tabs>
      </Box>
   );
});

export const Navbar = React.memo(NavbarComponent);
