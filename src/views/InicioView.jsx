import { Box, Button, Typography } from '@mui/material';
import { FileDownloadOutlined } from '@mui/icons-material';
import customTheme from '../theme/customTheme';

export const InicioView = () => {
   const color = customTheme.palette.primary;

   return (
      <Box sx={{ maxWidth: '900px', my: '4rem', width: '60%' }}>
         <Typography variant="h1">
            Hola, soy Bruno.
            <br />
            Bienvenido a mi sitio web personal.
         </Typography>

         <Typography variant="h3" sx={{ mt: '3.1rem' }}>
            Diseño UX/UI.
            <br />
            Desarrollo y despliegue de 
            <br />
            aplicaciones React/Redux.
         </Typography>

         <Button
            aria-label="download curriculum"
            disableRipple={false}
            startIcon={<FileDownloadOutlined size="large" />}
            sx={{
               bgcolor: 'none',
               border: `1px solid ${color.custom}`,
               borderRadius: '0',
               height: '70px',
               mt: '4rem',
               width: '251px',
               '&:hover': {
                  bgcolor: 'primary.custom',
               },
            }}
         >
            <Typography variant="button">Curriculum Vitae</Typography>
         </Button>
      </Box>
   );
};
