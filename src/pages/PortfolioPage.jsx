import React, { useState, useCallback, useMemo } from 'react';
import { PortfolioLayoutComponent } from '../layout/PortfolioLayout';
import {
   ContactoView,
   HabilidadesView,
   InicioView,
   SobreMiView,
} from '../views';

// Array de vistas para mejor escalabilidad y mantenimiento
const views = [InicioView, SobreMiView, HabilidadesView, ContactoView];

const DefaultView = () => <h1>Nada que ver</h1>;

export const PortfolioPage = () => {
   const [index, setIndex] = useState(0);

   // Memoizar el manejador de cambios para prevenir renders innecesarios
   const handleNavIndexChange = useCallback(newIndex => {
      setIndex(newIndex);
   }, []);

   // Memoizar estilos para evitar recreación en cada render
   const viewBoxStyle = useMemo(
      () => ({
         maxWidth: '900px',
         mt: '8rem',
         width: '60%',
      }),
      []
   );

   // Selección de vista optimizada
   const ViewComponent = useMemo(() => views[index] || DefaultView, [index]);

   return (
      <PortfolioLayoutComponent getData={handleNavIndexChange}>
         <ViewComponent viewBoxStyle={viewBoxStyle} />
      </PortfolioLayoutComponent>
   );
};
