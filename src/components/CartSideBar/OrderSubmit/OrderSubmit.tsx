import React from 'react'
import { connect } from 'react-redux';
import './OrderSubmit.css'
import billIcon from '../../../images/bill.svg';
import checkMarkIcon from '../../../images/checkMark.svg';
import notificationIcon from '../../../images/notification.svg';

const OrderSubmit = () => {

  function submitOrder() {

  }

  return (
    <div className='orderSubmit-container'>
      <div className='orderSubmit-infos'>
        <span className='orderSubmit-element'>
          <p>Subtotal</p>
          <p className='subtotal-value'>$30.98</p>
        </span>
        <span className='orderSubmit-element'>
          <p>Taxes (6%)</p>
          <p className='taxes-value'>$2.12</p>
        </span>
        <span className='orderSubmit-element'>
          <p>Total</p>
          <p className='total-value'>$33.10</p>
        </span>
      </div>
      <div className='orderSubmit-buttons'>
        <button>
          <img src={notificationIcon} alt="Service" />
          <p>Service</p>
        </button>
        <button>
          <img src={billIcon} alt="Bill" />
          <p>Bill</p>
        </button>
        <button onClick={submitOrder} className='submit'>
          <img src={checkMarkIcon} alt="Submit Order" />
          <p>Submit Order</p>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({ cartList: state.orderMenuOption.cartList });

export default connect(mapStateToProps)(OrderSubmit);