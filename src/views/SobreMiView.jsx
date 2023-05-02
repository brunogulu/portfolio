import React from 'react';
import { Presentation } from '../ui/components/Presentation';
import { Box, Typography } from '@mui/material';

export const SobreMiView = ({ viewBoxStyle }) => {
   const data = {
      title: 'Sobre mí',
      subtitle: 'Descubre quién soy y a qué me dedico.',
   };

   return (
      <Box sx={{ ...viewBoxStyle }}>
         <Presentation title={data.title} subtitle={data.subtitle} />
         {/* <Typography variant="body1" sx={{ maxWidth: '600px', mt: '80px', textAlign: 'justify' }}>
            Mi nombre es Bruno, soy estudiante de Ingeniería en Sistemas de Información, diseñador y
            programador web autodidacta.
            <br />
            <br />A principios del año 2020 comencé con la programación en el lenguaje C#. Durante 8
            meses realicé pequeños proyectos a modo de práctica tales como MVC, API y ASP.Net entre
            otros.
            <br />
            <br />
            Luego de esto opté por comenzar a estudiar el lenguaje JavaScript, actualmente me
            encuentro leyendo manuales y realizando prácticas con el fin de adquirir los
            conocimientos necesarios para así poder convertirme en desarrollador de dicho lenguaje.
            <br />
            <br />
            Me gusta y entretiene mucho el diseño y la maquetación web, fue lo que me impulsó a
            aprender HTML y CSS. Tengo buenos conocimientos y manejo fluido en programas tales como
            Photoshop, Illustrator, Xd/Figma.
         </Typography> */}
         <Typography
            variant="body1"
            sx={{ maxWidth: '600px', mt: '80px', textAlign: 'left' }}
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
