import React, { useState } from 'react';
import { PortfolioLayout } from '../layout/PortfolioLayout';
import {
   ContactoView,
   HabilidadesView,
   InicioView,
   SobreMiView,
} from '../views';
import { PortfolioLayoutResponsive } from '../layout/PortfolioLayoutResponsive';

export const PortfolioPage = () => {
   // Obtener index del navbar
   const [index, setIndex] = useState(0);
   const handleNavIndexChange = newIndex => {
      setIndex(newIndex);
   };

   const viewBoxStyle = {
      maxWidth: '900px',
      mt: '8rem',
      // mb: '3rem',
      // paddingBottom: '2rem',
      width: '60%',
   };

   // Renderizar vista correspondiente al index del navbar
   const SwitchView = () => {
      switch (index) {
         case 0:
            return <InicioView viewBoxStyle={viewBoxStyle} />;
         case 1:
            return <SobreMiView viewBoxStyle={viewBoxStyle} />;
         case 2:
            return <HabilidadesView viewBoxStyle={viewBoxStyle} />;
         case 3:
            return <ContactoView viewBoxStyle={viewBoxStyle} />;
         default:
            return <h1>Nada que ver</h1>;
      }
   };

   return (
      <PortfolioLayoutResponsive getData={handleNavIndexChange}>
         <SwitchView />
      </PortfolioLayoutResponsive>
   );
};
