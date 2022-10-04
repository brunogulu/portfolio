import React from 'react';
import { Box } from '@mui/material';
import { Footer, Navbar } from '../ui/components';

export const PortfolioLayout = ({ children }) => {
   return (
      <Box
         display="flex"
         flexDirection="column"
         sx={{ bgcolor: 'background.dark', minHeight: '100vh' }}
      >
         <Box>
            <Navbar />
         </Box>

         {/* View */}
         <Box component="main" flex="1">
            {children}
         </Box>

         {/* Footer */}
         <Box>
            <Footer />
         </Box>
      </Box>
   );
};
