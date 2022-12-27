import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function SimpleAccordion({ skills }) {
   const typographyStyle = {
      color: 'primary.light',
      fontSize: '1.125rem',
      fontFamily: 'Fira Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      ml: '1rem',
   };

   const skillStyle = {
      m: '1rem 1rem 1rem 2rem',
   };

   return (
      <div className="accordion">
         <Accordion sx={{ bgcolor: '#212121', padding: '0.3rem' }}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography sx={{ ...typographyStyle }}>Programación & Desarrollo</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ bgcolor: '#1A1A1A', padding: '1rem' }}>
               {skills.programming.map(skill => {
                  return (
                     <Typography key={skill} sx={{ ...typographyStyle, ...skillStyle }}>
                        <div className="accordion__arrow">
                           <TrendingFlatIcon sx={{ mr: '1rem' }} />
                           {skill}
                        </div>
                     </Typography>
                  );
               })}
            </AccordionDetails>
         </Accordion>

         <Accordion sx={{ bgcolor: '#212121', padding: '0.3rem' }}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography sx={{ ...typographyStyle }}>Diseño & Maquetación</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ bgcolor: '#1A1A1A', padding: '1rem' }}>
               {skills.design.map(skill => {
                  return (
                     <Typography key={skill} sx={{ ...typographyStyle, ...skillStyle }}>
                        <div className="accordion__arrow">
                           <TrendingFlatIcon sx={{ mr: '1rem' }} />
                           {skill}
                        </div>
                     </Typography>
                  );
               })}
            </AccordionDetails>
         </Accordion>

         <Accordion sx={{ bgcolor: '#212121', padding: '0.3rem' }}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography sx={{ ...typographyStyle }}>Otros</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ bgcolor: '#1A1A1A', padding: '1rem' }}>
               {skills.others.map(skill => {
                  return (
                     <Typography key={skill} sx={{ ...typographyStyle, ...skillStyle }}>
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
