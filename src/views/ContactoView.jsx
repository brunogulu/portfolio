import React from 'react';
import { Box } from '@mui/material';
import { Presentation } from '../ui/components/Presentation';
import { Form } from '../ui/components';
import { SnackbarProvider } from 'notistack';

export const ContactoView = ({ viewBoxStyle }) => {
   const data = {
      title: 'Contacto',
      subtitle:
         '¿Quieres contactarme?  Envíame un correo o búscame en las redes.',
   };

   return (
      <Box sx={{ ...viewBoxStyle }}>
         <Presentation title={data.title} subtitle={data.subtitle} />

         <SnackbarProvider>
            <Form />
         </SnackbarProvider>
      </Box>
   );
};
