import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
   typography: {
      fontFamily: [
         'Montserrat',
         '"Fira Sans"',
         '"Playfair Display"',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
      ].join(','),

      h1: {
         fontSize: '5.25rem',
         fontWeight: '700',
         letterSpacing: '-0.06em',
         lineHeight: '5.6rem',
         '@media (max-width:900px)': {
            fontSize: '3.6rem',
            lineHeight: '3.3rem',
         },
      },

      h2: {
         fontSize: '4.25rem',
         fontWeight: '400',
         letterSpacing: '-0.02em',
         lineHeight: '5.1rem',
      },

      h3: {
         fontSize: '1.5rem',
         fontWeight: '400',
      },

      subtitle1: {
         fontFamily: '"Playfair Display"',
         fontSize: '1.9rem',
         fontWeight: '400',
      },

      body1: {
         fontSize: '1.13rem',
         fontStyle: 'italic',
         fontWeight: '400',
         lineHeight: '1.5rem',
      },

      button: {
         color: 'white',
         fontWeight: '400',
         fontSize: '0.95rem',
      },

      navLinks: {
         color: '#fff',
         letterSpacing: '0.02em',
         lineHeight: '5rem',
         fontFamily: '"Fira Sans"',
         fontSize: '1.05rem',
         fontWeight: '300',
         textTransform: 'uppercase',
      },

      logo: {
         letterSpacing: '-0.06em',
         fontSize: '1.45rem',
         fontWeight: '700',
      },

      footer: {
         color: 'rgba(255, 255, 255, 0.75)',
         fontSize: '0.78rem',
         fontWeight: '300',
      },
   },

   palette: {
      primary: {
         custom: '#662CC6',
         light: '#fff',
         main: '#fff',
         dark: '#000',
      },
   },

   components: {
      MuiButtonBase: {
         defaultProps: {
            disableRipple: true,
         },
      },

      MuiTooltip: {
         defaultProps: {
            componentsProps: {
               tooltip: {
                  sx: {
                     bgcolor: 'primary.main',
                     color: 'primary.dark',
                  },
               },

               arrow: {
                  sx: {
                     color: 'primary.main',
                  },
               },
            },
         },
      },
   },
});

export default customTheme;
