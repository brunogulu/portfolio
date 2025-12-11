import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PortfolioApp } from './PortfolioApp';
import './styles.scss';

const root = createRoot(document.getElementById('root'));

root.render(
   <StrictMode>
      <BrowserRouter>
         <PortfolioApp />
      </BrowserRouter>
   </StrictMode>
);
