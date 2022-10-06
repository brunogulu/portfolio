import React from 'react';
import { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Logo } from '../../assets';

export const Navbar = () => {
   // Enlaces
   const linksArray = ['inicio', 'sobre mí', 'habilidades', 'contacto'];

   // Index de la etiqueta <Tab /> correspondiente
   const [value, setValue] = useState(0);

   // Evento de <Tabs />
   const handleChange = (event, newValue) => {
      event.preventDefault();
      setValue(newValue);
   };

   // Estilo personalizado de <Tab />
   const tabStyle = {
      minWidth: 'auto',
      ml: '2rem',
      p: '0',
      typography: 'navLinks',
      '&.Mui-selected': {
         fontWeight: '400',
      },
   };

   return (
      <Box
         alignItems="center"
         display="flex"
         justifyContent="space-between"
         sx={{
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            px: '3.4rem',
         }}
      >
         <Box alignItems="center" display="flex">
            <Logo fill="white" width="52px" />
            <Typography sx={{ ml: '1.25rem', typography: 'logo' }}>Bruno.</Typography>
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
               value={value}
               sx={{ '& .MuiTabs-indicator': { height: '4px' } }}
               onChange={handleChange}
            >
               {linksArray.map((link, index) => (
                  <Tab key={index} label={link} disableRipple sx={{ ...tabStyle }} />
               ))}
            </Tabs>
         </Box>
      </Box>
   );
};
