export function IncreaseCartElementAmount(food: any) {
  return {
    type: 'INCREASE_CART_ELEMENT_AMOUNT',
    food,
  };
}

export function DecreaseCartElementAmount(food: any) {
  return {
    type: 'DECREASE_CART_ELEMENT_AMOUNT',
    food,
  };
}