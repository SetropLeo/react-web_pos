import React from 'react'
import OrderMenu from '../../components/CartSideBar/CartMenu/CartMenu'
import ProductList from '../../components/FoodShelf/FoodList/FoodList';
import SideBar from '../../components/SideBar/SideBar'
import './Catalog.css';

const DishesCatalog: React.FC = () => {
  return (
    <div className='catalog-main-container'>
      <div className='food-options-subcontainer'>
        <SideBar />
        <ProductList />
      </div>
      <div className='food-order-subcontainer'>
        <OrderMenu />
      </div>
    </div>
  )
}

export default DishesCatalog