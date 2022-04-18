import React from 'react';
import { Images } from '../../Images';
import './CartElement.css';

const CartElement = ({ food }: any) => {

  function setAmount(amount: any) {
  }

  if (food.amount >= 0)
    return (
      <div className="CartElement-main-container">
        {food.amount === 0 &&
          (
            <div className='removeElement-subcontainer'>
              <div className='removeElement-left-container'>
                <img className="removeElementImage" src={Images.trash} alt="trash" />
                <p className='removeElement'>Remove this item?</p>
              </div>
              <div className="removeElement-right-container">
                <p className="no-removeProduct" onClick={() => setAmount(food.amount + 1)}>No</p>
                <p className="yes-removeProduct" onClick={() => setAmount(food.amount - 1)}>Yes</p>
              </div>
            </div>
          )}
        <div className="elementImage-subcontainer">
          <img className="elementImage" src={food.image} alt="Grill Pork Chop" />
        </div>
        <div className="elementContent-subcontainer">
          <div className="elementInfos-subcontainer">
            <p className="elementName">{food.name}</p>
            <p className="elementPrice">${(food.price * food.amount).toFixed(2)}</p>
          </div>
          <div className="additionalInformation-subcontainer">
            <p className="elementSubPrice">${food.price}</p>
            <p className="elementSize">- size: large</p>
          </div>
          <div className="productAmount-subcontainer">
            <p className="minus-sign" onClick={() => setAmount(food.amount - 1)}>
              -
            </p>
            <p className="productAmount">{food.amount}</p>
            <p className="plus-sign" onClick={() => setAmount(food.amount + 1)}>
              +
            </p>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default CartElement;
