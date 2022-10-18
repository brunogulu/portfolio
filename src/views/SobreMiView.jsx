import { Box, Typography } from '@mui/material';
import React from 'react';

export const SobreMiView = () => {
   return (
      <Box sx={{ maxWidth: '900px', my: '4rem', width: '60%' }}>
         <Box sx={{ position: 'relative' }}>
            <Typography variant="h1">Sobre mí</Typography>
            <div className="rombo rombo-2"></div>
            <div className="rombo rombo-1"></div>
         </Box>
         <div className="divider"></div>
         <Typography variant="subtitle1" sx={{ mt: '40px' }}>
            Descubre quién soy y a qué me dedico.
         </Typography>
         <Typography variant="body1" sx={{ maxWidth: '600px', mt: '80px', textAlign: 'justify' }}>
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
         </Typography>
      </Box>
   );
};
