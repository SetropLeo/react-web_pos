import React from 'react'
import { connect } from 'react-redux';
import { Food2 } from '../../models';
import './FoodModal.css'


const FoodModal = ({ modalFood, closeModal, addFoodToCart }: any) => {
  const [quantity, setQuantity] = React.useState<number>(1);

  function onClickAddToCart() {
    addFoodToCart(modalFood, quantity);
    closeModal();
    setQuantity(1);
  }

  function onClickCloseModal() {
    closeModal();
    setQuantity(1);
  }

  return (
    <div className={`foodModal-container ${modalFood !== '' ? 'active' : 'hidden'}`} onClick={() => onClickCloseModal()}>
      <div className='foodModal-content' onClick={(event) => event.stopPropagation()}>
        <div className='foodModal-left'>
          <img src={modalFood?.image} alt="" />
        </div>
        <div className='foodModal-right'>
          <div className='foodModal-right-content'>
            <h1 className='foodModal-name'>{modalFood?.name}</h1>
            <h2 className='foodModal-description'>{modalFood?.description}</h2>
            <p className='foodModal-price'>${(modalFood?.price * quantity).toFixed(2)}</p>
            <div className="productAmount-subcontainer">
              <p className="minus-sign" onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}>-</p>
              <p className="productAmount">{quantity}</p>
              <p className="plus-sign" onClick={() => setQuantity(quantity + 1)}>+</p>
            </div>
            <div className='addItems-container'>
              <button className='cancel-button' onClick={() => onClickCloseModal()}>Cancel</button>
              <button className='addToCart-button' onClick={() => onClickAddToCart()}>Add to cart +</button>
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
    addFoodToCart: (food: Food2, quantity: Number) => dispatch({ type: 'ADD_FOOD_TO_CART', food, quantity }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FoodModal);