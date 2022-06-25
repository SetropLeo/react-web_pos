import React from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import DishesCatalog from './pages/Catalog/Catalog';
import Stock from './pages/Stock/Stock';
import store from './store/store';

const AppRoutes: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogo" />} />
        <Route path="catalogo" element={<DishesCatalog />} />
        <Route path="estoque" element={<Stock />} />
      </Routes>
    </Provider>
  );
};

export default AppRoutes;
