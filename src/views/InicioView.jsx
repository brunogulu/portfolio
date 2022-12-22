import { Box, Button, Typography } from '@mui/material';
import { FileDownloadOutlined } from '@mui/icons-material';
import customTheme from '../theme/customTheme';

export const InicioView = ({ viewBoxStyle }) => {
   const color = customTheme.palette.primary;

   return (
      <Box sx={{ ...viewBoxStyle }}>
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
               bgcolor: `${color.custom}`,
               borderRadius: '0',
               boxShadow: '7px 7px 0 0 #fff',
               height: '70px',
               mt: '4rem',
               ml: '-7px',
               width: '251px',
               '&:hover': {
                  bgcolor: `${color.custom}`,
                  boxShadow: 'none',
                  transform: 'translate(5px, 5px)',
                  transition: 'all 0.2s ease 0s',
               },
            }}
         >
            <Typography variant="button">Curriculum Vitae</Typography>
         </Button>
      </Box>
   );
};
