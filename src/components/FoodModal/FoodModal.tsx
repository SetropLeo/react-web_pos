import React from 'react'
import './FoodModal.css'


const FoodModal = ({food, setFood}: any) => {
  const [amount, setAmount] = React.useState<number>(1);

  function closeModal() {
    setFood(null);
  }

  return (
    <div className='foodModal-container' onClick={() => closeModal()}>
      <div className='foodModal-content' onClick={(event) => event.stopPropagation()}>
        <div className='foodModal-left'>
          <img src={food?.image} alt="" />
        </div>
        <div className='foodModal-right'>
          <div className='foodModal-right-content'>
            <h1 className='foodModal-name'>{food?.name}</h1>
            <h2 className='foodModal-description'>{food?.description}</h2>
            <p className='foodModal-price'>${food?.price}</p>
            <div className="productAmount-subcontainer">
              <p className="minus-sign" onClick={() => { if (amount > 1) setAmount(amount - 1) }}>-</p>
              <p className="productAmount">{amount}</p>
              <p className="plus-sign" onClick={() => setAmount(amount + 1)}>+</p>
            </div>
            <div className='addItems-container'>
              <button className='cancel-button' onClick={() => closeModal()}>Cancel</button>
              <button className='addToCart-button'>Add to cart +</button>
            </div>
            <h3 onClick={() => closeModal()}>CLOSE BUTTON</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodModal;