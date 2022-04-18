import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from '../../store/actions/modalFoodActions';
import './ProductCard.css'

const ProductCard = ({ setModalFood, food }: any,) => {

  return (
    <div key={food.name} className="food-card" onClick={() => { setModalFood(food) }}>
      <img src={food.image} alt={food.name} className="productImage" />
      <div className='foodInfos-subcontainer'>
        <p className="foodName">{food.name}®</p>
        <p className="foodDescription">{food.description}</p>
        <p className="foodPrice">${food.price}</p>
      </div>
    </div>
  )
};


const mapStateToProps = (state: any) => ({  });
const mapDispatchToProps = (dispatch: any) => bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
