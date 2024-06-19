import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import customTheme from '../../theme/customTheme';

const color = customTheme.palette;
const typographyStyle = {
   display: 'block',
   color: 'primary.light',
   fontSize: '1.125rem',
   fontFamily: '"Exo 2"',
   fontStyle: 'normal',
   fontWeight: '400',
   ml: '.5rem',
};
const skillStyle = {
   m: '.5rem',
};

const Accordion = styled(props => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
   border: `1px solid rgba(0, 0, 0, .8)`,
   '&:not(:last-child)': {
      borderBottom: 0,
   },
   '&::before': {
      display: 'none',
   },
}));

const AccordionSummary = styled(props => (
   <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
   />
))(({ theme }) => ({
   backgroundColor: color.primary.contrastText,
   flexDirection: 'row-reverse',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
   },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   backgroundColor: color.primary.dark,
   borderTop: '1px solid rgba(0, 0, 0, .125)',
   padding: theme.spacing(2),
}));

export default function CustomAccordion2({ skills }) {
   const [expanded, setExpanded] = React.useState();

   const handleChange = panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
   };

   return (
      <div className="accordion">
         <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
         >
            <AccordionSummary
               aria-controls="panel1d-content"
               id="panel1d-header"
            >
               <Typography component={'span'} sx={{ ...typographyStyle }}>
                  Programación & Desarrollo
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               {skills.programming.map(skill => {
                  return (
                     <Typography
                        component={'span'}
                        key={skill}
                        sx={{ ...typographyStyle, ...skillStyle }}
                     >
                        {skill}
                     </Typography>
                  );
               })}
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
         >
            <AccordionSummary
               aria-controls="panel2d-content"
               id="panel2d-header"
            >
               <Typography component={'span'} sx={{ ...typographyStyle }}>
                  Diseño & Maquetación
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               {skills.design.map(skill => {
                  return (
                     <Typography
                        component={'span'}
                        key={skill}
                        sx={{ ...typographyStyle, ...skillStyle }}
                     >
                        {skill}
                     </Typography>
                  );
               })}
            </AccordionDetails>
         </Accordion>
         <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
         >
            <AccordionSummary
               aria-controls="panel3d-content"
               id="panel3d-header"
            >
               <Typography component={'span'} sx={{ ...typographyStyle }}>
                  Otros
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               {skills.others.map(skill => {
                  return (
                     <Typography
                        component={'span'}
                        key={skill}
                        sx={{ ...typographyStyle, ...skillStyle }}
                     >
                        {skill}
                     </Typography>
                  );
               })}
            </AccordionDetails>
         </Accordion>
      </div>
   );
}
