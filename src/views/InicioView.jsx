import { Box, Button, Typography } from '@mui/material';
import { FileDownloadOutlined } from '@mui/icons-material';

export const InicioView = () => {
   return (
      <Box sx={{ maxWidth: '42vw' }}>
         <Typography variant="h1">
            Hola, soy Bruno.
            <br />
            Bienvenido a mi sitio web personal.
         </Typography>

         <Typography variant="h3" width="50%" sx={{ mt: '3.1rem' }}>
            Diseño UX/UI.
            <br />
            Desarrollo y despliegue de aplicaciones React/Redux.
         </Typography>

         <Button
            aria-label="download curriculum"
            disableRipple={false}
            startIcon={<FileDownloadOutlined size="large" sx={{ fill: 'white' }} />}
            sx={{
               bgcolor: 'none',
               border: '1px solid #662CC6',
               borderRadius: '0',
               height: '70px',
               mt: '3.1rem',
               width: '251px',
               '&:hover': {
                  bgcolor: '#662CC6',
               },
            }}
         >
            <Typography variant="button">Curriculum Vitae</Typography>
         </Button>
      </Box>
   );
};
