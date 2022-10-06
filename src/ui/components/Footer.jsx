import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

export const Footer = () => {
   const btnStyle = {
      m: '0',
      p: '0',
   };

   return (
      <Box
         display="flex"
         component="footer"
         sx={{
            background: 'none',
            height: '55px',
            mb: '0.5rem',
            placeItems: 'center',
            px: '3.4rem',
         }}
      >
         <Typography flex="1" textAlign="left" sx={{ typography: 'footer' }}>
            © {new Date().getFullYear()} - Bruno Pittilini. Todos los derechos reservados.
         </Typography>

         <Stack direction="row" spacing="2.2rem">
            <a href="https://www.instagram.com">
               <Instagram />
            </a>
            <a href="https://www.linkedin.com">
               <LinkedIn />
            </a>
            <a href="https://github.com/">
               <GitHub />
            </a>
         </Stack>
      </Box>
   );
};
