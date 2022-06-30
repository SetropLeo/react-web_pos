import React from 'react';
import './CartMenu.css';
import { Images } from '../../../helper/Images';
import CartElement from '../CartElement/CartElement';
import { Food, Order } from '../../../models';
import store from '../../../store/store';
import CartSubmit from '../CartSubmit/CartSubmit';
import OrderElement from '../../OrderSidebar/OrderSidebar';
import { OrderService } from '../../../services/Order.service';

const CartMenu = () => {
  const [cartMenuOption, setCartMenuOption] = React.useState<string>('New Order');
  const [cartMenuList, setCartMenuList] = React.useState<Food[]>([]);
  const [orderNumber, setOrderNumber] = React.useState<number>(0);
  const OrderServices = new OrderService();

  store.subscribe(() => {
    setCartMenuList(store.getState().cartMenuOption.cartList);
  });

  React.useEffect(() => {
    OrderServices.getOrdersLength().then((response) => setOrderNumber(response + 1))
  })

  return (
    <div className="orderMenu-main-container">
      <div className="orderInfos-subcontainer">
        <p>
          <img src={Images.forkKnifePlate} alt="Order" />
          Table 01
        </p>
        <span>Order: <b>#{orderNumber}</b></span>
      </div>
      <div className="sideBarOptions-subcontainer">
        <span className={`${cartMenuOption === 'New Order' ? 'active' : ''}`} onClick={() => setCartMenuOption('New Order')}>
          New Order ({cartMenuList.length})
        </span>
        <span className={`${cartMenuOption === 'Order History' ? 'active' : ''}`} onClick={() => setCartMenuOption('Order History')}>
          Order History
        </span>
      </div>
      {cartMenuOption === 'New Order' && (
        <div className="cartList-subcontainer">
          {cartMenuList?.map((food: Food, index: number) => {
            return <CartElement key={index} food={food} index={index} />
          })}
          <CartSubmit />
        </div>)}
      {cartMenuOption === 'Order History' && (
        <div className="orderList-subcontainer">
          <OrderElement />
        </div>)}
    </div>
  );
};


export default CartMenu;
