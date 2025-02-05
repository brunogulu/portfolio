import { memo } from 'react';
import { PortfolioRoutes } from './routes/PortfolioRoutes';
import { AppTheme } from './theme/AppTheme';

// Componente principal memoizado para prevenir rerenders innecesarios
export const PortfolioApp = memo(() => {
   return (
      <AppTheme>
         {' '}
         {/* Proveedor del contexto de tema (asegúrate de que su valor no cambie innecesariamente) */}
         <PortfolioRoutes />{' '}
         {/* Configuración de rutas (idealmente con lazy loading interno) */}
      </AppTheme>
   );
});

// Opcional: Display name para mejor debugging en React DevTools
PortfolioApp.displayName = 'PortfolioApp';
