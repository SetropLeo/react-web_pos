import React from 'react'
import './SideBar.css';
import restaurantLogo from '../../images/pineDine.svg';

type Categories = {
  category: string,
  url: string,
}

const categories: Array<string> = ['All Dishes', 'Meat', 'Pasta', 'Green', 'Pizza', 'Burger', 'Drinks', 'Desserts'];

const SideBar: React.FC = () => {

  return (
    <div style={{ backgroundColor: "#E9ECEF" }}>
      <div className="sidebar-main-container">
        <div className='business-subcontainer'>
          <img src={restaurantLogo} alt="restaurant-logo" />
          <p>Pine & Dine</p>
        </div>
        <div className="category-container">
          <img src="" alt="" />
          <p>All Dishes</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar