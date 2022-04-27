import { Food } from "../../models";

type FoodsList = {
  cartList: Food[];
}

export const INITIAL_STATE_ORDER_MENU: FoodsList = {
  cartList: []
}

export default function orderMenuOption(state = INITIAL_STATE_ORDER_MENU, action: any) {
  if (action.type === 'ADD_FOOD_TO_CART') {
    action.food.quantity = action.quantity;
    return {
      cartList: [...state.cartList, action.food]
    }
  }
  else if (action.type === 'FOOD_COUNTER_INCREASE') {
    const copyCartList = state.cartList;
    copyCartList[action.index].quantity += 1;
    console.log(state.cartList)
    return {
      cartList: copyCartList,
    }
  }
  else if (action.type === 'FOOD_COUNTER_DECREASE') {
    const copyCartList = state.cartList;
    copyCartList[action.index].quantity -= 1;
    return {
      cartList: copyCartList,
    }
  } else if (action.type === 'REMOVE_FOOD_FROM_CART') {
    const copyCartList = state.cartList;
    copyCartList.splice(action.index, 1);
    console.log(state.cartList)
    return {
      cartList: [...copyCartList],
    }
  }
  return state;
}