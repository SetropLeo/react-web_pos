import React from 'react';
import './CartMenu.css';
import { Images } from '../../../Images';
import CartElement from '../CartElement/CartElement';
import { connect } from 'react-redux';
import { Food } from '../../../models';
import store from '../../../store/store';
import OrderSubmit from '../OrderSubmit/OrderSubmit';
import OrderElement from '../OrderElement/OrderElement';

const CartMenu = () => {
  const [cartMenuOption, setCartMenuOption] = React.useState<string>('New Order');
  const [cartMenuList, setCartMenuList] = React.useState<Food[]>([]);

  store.subscribe(() => {
    setCartMenuList(store.getState().cartMenuOption.cartList);
  });

  return (
    <div className="orderMenu-main-container">
      <div className="orderInfos-subcontainer">
        <p>
          <img src={Images.forkKnifePlate} alt="Order" />
          Table 01
        </p>
        <span>Order: <b>#0056</b></span>
      </div>
      <div className="sideBarOptions-subcontainer">
        <span className={`${cartMenuOption === 'New Order' ? 'active' : ''}`} onClick={() => setCartMenuOption('New Order')}>
          New Order ({cartMenuList.length})
        </span>
        <span className={`${cartMenuOption === 'Order History' ? 'active' : ''}`} onClick={() => setCartMenuOption('Order History')}>
          Order History (0)
        </span>
      </div>
      {cartMenuOption === 'New Order' && (
        <div className="cartList-subcontainer">
          {cartMenuList?.map((food: Food, index: number) => {
            return <CartElement key={index} food={food} index={index} />
          })}
          <OrderSubmit />
        </div>)}
      {cartMenuOption === 'Order History' && (
        <div className="orderList-subcontainer">
          <OrderElement />
        </div>)}
    </div>
  );
};

const mapStateToProps = (state: any) => ({ cartList: state.cartMenuOption.cartList });

export default connect(mapStateToProps)(CartMenu);
