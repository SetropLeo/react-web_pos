import { Food } from "../../models";

type FoodsList = {
  cartList: Food[];
}

export const INITIAL_STATE_ORDER_MENU: FoodsList = {
  cartList: []
}

export default function cartMenuOption(state = INITIAL_STATE_ORDER_MENU, action: any) {
  if (action.type === 'ADD_FOOD_TO_CART') {
    const copyCartList = state.cartList;
    if (copyCartList.length > 0) {

      const foodIndex = copyCartList.findIndex(food => food.name === action.food.name);

      if (foodIndex >= 0) {
        copyCartList[foodIndex].quantity += action.quantity
      } else {
        action.food.quantity = action.quantity;
        copyCartList.push(action.food)
      }
    } else {
      action.food.quantity = action.quantity;
      copyCartList.push(action.food);
    }
    return {
      cartList: [...copyCartList]
    }
  }
  else if (action.type === 'FOOD_COUNTER_INCREASE') {
    const copyCartList = state.cartList;
    copyCartList[action.index].quantity += 1;
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
    return {
      cartList: [...copyCartList],
    }
  }
  return state;
}