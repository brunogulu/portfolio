import React, { useMemo, memo } from 'react';
import { Box } from '@mui/material';
import { Presentation } from '../ui/components/Presentation';
import CustomAccordion from '../ui/components/CustomAccordionOld';

// Datos estáticos fuera del componente
const SECTION_DATA = {
   title: 'Mis habilidades',
   subtitle:
      'Tecnologías, lenguajes y programas con los que estoy familiarizado.',
};

const SKILLS = {
   programming: ['ReactJS', 'Javascript', 'Redux, React Redux, RTK Query'],
   design: [
      'SASS',
      'MaterialUI',
      'Figma',
      'Adobe Photoshop',
      'Adobe Illustrator',
   ],
   others: ['Github', 'Firebase', 'React Router', 'Axios'],
};

const HabilidadesViewComponent = ({ viewBoxStyle }) => {
   // Memoizar la combinación de estilos
   const containerStyles = useMemo(
      () => ({
         ...viewBoxStyle,
      }),
      [viewBoxStyle]
   );

   return (
      <Box sx={containerStyles}>
         <Presentation
            title={SECTION_DATA.title}
            subtitle={SECTION_DATA.subtitle}
         />
         <CustomAccordion skills={SKILLS} />
      </Box>
   );
};

export const HabilidadesView = memo(HabilidadesViewComponent);
