import React from 'react';
import './SideBar.css';
import { Images } from '../../Images';
import { MenuItem } from './MenuItem';

const SideBar: React.FC = () => {
  const [list, setList] = React.useState<MenuItem[]>([
    { icon: Images.forkKnifeSpoon, title: 'All Dishes', selected: true },
    { icon: Images.meat, title: 'Meat', selected: false },
    { icon: Images.burger, title: 'Burger', selected: false },
    { icon: Images.pizza, title: 'Pizza', selected: false },
    { icon: Images.drinks, title: 'Drinks', selected: false },
    { icon: Images.desserts, title: 'Desserts', selected: false },
    { icon: Images.snacks, title: 'Snacks', selected: false },
  ]);

  function selectMenuItem(indexSelected: number) {
    const listMapped = list.map((listItem, index) => {
      listItem.selected = index === indexSelected
      return listItem;
    })
    setList(listMapped);
  }

  return (
    <div style={{ backgroundColor: '#E9ECEF' }}>
      <div className="sidebar-main-container">
        <div className="business-subcontainer">
          <img src={Images.pineDine} alt="restaurant-logo" />
          <p>Pine & Dine</p>
        </div>
        {list.map((item: MenuItem, index: number) => {
          return (
            <div key={item.title} className={`category-subcontainer ${item.selected === true ? 'active' : ''}`} onClick={() => selectMenuItem(index)}>
              <img src={item.icon} alt="restaurant-logo" />
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SideBar;
