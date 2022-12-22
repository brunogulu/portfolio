import { Box, Typography } from '@mui/material';
import React from 'react';

export const Presentation = (props) => {
   return (
      <>
         <Box sx={{ position: 'relative' }}>
            <Typography variant="h1">{props.title}</Typography>
            <div className="rombo rombo-2"></div>
            <div className="rombo rombo-1"></div>
         </Box>
         <div className="divider"></div>
         <Typography variant="subtitle1" sx={{ mt: '40px' }}>
            {props.subtitle}
         </Typography>
      </>
   );
};
