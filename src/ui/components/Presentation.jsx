import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';

export const Presentation = memo(({ title, subtitle }) => (
   <Box component="section">
      <Box sx={{ position: 'relative' }}>
         <Typography variant="h1" component="h1">
            {title}
         </Typography>
         <div className="rombo rombo-2"></div>
         <div className="rombo rombo-1"></div>
      </Box>

      <div className="divider"></div>

      <Typography variant="subtitle1" component="p" sx={{ mt: 4 }}>
         {subtitle}
      </Typography>
   </Box>
));
