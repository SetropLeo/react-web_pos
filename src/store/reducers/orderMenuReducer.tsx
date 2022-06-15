import { Food, Food2, Order } from "../../models";
import { DetailService } from "../../services/Detail.service";
import { OrderService } from "../../services/Order.service";
import { UserService } from "../../services/User.service";
const detailService = new DetailService();
const orderService = new OrderService();
const userService = new UserService();

type OrderList = {
  orderList: Order[];
}

export const INITIAL_STATE_ORDER_MENU: OrderList = {
  orderList: []
}

export default async function orderMenuOption(state = INITIAL_STATE_ORDER_MENU, action: any) {
  if (action.type === 'ADD_ORDER_TO_LIST') {
    const verificateUsers = await userService.getUsersLength();
    if (verificateUsers === 0) { userService.createUser() }

    const firstUserID = await userService.getFirstUserID();
    orderService.createNewOrder(action.newOrder.totalPrice, firstUserID);

    setTimeout(async () => {
      const lastOrder = await orderService.getLastOrderID();
      action.newOrder.list.forEach(async (listItem: any) => {
        detailService.createNewOrderDetail(listItem.quantity, listItem.id, lastOrder);  
      })
    }, 200);
  }
  return state;
}