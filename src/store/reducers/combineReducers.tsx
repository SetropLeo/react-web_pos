import { combineReducers } from 'redux';
import sideBarOption from './sideBarReducer';
import modalFoodOption from './modalFoodReducer';
import orderMenuOption from './orderMenuReducer';

export default combineReducers({
  sideBarOption,
  modalFoodOption,
  orderMenuOption,
});
