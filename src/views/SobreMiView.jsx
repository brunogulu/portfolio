import React from 'react';
import { Presentation } from '../ui/components/Presentation';
import { Box, Typography } from '@mui/material';

const CONTENT = {
   title: 'Sobre mí',
   subtitle: 'Descubre cómo he llegado hasta aquí y qué puedo ofrecer.',
   paragraphs: [
      'Mi nombre es Bruno, soy un desarrollador autodidacta apasionado por la creación de productos digitales útiles, intuitivos y atractivos.',
      'Mi experiencia se enfoca en el desarrollo con React, diseño UX/UI y la gestión de estado con Redux. Me encanta trabajar en proyectos desafiantes. Mi enfoque en el diseño centrado en el usuario me ha llevado a desarrollar habilidades en el diseño de prototipos y optimización de la experiencia de usuario. También me interesa mucho mantenerme actualizado en las últimas tendencias y tecnologías relacionadas con el desarrollo y diseño de productos digitales.',
      'Me considero una persona colaborativa y orientada a objetivos, con habilidades para comunicarme de manera efectiva y trabajar en equipo. Mi objetivo es trabajar en proyectos innovadores que permitan continuar mi aprendizaje y crecimiento profesional, mientras contribuyo al éxito del equipo y la empresa.',
   ],
};

const SobreMiViewComponent = ({ viewBoxStyle }) => (
   <Box sx={viewBoxStyle} component="section" aria-label="Sobre mí">
      <Presentation title={CONTENT.title} subtitle={CONTENT.subtitle} />

      {CONTENT.paragraphs.map((text, index) => (
         <Typography
            key={index}
            variant="body1"
            paragraph
            sx={{
               maxWidth: 600,
               mt: { xs: 2, md: 3 },
               textAlign: 'left',
               '&:not(:last-child)': { mb: 3 },
            }}
         >
            {text}
         </Typography>
      ))}
   </Box>
);

export const SobreMiView = React.memo(SobreMiViewComponent);
