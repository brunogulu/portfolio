import { createTheme } from '@mui/material/styles';

// Constantes reutilizables
const COLOR = {
   PRIMARY: '#fff',
   SECONDARY: '#000',
   CUSTOM: '#004D40', // Actualizar también en styles.scss
   FOOTER_TEXT: 'rgba(255, 255, 255, 0.75)',
};

const FONT_FAMILIES = {
   MAIN: ['Montserrat', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
   SECONDARY: '"Old Standard TT"',
   ACCENT: '"Exo 2"',
};

const TYPOGRAPHY_COMMON = {
   H1: {
      fontWeight: 700,
      letterSpacing: '-0.06em',
      '@media (max-width:900px)': { fontSize: '3.6rem', lineHeight: '3.3rem' },
   },
   BUTTON: {
      fontFamily: FONT_FAMILIES.ACCENT,
      fontWeight: 300,
      letterSpacing: '0.04em',
   },
   NAV_LINKS: {
      letterSpacing: '0.02em',
      fontFamily: FONT_FAMILIES.ACCENT,
      fontWeight: 300,
      textTransform: 'uppercase',
   },
};

// Configuración común de componentes
const COMPONENT_STYLES = {
   INPUT: {
      color: COLOR.PRIMARY,
      '& .MuiOutlinedInput-notchedOutline': { borderColor: COLOR.PRIMARY },
      '&:hover .MuiOutlinedInput-notchedOutline': {
         borderColor: COLOR.PRIMARY,
         opacity: 0.8,
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
         borderColor: 'error.main',
      },
   },
};

const customTheme = createTheme({
   typography: {
      fontFamily: FONT_FAMILIES.MAIN,
      h1: {
         ...TYPOGRAPHY_COMMON.H1,
         fontSize: '3.56rem',
         lineHeight: '3.5rem',
      },
      h2: {
         fontSize: '4.25rem',
         fontWeight: 400,
         letterSpacing: '-0.02em',
         lineHeight: '5.1rem',
      },
      h3: { fontSize: '1.4rem', fontWeight: 300 },
      h4: { fontSize: '1rem', fontWeight: 'bold' },
      subtitle1: {
         fontFamily: FONT_FAMILIES.SECONDARY,
         fontSize: '2rem',
         lineHeight: '3rem',
         fontWeight: 400,
      },
      body1: {
         fontFamily: FONT_FAMILIES.ACCENT,
         fontSize: '1.1rem',
         fontStyle: 'italic',
         lineHeight: '1.4rem',
      },
      button: {
         ...TYPOGRAPHY_COMMON.BUTTON,
         color: 'white',
         fontSize: '0.97rem',
      },
      navLinks: {
         ...TYPOGRAPHY_COMMON.NAV_LINKS,
         color: COLOR.PRIMARY,
         lineHeight: '5rem',
         fontSize: '1.05rem',
      },
      logo: {
         letterSpacing: '-0.06em',
         fontFamily: 'Montserrat',
         fontSize: '1.45rem',
         fontWeight: 700,
      },
      footer: {
         color: COLOR.FOOTER_TEXT,
         fontFamily: 'Montserrat',
         fontSize: '0.78rem',
         fontWeight: 300,
      },
   },

   palette: {
      primary: {
         light: COLOR.PRIMARY,
         main: COLOR.PRIMARY,
         dark: COLOR.SECONDARY,
      },
      custom: { main: COLOR.CUSTOM },
   },

   components: {
      MuiTooltip: {
         styleOverrides: {
            tooltip: { backgroundColor: COLOR.PRIMARY, color: COLOR.SECONDARY },
            arrow: { color: COLOR.PRIMARY },
         },
      },
      MuiTextField: {
         defaultProps: {
            size: 'small',
            fullWidth: true,
            inputProps: { autoComplete: 'off', 'aria-autocomplete': 'none' },
         },
         styleOverrides: { root: { color: COLOR.PRIMARY } },
      },
      MuiInputLabel: {
         styleOverrides: {
            root: {
               color: COLOR.PRIMARY,
               fontWeight: 600,
               '& .MuiInputLabel-asterisk': { visibility: 'hidden' },
            },
         },
      },
      MuiOutlinedInput: { styleOverrides: { root: COMPONENT_STYLES.INPUT } },
      MuiIconButton: {
         styleOverrides: {
            root: {
               '&:hover': { backgroundColor: 'transparent', color: 'inherit' },
            },
         },
      },
   },
});

export default customTheme;
