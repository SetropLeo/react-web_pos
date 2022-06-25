import { Images } from '../../helper/Images';

const INITIAL_STATE = {
  foodType: 'All Dishes',
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

export default function sideBarOption(state = INITIAL_STATE, action: any) {
  if (action.type === 'FILTER_FOOD') {
    return {
      ...state,
      foodType: action.title,
    };
  }
  return state;
}
