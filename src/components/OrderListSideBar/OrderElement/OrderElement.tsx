import React from 'react'
import { Food, Order } from '../../../models';
import store from '../../../store/store';
import './OrderElement.css'

const OrderElement = () => {
  return (
    <div className='orderList-container'>
      {store.getState().orderMenuOption.orderList.map((order: Order) => {
        return (
          <div key={order.id + '-order'} className='individualOrder-container'>
            {order.list.map((item: Food, index: number) => {
              return (
                <div key={index} className='individualFood-container'>
                  <div className='individualFood-image'>
                    <img src={item.image} alt="food" />
                    <p className='food'></p>
                  </div>
                  <div className='individualFood-infos'>
                    <p className='food-name'>{item.name}</p>
                    <p className='food-quantity'>{item.quantity}</p>
                    <p className='food-price'>${item.price}</p>
                  </div>
                </div>
              )
            })}
            <div className='totalPrice-container'>
              <p className='total-price-title'>Total Price: </p>
              <p className='total-price-value'>${Math.round(order.totalPrice)}</p>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}

export default OrderElement