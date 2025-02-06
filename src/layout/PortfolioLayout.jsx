import React, { useMemo, memo } from 'react';
import { Box } from '@mui/material';
import { Footer, Navbar } from '../ui/components';
import video from '../assets/video.mp4';

export const PortfolioLayoutComponent = ({ getData, children }) => {
   const outerStyles = useMemo(
      () => ({
         bgcolor: 'background.dark',
         minHeight: '100vh',
      }),
      []
   );

   const navFooterStyles = useMemo(
      () => ({
         position: 'relative',
         zIndex: 1,
         width: '100%',
      }),
      []
   );

   return (
      <Box display="flex" flexDirection="column" sx={outerStyles}>
         <video
            id="videoBg"
            autoPlay
            muted
            aria-label="www.vecteezy.com video"
            role="presentation"
         >
            <source src={video} type="video/mp4" />
         </video>

         <Box sx={navFooterStyles}>
            <Navbar getIndex={getData} />
         </Box>

         <Box
            component="main"
            display="flex"
            flex={1}
            flexDirection="column"
            alignItems="center"
            justifyContent="top"
         >
            {children}
         </Box>

         <Box sx={navFooterStyles}>
            <Footer />
         </Box>
      </Box>
   );
};

export const PortfolioLayout = memo(PortfolioLayoutComponent);
