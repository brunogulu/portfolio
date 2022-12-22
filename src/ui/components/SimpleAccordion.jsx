import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
   const typographyStyle = {
      color: 'primary.light',
      fontSize: '1.125rem',
      fontFamily: 'Fira Sans',
      fontStyle: 'normal',
      fontWeight: '600',
   };

   return (
      <div className='accordion'>
         <Accordion sx={{ bgcolor: '#212121' }}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography sx={{ ...typographyStyle }}>Programación & Desarrollo</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ bgcolor: '#1A1A1A', padding: '1rem' }}>
               <Typography sx={{ ...typographyStyle }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion sx={{ bgcolor: '#212121' }}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography sx={{ ...typographyStyle }}>Diseño & Maquetación</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ bgcolor: '#1A1A1A', padding: '1rem' }}>
               <Typography sx={{ ...typographyStyle }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion sx={{ bgcolor: '#212121' }}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography sx={{ ...typographyStyle }}>Otros</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ bgcolor: '#1A1A1A', padding: '1rem' }}>
               <Typography sx={{ ...typographyStyle }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}
