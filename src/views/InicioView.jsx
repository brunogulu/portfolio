import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import { FileDownloadOutlined } from '@mui/icons-material';
import { MiStackSVGs } from '../ui/components/MiStack';

const STACK_SVG_ITEMS = {};

export const InicioView = ({ viewBoxStyle }) => {
   return (
      <Box sx={viewBoxStyle}>
         {/* Títulos optimizados con jerarquía semántica */}
         <Typography variant="h1" gutterBottom>
            Desarrollador React
            <br />
            Front-End
         </Typography>

         {/* Subtítulos con componente semántico h2 y spacing sistematizado */}
         <Typography variant="h3" component="h2" mt={4} mb={6}>
            ¡Bienvenido/a a mi portfolio!
            <br />
            Desarrollo con React, diseño UX/UI
            <br />y gestión de estados con Redux.
         </Typography>

         {/* Botón usando componente MUI con estilos integrados */}
         <Button
            color="custom"
            variant="contained"
            startIcon={<FileDownloadOutlined />}
            size="large"
            sx={{
               px: 4,
               py: 2,
               '& .MuiButton-startIcon': { mr: 2 },
            }}
         >
            Curriculum Vitae
         </Button>

         {/* Sección de Stack tecnológico optimizada */}
         <Box mt={8} display="flex" alignItems="center">
            <Typography variant="h4" component="h3">
               Mi Stack
            </Typography>

            <Typography component="span" mx={3} aria-hidden="true">
               |
            </Typography>

            <Stack direction="row" spacing={3}>
               <MiStackSVGs direction="row" />
            </Stack>
         </Box>
      </Box>
   );
};
