import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Typography from '@mui/material/Typography';

const typographyStyle = {
   color: 'primary.light',
   fontSize: '1.125rem',
   fontFamily: '"Exo 2"',
   fontStyle: 'normal',
   fontWeight: '600',
   ml: '1rem',
};

const skillStyle = {
   m: '1rem 1rem 1rem 2rem',
};

const Accordion = styled(props => <MuiAccordion disableGutters {...props} />)(
   ({ theme }) => ({})
);

const AccordionSummary = styled(props => (
   <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(({ theme }) => ({
   backgroundColor: '#212121',
   padding: '0.3rem',
   flexDirection: 'row-reverse',
   '& .MuiAccordionSummary-expandIconWrapper': {
      marginLeft: theme.spacing(2),
   },
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(180deg)',
   },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   backgroundColor: '#1A1A1A',
   borderTop: '1px solid rgba(0, 0, 0, .2)',
   padding: theme.spacing(2),
}));

export default function CustomizedAccordions({ skills }) {
   const [expanded, setExpanded] = React.useState('panel1');

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
               expandIcon={<ExpandMoreIcon />}
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
                        <div className="accordion__arrow">
                           <TrendingFlatIcon sx={{ mr: '1rem' }} />
                           {skill}
                        </div>
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
               expandIcon={<ExpandMoreIcon />}
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
                        <div className="accordion__arrow">
                           <TrendingFlatIcon sx={{ mr: '1rem' }} />
                           {skill}
                        </div>
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
               expandIcon={<ExpandMoreIcon />}
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
                        <div className="accordion__arrow">
                           <TrendingFlatIcon sx={{ mr: '1rem' }} />
                           {skill}
                        </div>
                     </Typography>
                  );
               })}
            </AccordionDetails>
         </Accordion>
      </div>
   );
}
