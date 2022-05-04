import { useState } from 'react';
import { connect } from 'react-redux';
import { Images } from '../../../Images';
import './CartElement.css';
import store from '../../../store/store';

const CartElement = ({ food, index, increaseFood, decreaseFood, cartList, removeFoodFromCart }: any) => {

  const [quantity, setQuantity] = useState<number>(cartList[index]?.quantity);

  store.subscribe(() => {
    setQuantity(store.getState().orderMenuOption.cartList[index]?.quantity);
  });

  function increaseQuantity() {
    increaseFood(index);
  }

  function decreaseQuantity() {
    decreaseFood(index);
  }

  if (food.quantity >= 0)
    return (
      <div className="CartElement-main-container">
        {food.quantity === 0 &&
          (
            <div className='removeElement-subcontainer'>
              <div className='removeElement-left-container'>
                <img className="removeElementImage" src={Images.trash} alt="trash" />
                <p className='removeElement'>Remove this item?</p>
              </div>
              <div className="removeElement-right-container">
                <p className="no-removeProduct" onClick={() => increaseQuantity()}>No</p>
                <p className="yes-removeProduct" onClick={() => removeFoodFromCart(index)}>Yes</p>
              </div>
            </div>
          )}
        <div className="elementImage-subcontainer">
          <img className="elementImage" src={food.image} alt="Grill Pork Chop" />
        </div>
        <div className="elementContent-subcontainer">
          <div className="elementInfos-subcontainer">
            <p className="elementName">{food.name}</p>
            <p className="elementPrice">${(food.price * quantity).toFixed(2)}</p>
          </div>
          <div className="additionalInformation-subcontainer">
            <p className="elementSubPrice">${food.price}</p>
            <p className="elementSize">- size: large</p>
          </div>
          <div className="productAmount-subcontainer">
            <p className="minus-sign" onClick={() => decreaseQuantity()}>
              -
            </p>
            <p className="productAmount">{quantity}</p>
            <p className="plus-sign" onClick={() => increaseQuantity()}>
              +
            </p>
          </div>
        </div>
      </div>
    );
  else return null;
};

const mapStateToProps = (state: any) => ({ cartList: state.orderMenuOption.cartList });

const mapDisPatchToProps = (dispatch: any) => (
  {
    increaseFood: (index: Number) => dispatch({ type: 'FOOD_COUNTER_INCREASE', index }),
    decreaseFood: (index: Number) => dispatch({ type: 'FOOD_COUNTER_DECREASE', index }),
    removeFoodFromCart: (index: Number) => dispatch({ type: 'REMOVE_FOOD_FROM_CART', index }),
  }
)


export default connect(mapStateToProps, mapDisPatchToProps)(CartElement);
