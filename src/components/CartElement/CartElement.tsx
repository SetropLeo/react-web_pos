import React from 'react';
import { Images } from '../../Images';
import pork from '../../images/product-2.jpg'
import './CartElement.css';

const CartElement = () => {
  const [amount, setAmount] = React.useState<number>(1);

  if (amount >= 0)
    return (
      <div className="CartElement-main-container">
        {amount === 0 &&
          (
            <div className='removeElement-subcontainer'>
              <div className='removeElement-left-container'>
                <img className="removeElementImage" src={Images.trash} alt="trash" />
                <p className='removeElement'>Remove this item?</p>
              </div>
              <div className="removeElement-right-container">
                <p className="no-removeProduct" onClick={() => setAmount(amount + 1)}>No</p>
                <p className="yes-removeProduct" onClick={() => setAmount(amount - 1)}>Yes</p>
              </div>
            </div>
          )}
        <div className="elementImage-subcontainer">
          <img className="elementImage" src={pork} alt="Grill Pork Chop" />
        </div>
        <div className="elementContent-subcontainer">
          <div className="elementInfos-subcontainer">
            <p className="elementName">Grill Pork Chop</p>
            <p className="elementPrice">$12.99</p>
          </div>
          <div className="additionalInformation-subcontainer">
            <p className="elementSubPrice">$12.99</p>
            <p className="elementSize">- size: large</p>
          </div>
          <div className="productAmount-subcontainer">
            <p className="minus-sign" onClick={() => setAmount(amount - 1)}>
              -
            </p>
            <p className="productAmount">{amount}</p>
            <p className="plus-sign" onClick={() => setAmount(amount + 1)}>
              +
            </p>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default CartElement;
