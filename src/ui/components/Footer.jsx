import { Box, Stack, Tooltip, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

export const Footer = () => {
   const social = {
      instagram: 'bruno.pittilini',
      github: 'brunogulu',
      linkedin: 'bipittilini',
   };

   const btnSocialStyle = {
      fontSize: '30',
      opacity: '0.75',
      shapeRendering: 'geometricPrecision',
      sx: {
         ['&:hover']: {
            opacity: '1',
         },
      },
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
            © {new Date().getFullYear()} - Bruno Pittilini. Todos los derechos
            reservados.
         </Typography>

         <Stack direction="row" spacing="1.8rem">
            <Tooltip title="Instagram" arrow>
               <a href={`https://www.instagram.com/${social.instagram}`}>
                  <Instagram {...btnSocialStyle} />
               </a>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
               <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
                  <LinkedIn {...btnSocialStyle} />
               </a>
            </Tooltip>
            <Tooltip title="GitHub" arrow>
               <a href={`https://github.com/${social.github}`}>
                  <GitHub {...btnSocialStyle} />
               </a>
            </Tooltip>
         </Stack>
      </Box>
   );
};
