import { combineReducers } from 'redux';
import sideBarOption from './sideBarReducer';
import modalFoodOption from './foodModalReducer';
import cartMenuOption from './cartMenuReducer';
import orderMenuOption from './orderMenuReducer';

export default combineReducers({
  sideBarOption,
  modalFoodOption,
  cartMenuOption,
  orderMenuOption,
});
