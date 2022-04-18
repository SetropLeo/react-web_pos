export const INITIAL_STATE_ORDER_MENU = {
  foodCartList: []
}

export default function orderMenuOption(state = INITIAL_STATE_ORDER_MENU, action: any) {
  if (action.type === 'ADD_FOOD_TO_CART') {
    action.food.amount = action.amount;
    
    return {
      foodCartList: [...state.foodCartList, action.food]
    }
  }

  return state;
}