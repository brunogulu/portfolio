import React from 'react';
import { Presentation } from '../ui/components/Presentation';
import { Box, Typography } from '@mui/material';

export const SobreMiView = ({ viewBoxStyle }) => {
   const data = {
      title: 'Sobre mí',
      subtitle: 'Descubre cómo he llegado hasta aquí y qué puedo ofrecer.',
   };

   return (
      <Box sx={{ ...viewBoxStyle }}>
         <Presentation title={data.title} subtitle={data.subtitle} />
         <Typography
            variant="body1"
            sx={{ maxWidth: '600px', mt: '3rem', textAlign: 'left' }}
         >
            Mi nombre es Bruno, soy un desarrollador autodidacta apasionado por
            la creación de productos digitales útiles, intuitivos y atractivos.
            <br />
            <br />
            Mi experiencia se enfoca en el desarrollo con React, diseño UX/UI y
            la gestión de estado con Redux. Me encanta trabajar en proyectos
            desafiantes. Mi enfoque en el diseño centrado en el usuario me ha
            llevado a desarrollar habilidades en el diseño de prototipos y
            optimización de la experiencia de usuario. También me interesa mucho
            mantenerme actualizado en las últimas tendencias y tecnologías
            relacionadas con el desarrollo y diseño de productos digitales.
            <br />
            <br />
            Me considero una persona colaborativa y orientada a objetivos, con
            habilidades para comunicarme de manera efectiva y trabajar en
            equipo. Mi objetivo es trabajar en proyectos innovadores que
            permitan continuar mi aprendizaje y crecimiento profesional,
            mientras contribuyo al éxito del equipo y la empresa.
         </Typography>
      </Box>
   );
};
