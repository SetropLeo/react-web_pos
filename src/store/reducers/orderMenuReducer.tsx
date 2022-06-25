import { Order } from "../../models";
import { OrderItemsService } from "../../services/OrderItems.service";
import { OrderService } from "../../services/Order.service";
import { UserService } from "../../services/User.service";
const orderItemsService = new OrderItemsService();
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
      const lastOrderID = await orderService.getLastOrderID();
      action.newOrder.list.forEach(async (listItem: any) => {
        orderItemsService.createNewOrderItem(listItem.quantity, listItem.id, lastOrderID);  
      })
    }, 200);
  }
  return state;
}