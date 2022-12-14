import { createTheme } from '@mui/material/styles';

// const customColor = '#4127E0';   // Cambiar también en styles.scss
const customColor = '#DA0F34';   // Cambiar también en styles.scss

const customTheme = createTheme({
   typography: {
      fontFamily: [
         'Montserrat',
         '"Fira Sans"',
         '"Old Standard TT"',
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
         lineHeight: '3rem',
         fontFamily: '"Old Standard TT"',
         fontSize: '2rem',
         fontWeight: '400',
      },

      body1: {
         fontFamily: '"Fira Sans"',
         fontSize: '1rem',
         fontStyle: 'italic',
         lineHeight: '1.3rem',
      },

      button: {
         color: 'white',
         fontFamily: '"Fira Sans"',
         fontWeight: '200',
         fontSize: '0.97rem',
         letterSpacing: '0.04em'
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
         custom: customColor,
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
