import { Navigate, Route, Routes } from 'react-router-dom';
import { Contacto, Habilidades, Inicio, SobreMi } from '../pages';

export const PortfolioRoutes = () => {
   return (
      <Routes>
         <Route path="inicio" element={<Inicio />}></Route>
         <Route path="sobremi" element={<SobreMi />}></Route>
         <Route path="habilidades" element={<Habilidades />}></Route>
         <Route path="contacto" element={<Contacto />}></Route>

         <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>
   );
};
