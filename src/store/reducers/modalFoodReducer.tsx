const INITIAL_STATE_MODAL_FOOD = {
  modalFood: '',
}

export default function modalFoodOption(state = INITIAL_STATE_MODAL_FOOD, action: any) {
  if (action.type === 'SET_MODAL_FOOD') {
    return {
      ...state,
      modalFood: action.food,
    };
  } else if (action.type === 'CLEAR_MODAL_FOOD') {
    return {
      ...state,
      modalFood: '',
    };
  }
  return state;
};