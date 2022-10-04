import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

export const Footer = () => {
   const btnStyle = {
      m: '0',
      p: '0',
   };

   return (
      <Box
         display="flex"
         component="footer"
         sx={{ background: 'none', height: '55px', placeItems: 'center', px: '3.4rem' }}
      >
         <Typography flex="1" textAlign="center" sx={{ typography: 'footer' }}>
            © {new Date().getFullYear()} - Bruno Pittilini. Todos los derechos reservados.
         </Typography>

         <Box display="flex" sx={{ placeItems: 'center' }}>
            <Button aria-label="Instagram" color="inherit" disableRipple sx={{ ...btnStyle }}>
               <Instagram sx={{ opacity: '75%' }} />
            </Button>
            <Button aria-label="LinkedIn" color="inherit" disableRipple sx={{ ...btnStyle }}>
               <LinkedIn sx={{ opacity: '75%' }} />
            </Button>
            <Button aria-label="GitHub" color="inherit" disableRipple sx={{ ...btnStyle }}>
               <GitHub sx={{ opacity: '75%' }} />
            </Button>
         </Box>
      </Box>
   );
};
