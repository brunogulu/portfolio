import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PortfolioRoutes } from './routes/PortfolioRoutes';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         <PortfolioRoutes />
      </BrowserRouter>
   </React.StrictMode>
);
