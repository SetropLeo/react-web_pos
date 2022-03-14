import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DishesCatalog from './pages/DishesCatalog';
import Stock from './pages/Stock';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/catalogo" />} />
      <Route path="catalogo" element={<DishesCatalog />} />
      <Route path="estoque" element={<Stock />} />
    </Routes>
  );
};

export default AppRoutes;
