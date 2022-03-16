import React from 'react'
import './SideBar.css';

import pineDine from '../../images/pineDine.svg';
import burger from '../../images/burger.svg';
import forkKnifeSpoon from '../../images/forkKnifeSpoon.svg';
import desserts from '../../images/desserts.svg';
import drinks from '../../images/drinks.svg';
import meat from '../../images/meat.svg';
import pizza from '../../images/pizza.svg';
import snacks from '../../images/snack.svg';

const SideBar: React.FC = () => {
  const [containers, setcontainers] = React.useState<any>();

  React.useEffect(() => {
    const categoryContainers = document.querySelectorAll('.category-subcontainer')
    categoryContainers[0].classList.add('active');
    setcontainers(categoryContainers)
  }, [])

  function categoryActivation(event: any) {
    containers.forEach((container: any) => container.classList.remove('active'));
    event.currentTarget.classList.toggle('active')
  }


  return (
    <div style={{ backgroundColor: "#E9ECEF" }}>
      <div className="sidebar-main-container">
        <div className='business-subcontainer'>
          <img src={pineDine} alt="restaurant-logo" />
          <p>Pine & Dine</p>
        </div>
        <div className="category-subcontainer" onClick={categoryActivation}>
          <img src={forkKnifeSpoon} alt="all dishes" />
          <p>All Dishes</p>
        </div>
        <div className="category-subcontainer" onClick={categoryActivation}>
          <img src={meat} alt="meat" />
          <p>Meat</p>
        </div>
        <div className="category-subcontainer" onClick={categoryActivation}>
          <img src={burger} alt="burger" />
          <p>Burger</p>
        </div>
        <div className="category-subcontainer" onClick={categoryActivation}>
          <img src={pizza} alt="pizza" />
          <p>Pizza</p>
        </div>
        <div className="category-subcontainer" onClick={categoryActivation}>
          <img src={drinks} alt="drinks" />
          <p>Drinks</p>
        </div>
        <div className="category-subcontainer" onClick={categoryActivation}>
          <img src={desserts} alt="desserts" />
          <p>Desserts</p>
        </div>
        <div className="category-subcontainer" onClick={categoryActivation}>
          <img src={snacks} alt="snacks" />
          <p>Snacks</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar