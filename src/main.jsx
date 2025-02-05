import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PortfolioApp } from './PortfolioApp';
import './styles.scss';

// Lazy load componentes pesados (esto deberías implementarlo en tu PortfolioApp)
// const PortfolioApp = React.lazy(() => import('./PortfolioApp'));

const root = createRoot(document.getElementById('root'));

root.render(
   <StrictMode>
      <BrowserRouter>
         {/* Para lazy loading: */}
         {/* <React.Suspense fallback={<div>Cargando...</div>}> */}
         <PortfolioApp />
         {/* </React.Suspense> */}
      </BrowserRouter>
   </StrictMode>
);
