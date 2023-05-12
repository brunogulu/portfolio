import React from 'react';
import { useState } from 'react';
import { alpha, Box, Tab, Tabs, Typography } from '@mui/material';
import { Logo } from '../../assets';
import customTheme from '../../theme/customTheme';

export const Navbar = ({ getIndex }) => {
   // Enlaces
   const linksArray = ['inicio', 'sobre mí', 'habilidades', 'contacto'];

   // Index de la etiqueta <Tab /> correspondiente
   const [tabIndex, setTabIndex] = useState(0);

   // Evento de <Tabs />
   const handleChange = (event, newNavIndex) => {
      event.preventDefault();
      setTabIndex(newNavIndex);
      getIndex(newNavIndex);
   };

   // Paleta de colores primaria
   const color = customTheme.palette.primary;

   // Estilo personalizado de <Tab />
   const tabStyle = {
      minWidth: 'auto',
      ml: '2rem',
      p: '0',
      typography: 'navLinks',
      '&.Mui-selected': {
         fontWeight: '500',
      },
   };

   return (
      <Box
         alignItems="center"
         display="flex"
         justifyContent="space-between"
         sx={{
            bgcolor: `${alpha(color.dark, 0.6)}`,
            borderBottom: `1px solid ${alpha(color.main, 0.1)}`,
            px: '3.4rem',
         }}
      >
         <Box alignItems="center" display="flex">
            <Logo fill="white" width="52px" />
            <Typography sx={{ ml: '1.25rem', typography: 'logo' }}>
               Bruno.
            </Typography>
         </Box>

         <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            sx={{
               height: '80px',
            }}
         >
            <Tabs
               value={tabIndex}
               sx={{ '& .MuiTabs-indicator': { height: '4px' } }}
               onChange={handleChange}
            >
               {linksArray.map((link, index) => (
                  <Tab
                     key={index}
                     label={link}
                     disableRipple
                     sx={{ ...tabStyle }}
                  />
               ))}
            </Tabs>
         </Box>
      </Box>
   );
};
