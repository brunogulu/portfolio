import { Box, Stack, Tooltip, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

export const Footer = () => {
   const social = {
      instagram: 'brunopittilini_',
      github: 'brunogulu',
      linkedin: 'bipittilini',
   };

   return (
      <Box
         component="footer"
         display="flex"
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

         <Stack direction="row" spacing="2rem">
            <Tooltip title="Instagram" arrow>
               <a href={`https://www.instagram.com/${social.instagram}`}>
                  <Instagram />
               </a>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
               <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
                  <LinkedIn />
               </a>
            </Tooltip>
            <Tooltip title="GitHub" arrow>
               <a href={`https://github.com/${social.github}`}>
                  <GitHub />
               </a>
            </Tooltip>
         </Stack>
      </Box>
   );
};
