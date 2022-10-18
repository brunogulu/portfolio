import { alpha, Box, Button, Typography } from '@mui/material';
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
            aria-label="descargar curriculum"
            disableRipple={false}
            startIcon={<FileDownloadOutlined size="large" sx={{ fill: 'white' }} />}
            sx={{
               bgcolor: `${alpha(color.dark, 0.6)}`,
               border: `1px solid ${color.custom}`,
               borderRadius: '0',
               boxShadow: `-10px 10px 0 0 ${color.custom}`,
               height: '70px',
               ml: '10px',
               mt: '4rem',
               width: '251px',
               '&:hover': {
                  bgcolor: `${alpha(color.dark, 0.6)}`,
                  boxShadow: 'none',
                  transform: 'translate(-10px, 10px)',
                  transition: 'all 0.2s ease 0s',
               },
            }}
         >
            <Typography variant="button">Curriculum Vitae</Typography>
         </Button>
      </Box>
   );
};
