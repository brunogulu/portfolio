import React, { useMemo, memo } from 'react';
import { Box } from '@mui/material';
import { Presentation } from '../ui/components/Presentation';
import { ContactForm } from '../ui/components';
import { SnackbarProvider } from 'notistack';

// Datos estáticos fuera del componente
const CONTACT_DATA = {
   title: 'Contacto',
   subtitle: '¿Quieres contactarme? Envíame un correo o búscame en las redes.',
};

const ContactoViewComponent = ({ viewBoxStyle }) => {
   // Memoizar el merge de estilos
   const mergedStyles = useMemo(
      () => ({
         ...viewBoxStyle,
      }),
      [viewBoxStyle]
   );

   // Memoizar el provider para evitar recreación
   const formSection = useMemo(
      () => (
         <SnackbarProvider maxSnack={3}>
            <ContactForm />
         </SnackbarProvider>
      ),
      []
   );

   return (
      <Box sx={mergedStyles}>
         <Presentation
            title={CONTACT_DATA.title}
            subtitle={CONTACT_DATA.subtitle}
         />
         {formSection}
      </Box>
   );
};

export const ContactoView = memo(ContactoViewComponent);
