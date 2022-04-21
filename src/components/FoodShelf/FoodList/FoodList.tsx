import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from '../../../store/actions/modalFoodActions';
import FoodModal from '../../FoodModal/FoodModal';
import ProductCard from '../FoodCard/FoodCard';
import { Food } from '../../../models';
import './FoodList.css'

const ProductList: React.FC = ({ activeType, modalFood }: any) => {
  const [foods, setFoods] = React.useState<Food[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(responseJSON => setFoods(responseJSON))
  }, [])

  return (
    <div className='foodCards-container'>
      <div className='foodCards-grid'>
        {modalFood !== '' && <FoodModal />}
        {foods.length > 0 && foods.map((food: Food, index: number) => {
          if (food.category.includes(activeType))
            return (
              <ProductCard food={food} key={index} />
            );
          else return null;
        })}
      </div>
    </div>
  );
};


const mapStateToProps = (state: any) => ({ activeType: state.sideBarOption.foodType, modalFood: state.modalFoodOption.modalFood });
const mapDispatchToProps = (dispatch: any) => bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
