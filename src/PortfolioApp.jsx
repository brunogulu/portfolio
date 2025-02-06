import { memo } from 'react';
import { PortfolioRoutes } from './routes/PortfolioRoutes';
import { AppTheme } from './theme/AppTheme';

// Componente principal memoizado para prevenir rerenders innecesarios
export const PortfolioApp = memo(() => {
   return (
      <AppTheme>
         <PortfolioRoutes />
      </AppTheme>
   );
});
