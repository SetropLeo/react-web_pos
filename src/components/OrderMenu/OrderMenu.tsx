import React from 'react';
import './OrderMenu.css';
import { Images } from '../../Images';
import CartElement from '../CartElement/CartElement';

const OrderMenu = () => {
  const [menuOption, setMenuOption] = React.useState<string>('New Order');

  return (
    <div className='orderMenu-main-container'>
      <div className='orderInfos-subcontainer'>
        <p>
          <img src={Images.forkKnifePlate} alt='Order' />
          Table 01
        </p>
        <span>
          Order: <b>#0056</b>
        </span>
      </div>
      <div className='menuOptions-subcontainer'>
        <span className={`${menuOption === 'New Order' ? 'active' : ''}`} onClick={() => setMenuOption('New Order')}>New Order (5)</span>
        <span className={`${menuOption === 'Order History' ? 'active' : ''}`} onClick={() => setMenuOption('Order History')}>Order History(0)</span>
      </div>
      {menuOption === 'New Order' && (
        <div>
          <CartElement />
          <CartElement />
          <CartElement />
          <CartElement />
          <CartElement />
        </div>
      )}
      {menuOption === 'Order History'}
    </div>
  );
};

export default OrderMenu;
