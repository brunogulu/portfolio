import React from 'react';
import { Box } from '@mui/material';
import { Presentation } from '../ui/components/Presentation';
import SimpleAccordion from '../ui/components/SimpleAccordion';

export const HabilidadesView = ({ viewBoxStyle }) => {
   const data = {
      title: 'Mis habilidades',
      subtitle: 'Tecnologías, lenguajes y programas con los que estoy familiarizado.',
   };

   return (
      <Box sx={{ ...viewBoxStyle }}>
         <Presentation title={data.title} subtitle={data.subtitle} />

         <SimpleAccordion />
      </Box>
   );
};
