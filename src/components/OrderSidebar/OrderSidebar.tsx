import React from 'react'
import { OrderItemsService } from '../../services/OrderItems.service';
import { OrderService } from '../../services/Order.service';
import './OrderSidebar.css'

const orderService = new OrderService();
const orderItemsService = new OrderItemsService();

const OrderElement = () => {
  const [orderHistory, setOrderHistory] = React.useState<any>([]);

  React.useEffect(() => {
    getOrderHistory();
  }, [])

  // TODO - FIX GETORDERHISTORY
  async function getOrderHistory() {
    const orders = await orderService.getAllOrders();

    orders.forEach(async (order: any) => {
      const items = await orderItemsService.getFoodsByOrderID(order.id);
      setOrderHistory((history: any) => {
        return [...history, {
          order_id: order.id,
          created_at: order.created_at,
          total_price: order.price,
          items: items ? items : null
        }]
      });
    })
  }

  return (
    <div className='orderList-container'>
      {orderHistory?.map((order: any) => {
        return (
          <div key={order.order_id} className='individualOrder-container'>
            {order.items.map((item: any) => {
              return (
                <div key={item.id} className='individualFood-container'>
                  <div className='individualFood-image'>
                    <img src={item.food.image} alt="food" />
                    <p className='food'></p>
                  </div>
                  <div className='individualFood-infos'>
                    <p className='food-name'>{item.food.name}</p>
                    <p className='food-quantity'>{item.food.quantity}</p>
                    <p className='food-price'>${item.food.price}</p>
                  </div>
                </div>
              )
            })}
            <div className='totalPrice-container'>
              <p className='total-price-title'>Total Price: </p>
              <p className='total-price-value'>${order.total_price}</p>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}

export default OrderElement