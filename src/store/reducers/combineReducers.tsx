import { combineReducers } from 'redux';
import sideBarOption from './sideBarReducer';
import modalFoodOption from './foodModalReducer';
import orderMenuOption from './cartMenuReducer';

export default combineReducers({
  sideBarOption,
  modalFoodOption,
  orderMenuOption,
});
