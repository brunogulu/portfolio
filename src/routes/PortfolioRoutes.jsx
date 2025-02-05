import { lazy, Suspense, memo, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from '../ui/components/Loader';

// Lazy loading con import dinámico
const PortfolioPage = lazy(() =>
   import('../pages/PortfolioPage').then(module => ({
      default: module.PortfolioPage,
   }))
);

export const PortfolioRoutes = memo(() => {
   // Prefetch estratégico para mejorar la experiencia
   useEffect(() => {
      if (process.env.NODE_ENV === 'production') {
         import('../pages/PortfolioPage');
      }
   }, []);

   return (
      <Suspense fallback={<Loader />}>
         <Routes>
            <Route
               path="/"
               element={
                  <Suspense fallback={<Loader />}>
                     <PortfolioPage />
                  </Suspense>
               }
            />
            <Route path="/*" element={<Navigate to="/" replace />} />
         </Routes>
      </Suspense>
   );
});
