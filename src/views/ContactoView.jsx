import React from 'react';
import { Box } from '@mui/material';
import { Presentation } from '../ui/components/Presentation';
import { Form } from '../ui/components';

export const ContactoView = ({ viewBoxStyle }) => {
   const data = {
      title: 'Contacto',
      subtitle:
         '¿Quieres contactarme?  Envíame un correo o búscame en las redes.',
   };

   return (
      <Box sx={{ ...viewBoxStyle }}>
         <Presentation title={data.title} subtitle={data.subtitle} />

         <Form />
      </Box>
   );
};
