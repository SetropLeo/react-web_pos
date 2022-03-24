import React from 'react';
import './SideBar.css';
import { Images } from '../../Images';

const SideBar: React.FC = () => {
  const [category, setCategory] = React.useState<string>('All Dishes');

  const Mock = [
    { image: Images.forkKnifeSpoon, title: 'All Dishes', state: true },
    { image: Images.meat, title: 'Meat', state: false },
    { image: Images.burger, title: 'Burger', state: false },
    { image: Images.pizza, title: 'Pizza', state: false },
    { image: Images.drinks, title: 'Drinks', state: false },
    { image: Images.desserts, title: 'Desserts', state: false },
    { image: Images.snacks, title: 'Snacks', state: false },
  ];

  return (
    <div className="sidebar-main-container">
      <div className="business-subcontainer">
        <img src={Images.pineDine} alt="restaurant-logo" />
        <p>Pine & Dine</p>
      </div>
      {Mock.map((item) => {
        return (
          <div key={item.title} className={`category-subcontainer ${item.title === category ? 'active' : ''}`} onClick={() => setCategory(item.title)}>
            <img src={item.image} alt="restaurant-logo" />
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  );
};

export default SideBar;
