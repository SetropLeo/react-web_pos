import React from 'react';
import './CartMenu.css';
import { Images } from '../../../Images';
import CartElement from '../CartElement/CartElement';
import { connect } from 'react-redux';
import { Food } from '../../../models';

const CartMenu = ({ cartList }: any) => {
  const [cartMenuOption, setCartMenuOption] = React.useState<string>('New Order');

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
      <div className='sideBarOptions-subcontainer'>
        <span className={`${cartMenuOption === 'New Order' ? 'active' : ''}`} onClick={() => setCartMenuOption('New Order')}>New Order ({cartList ? cartList.length : 0})</span>
        <span className={`${cartMenuOption === 'Order History' ? 'active' : ''}`} onClick={() => setCartMenuOption('Order History')}>Order History (0)</span>
      </div>
      <div className='order-subcontainer'>
        {cartMenuOption === 'New Order' && cartList?.map((food: Food, index: number) => {
          return (
            <CartElement key={index} food={food} index={index} />
          )
        }
        )}
      </div>
      {cartMenuOption === 'Order History'}
    </div>
  );
};

const mapStateToProps = (state: any) => ({ cartList: state.orderMenuOption.cartList });

export default connect(mapStateToProps)(CartMenu);
