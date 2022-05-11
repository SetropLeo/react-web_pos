import { Order } from "../../models";

type OrderList = {
  orderList: Order[];
}

export const INITIAL_STATE_ORDER_MENU: OrderList = {
  orderList: []
}

export default function orderMenuOption(state = INITIAL_STATE_ORDER_MENU, action: any) {
  if (action.type === 'ADD_ORDER_TO_LIST') {
    const copyOrderList = state.orderList;
    copyOrderList.push(action.newOrder);
    return {
      orderList: [...copyOrderList]
    }
  }
  return state;
}