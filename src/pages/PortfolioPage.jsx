import React, { useState } from 'react';
import { PortfolioLayout } from '../layout/PortfolioLayout';
import { ContactoView, HabilidadesView, InicioView, SobreMiView } from '../views';

export const PortfolioPage = () => {
   // Obtener index del navbar
   const [index, setIndex] = useState(0);
   const handleNavIndexChange = newIndex => {
      setIndex(newIndex);
   };

   // Renderizar vista correspondiente al index del navbar
   const SwitchView = () => {
      switch (index) {
         case 0:
            return <InicioView />;
         case 1:
            return <SobreMiView />;
         case 2:
            return <HabilidadesView />;
         case 3:
            return <ContactoView />;
         default:
            return <h1>Nada que ver</h1>;
      }
   };

   return (
      <PortfolioLayout getData={handleNavIndexChange}>
         <SwitchView />
      </PortfolioLayout>
   );
};
