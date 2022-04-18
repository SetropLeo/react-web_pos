export function setModalFood(food: any) {
  return {
    type: 'SET_MODAL_FOOD',
    food,
  };
}

export function clearModalFood() {
  return {
    type: 'CLEAR_MODAL_FOOD',
  };
};

export function addFoodToCart(food: any, amount: any) {
  return {
    type: 'ADD_FOOD_TO_CART',
    food: {
      ...food,
      amount,
    },
  };
}