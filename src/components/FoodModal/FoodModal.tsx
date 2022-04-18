import React from 'react'
import { connect } from 'react-redux';
import { FoodModel } from '../../models';
import './FoodModal.css'


const FoodModal = ({ modalFood, closeModal, addFoodToCart }: any) => {
  const [amount, setAmount] = React.useState<number>(1);


  function addToCart() {
    addFoodToCart(modalFood, amount);
    closeModal();
  }

  return (
    <div className='foodModal-container' onClick={() => closeModal()}>
      <div className='foodModal-content' onClick={(event) => event.stopPropagation()}>
        <div className='foodModal-left'>
          <img src={modalFood?.image} alt="" />
        </div>
        <div className='foodModal-right'>
          <div className='foodModal-right-content'>
            <h1 className='foodModal-name'>{modalFood?.name}</h1>
            <h2 className='foodModal-description'>{modalFood?.description}</h2>
            <p className='foodModal-price'>${modalFood?.price * amount}</p>
            <div className="productAmount-subcontainer">
              <p className="minus-sign" onClick={() => { if (amount > 1) setAmount(amount - 1) }}>-</p>
              <p className="productAmount">{amount}</p>
              <p className="plus-sign" onClick={() => setAmount(amount + 1)}>+</p>
            </div>
            <div className='addItems-container'>
              <button className='cancel-button' onClick={() => closeModal()}>Cancel</button>
              <button className='addToCart-button' onClick={() => addToCart()}>Add to cart +</button>
            </div>
            <h3 onClick={() => closeModal()}>CLOSE BUTTON</h3>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => ({ modalFood: state.modalFoodOption.modalFood });

const mapDispatchToProps = (dispatch: any) => (
  {
    closeModal: () => dispatch({ type: 'CLEAR_MODAL_FOOD' }),
    addFoodToCart: (food: FoodModel, amount: Number) => dispatch({ type: 'ADD_FOOD_TO_CART', food, amount }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FoodModal);