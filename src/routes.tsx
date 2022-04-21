import React from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import CartElement from './components/CartSideBar/CartElement/CartElement';
import OrderMenu from './components/CartSideBar/CartMenu/CartMenu';
import ProductCard from './components/FoodShelf/FoodCard/FoodCard';
import SideBar from './components/SideBar/SideBar';
import DishesCatalog from './pages/Catalog/Catalog';
import Stock from './pages/Stock';
import store from './store/store';

const AppRoutes: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogo" />} />
        <Route path="catalogo" element={<DishesCatalog />} />
        <Route path="estoque" element={<Stock />} />
        <Route path="productcard" element={<ProductCard />} />
        <Route path="sidebar" element={<SideBar />} />
        <Route path="ordermenu" element={<OrderMenu />} />
        <Route path="CartElement" element={<CartElement />} />
      </Routes>
    </Provider>
  );
};

export default AppRoutes;
