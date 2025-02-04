import React, { useCallback, useMemo, memo } from 'react';
import { styled } from '@mui/material/styles';
import {
   Accordion as MuiAccordion,
   AccordionSummary as MuiAccordionSummary,
   AccordionDetails as MuiAccordionDetails,
   Typography,
   useTheme,
} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// Configuración constante fuera del componente
const CATEGORIES = [
   { label: 'Programación & Desarrollo', key: 'programming' },
   { label: 'Diseño & Maquetación', key: 'design' },
   { label: 'Otros', key: 'others' },
];

// Componentes estilizados memoizados
const Accordion = memo(
   styled(MuiAccordion)(({ theme }) => ({
      border: `1px solid ${theme.palette.primary.dark}`,
      '&:not(:last-child)': { borderBottom: 0 },
      '&::before': { display: 'none' },
   }))
);

const AccordionSummary = memo(
   styled(MuiAccordionSummary)(({ theme }) => ({
      backgroundColor: theme.palette.primary.contrastText,
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
         transform: 'rotate(90deg)',
      },
   }))
);

const AccordionDetails = memo(
   styled(MuiAccordionDetails)(({ theme }) => ({
      backgroundColor: theme.palette.primary.dark,
      borderTop: `1px solid ${theme.palette.primary.light}25`,
      padding: theme.spacing(2),
   }))
);

const CustomAccordion = ({ skills }) => {
   const theme = useTheme();
   const [expanded, setExpanded] = React.useState(null);

   // Memoizar estilos comunes
   const typographyStyle = useMemo(
      () => ({
         color: theme.palette.primary.light,
         fontSize: '1.125rem',
         fontFamily: theme.typography.body1.fontFamily,
         fontWeight: 400,
         ml: theme.spacing(0.5),
      }),
      [theme]
   );

   const skillStyle = useMemo(
      () => ({
         m: theme.spacing(0.5),
      }),
      [theme]
   );

   // Handler memoizado
   const handleChange = useCallback(
      panel => (_, newExpanded) => setExpanded(newExpanded ? panel : null),
      []
   );

   // Estilo del icono memoizado
   const expandIconStyle = useMemo(
      () => ({
         fontSize: '0.9rem',
      }),
      []
   );

   return (
      <div>
         {CATEGORIES.map(({ label, key }, index) => {
            const panelId = `panel${index}`;

            return (
               <Accordion
                  key={key}
                  expanded={expanded === panelId}
                  onChange={handleChange(panelId)}
               >
                  <AccordionSummary
                     expandIcon={
                        <ArrowForwardIosSharpIcon sx={expandIconStyle} />
                     }
                     aria-controls={`${panelId}-content`}
                     id={`${panelId}-header`}
                  >
                     <Typography component="span" sx={typographyStyle}>
                        {label}
                     </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                     {skills[key].map(skill => (
                        <Typography
                           key={skill}
                           component="span"
                           sx={{ ...typographyStyle, ...skillStyle }}
                        >
                           {skill}
                        </Typography>
                     ))}
                  </AccordionDetails>
               </Accordion>
            );
         })}
      </div>
   );
};

export default memo(CustomAccordion);
