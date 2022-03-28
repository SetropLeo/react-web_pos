import React from 'react'
import OrderMenu from '../../components/OrderMenu/OrderMenu'
import ProductCard from '../../components/ProductCard/ProductCard'
import SideBar from '../../components/SideBar/SideBar'
import './Catalog.css';

const DishesCatalog: React.FC = () => {
  return (
    <div className='catalog-main-container'>
      <div className='food-options-subcontainer'>
        <SideBar />
        <ProductCard />
      </div>
      <div className='food-order-subcontainer'>
        <OrderMenu />
      </div>
    </div>
  )
}

export default DishesCatalog