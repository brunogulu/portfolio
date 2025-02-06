import { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PortfolioPage } from '../pages/PortfolioPage';

export const PortfolioRoutes = memo(() => {
   return (
      <Routes>
         <Route path="/" element={<PortfolioPage />} />
         <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
   );
});
