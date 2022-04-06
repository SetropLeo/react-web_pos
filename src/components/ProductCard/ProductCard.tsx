import React from 'react';
import { connect } from 'react-redux';

import { Foods } from '../../models';
import FoodModal from '../FoodModal/FoodModal';

import './ProductCard.css'

const ProductCard: React.FC = ({ activeFood }: any) => {
  const [foods, setFoods] = React.useState<Foods[]>([]);
  const [modalFood, setModalFood] = React.useState<any>(undefined);

  React.useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(responseJSON => setFoods(responseJSON))
  }, [])

  return (
    <div className='foodCards-container'>
      <div className='foodCards-grid'>
        {modalFood && <FoodModal food={modalFood} setFood={setModalFood} />}
        {foods.length > 0 && foods.map((food: Foods) => {
          if (food.category.includes(activeFood))
            return (
              <div key={food.name} className="food-card" onClick={() => setModalFood(food)}>
                <img src={food.image} alt={food.name} className="productImage" />
                <div className='foodInfos-subcontainer'>
                  <p className="foodName">{food.name}®</p>
                  <p className="foodDescription">{food.description}</p>
                  <p className="foodPrice">${food.price}</p>
                </div>
              </div>
            );
          else return null;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ activeFood: state.menuOption.activeFood });

export default connect(mapStateToProps)(ProductCard);
