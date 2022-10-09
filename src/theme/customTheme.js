import { createTheme } from '@mui/material/styles';

const green = '#B6EE97';

const customTheme = createTheme({
   typography: {
      fontFamily: [
         '"Fira Sans"',
         'Montserrat',
         '"Playfair Display"',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
      ].join(','),

      h1: {
         fontSize: '5.3rem',
         fontWeight: '700',
         letterSpacing: '-0.04em',
         lineHeight: '5.6rem',
      },

      h2: {
         fontSize: '4.25rem',
         fontWeight: '400',
         letterSpacing: '-0.02em',
         lineHeight: '5.1rem',
      },

      h3: {
         fontFamily: '"Playfair Display"',
         fontSize: '1.88rem',
         fontWeight: '400',
         letterSpacing: '0.03em',
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
         fontWeight: '400',
         fontSize: '1.13rem',
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
         fontFamily: 'Montserrat',
         fontSize: '1.45rem',
         fontWeight: '700',
      },

      footer: {
         color: 'rgba(255, 255, 255, 0.75)',
         fontFamily: 'Montserrat',
         fontSize: '0.78rem',
         fontWeight: '300',
      },
   },

   palette: {
      primary: {
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

      MuiSvgIcon: {
         defaultProps: {
            fontSize: '30',
            opacity: '0.75',
            shapeRendering: 'geometricPrecision',
            sx: {
               '&:hover': {
                  opacity: 1,
               },
            },
         },
      },

      MuiTooltip: {
         defaultProps: {
            componentsProps: {
               tooltip: {
                  sx: {
                     bgcolor: 'primary.light',
                     color: 'primary.dark',
                  },
               },

               arrow: {
                  sx: {
                     color: 'primary.light',
                  },
               },
            },
         },
      },
   },
});

export default customTheme;
