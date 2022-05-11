import React from 'react'
import { Order } from '../../../models';
import store from '../../../store/store';

const OrderElement = () => {
  const [orderMenuList, setOrderMenuList] = React.useState<Order[] | null>([]);

  store.subscribe(() => {
    setOrderList();
  });

  function setOrderList() {
    setOrderMenuList(store.getState().orderMenuOption.orderList);
    console.log(orderMenuList);
  }

  return (
    <div>a</div>
  )
}

export default OrderElement