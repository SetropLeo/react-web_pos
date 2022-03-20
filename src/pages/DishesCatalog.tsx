import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import SideBar from '../components/SideBar/SideBar'

const DishesCatalog: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='side-menu'>
        <SideBar />
        <ProductCard />
      </div>
    </div>
  )
}

export default DishesCatalog