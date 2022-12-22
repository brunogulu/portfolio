import React from 'react';
import { Box } from '@mui/material';
import { Footer, Navbar } from '../ui/components';
import video from '../assets/video.mp4';

export const PortfolioLayout = ({ getData, children }) => {
   return (
      <Box
         display="flex"
         flexDirection="column"
         sx={{ bgcolor: 'background.dark', minHeight: '100vh' }}
      >
         {/* Background */}
         <video id="videoBg" autoPlay muted aria-label="www.vecteezy.com video">
            <source src={video} type="video/mp4" />
         </video>

         {/* Navbar */}
         <Box>
            <Navbar getIndex={getData} />
         </Box>

         {/* View */}
         <Box
            component="main"
            display="flex"
            flex="1"
            flexDirection="column"
            alignItems="center"
            justifyContent="top"
         >
            {children}
         </Box>

         {/* Footer */}
         <Box>
            <Footer />
         </Box>
      </Box>
   );
};
