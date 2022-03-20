import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import OrderMenu from './components/OrderMenu/OrderMenu';
import ProductCard from './components/ProductCard/ProductCard';
import SideBar from './components/SideBar/SideBar';
import DishesCatalog from './pages/DishesCatalog';
import Stock from './pages/Stock';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/catalogo" />} />
      <Route path="catalogo" element={<DishesCatalog />} />
      <Route path="estoque" element={<Stock />} />
      <Route path="productcard" element={<ProductCard />} />
      <Route path="sidebar" element={<SideBar />} />
      <Route path="ordermenu" element={<OrderMenu />} />
    </Routes>
  );
};

export default AppRoutes;
