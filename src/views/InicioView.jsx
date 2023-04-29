import { Box, Button, Stack, Tooltip, Typography } from '@mui/material';
import { FileDownloadOutlined } from '@mui/icons-material';
import customTheme from '../theme/customTheme';

export const InicioView = ({ viewBoxStyle }) => {
   const color = customTheme.palette.primary;

   return (
      <Box sx={{ ...viewBoxStyle }}>
         <Typography variant="h1">
            Desarrollador React
            <br />
            Front-End.
         </Typography>

         <Typography variant="h3" sx={{ mt: '3rem' }}>
            Hola, mi nombre es <strong>Bruno</strong>.
            <br />
            Desarrollo y despliegue de aplicaciones
            <br />
            React con Redux.
            <br />
            Diseño UX / UI.
         </Typography>

         <Button
            aria-label="descargar curriculum"
            disableRipple={false}
            startIcon={
               <FileDownloadOutlined size="large" sx={{ fill: 'white' }} />
            }
            sx={{
               bgcolor: `${color.custom}`,
               borderRadius: '0',
               boxShadow: '7px 7px 0 0 #fff',
               height: '70px',
               mt: '3rem',
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

         <Box display={'flex'} sx={{ alignItems: 'center', mt: '3.2rem' }}>
            <Typography variant="h4">Mi Stack</Typography>
            <Typography
               variant="h4"
               sx={{
                  fontWeight: '200',
                  fontSize: '1.2rem',
                  ml: '1.5rem',
                  opacity: '0.5',
               }}
            >
               |
            </Typography>

            <Box display={'flex'} sx={{ alignItems: 'center' }}>
               <Stack direction="row" spacing="1.8rem">
                  HTML, CSS, JS, REACT, SASS
               </Stack>
            </Box>
         </Box>
      </Box>
   );
};
