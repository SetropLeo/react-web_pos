import { Images } from '../../Images';

const INITIAL_STATE = {
  activeFood: 'All Dishes',
  foodOptions: [
    {
      icon: Images.forkKnifeSpoon,
      title: 'All Dishes',
    },
    {
      icon: Images.meat,
      title: 'Meat',
    },
    {
      icon: Images.burger,
      title: 'Burger',
    },
    {
      icon: Images.pizza,
      title: 'Pizza',
    },
    {
      icon: Images.drinks,
      title: 'Drinks',
    },
    {
      icon: Images.desserts,
      title: 'Desserts',
    },
    {
      icon: Images.snacks,
      title: 'Snacks',
    },
  ],
};

export default function menuOption(state = INITIAL_STATE, action: any) {
  if (action.type === 'SET_FOODTYPE') {
    return {
      ...state,
      activeFood: action.title,
    };
  }
  return state;
}
