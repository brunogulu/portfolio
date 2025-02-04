import { Box, Stack, Tooltip, Typography, IconButton } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React, { useMemo, memo } from 'react';

// Datos estáticos fuera del componente
const SOCIAL_LINKS = [
   {
      title: 'Instagram',
      icon: <Instagram />,
      url: 'https://www.instagram.com/bruno.pittilini',
   },
   {
      title: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/bipittilini',
   },
   {
      title: 'GitHub',
      icon: <GitHub />,
      url: 'https://github.com/brunogulu',
   },
];

// Estilos memoizados
const useStyles = () => {
   const footerStyles = useMemo(
      () => ({
         background: 'none',
         height: 55,
         mb: 0.5,
         mt: 2,
         px: 3.4,
      }),
      []
   );

   const iconButtonStyles = useMemo(
      () => ({
         opacity: 0.75,
         '&:hover': {
            opacity: 1,
            backgroundColor: 'transparent', // Mejora accesibilidad hover
         },
      }),
      []
   );

   return { footerStyles, iconButtonStyles };
};

export const Footer = memo(() => {
   const { footerStyles, iconButtonStyles } = useStyles();
   const currentYear = useMemo(() => new Date().getFullYear(), []);

   return (
      <Box
         component="footer"
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         sx={footerStyles}
      >
         <Typography variant="body2" sx={{ typography: 'footer' }}>
            © {currentYear} - Bruno Pittilini.
         </Typography>

         <Stack direction="row" spacing={2}>
            {SOCIAL_LINKS.map(({ title, icon, url }) => (
               <Tooltip key={title} title={title} arrow enterTouchDelay={0}>
                  <IconButton
                     component="a"
                     href={url}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={`Enlace a ${title}`}
                     sx={iconButtonStyles}
                  >
                     {icon}
                  </IconButton>
               </Tooltip>
            ))}
         </Stack>
      </Box>
   );
});
