import React from 'react';
import './OrderMenu.css';
import { Images } from '../../Images';
import CartElement from '../CartElement/CartElement';
import { connect } from 'react-redux';
import { FoodModel } from '../../models';

const OrderMenu = ({ foodCartList }: any) => {
  const [orderMenuOption, setorderMenuOption] = React.useState<string>('New Order');
  console.log(foodCartList)

  return (
    <div className='orderMenu-main-container'>
      <div className='orderInfos-subcontainer'>
        <p>
          <img src={Images.forkKnifePlate} alt='Order' />
          Table 01
        </p>
        <span>
          Order: <b>#0056</b>
        </span>
      </div>
      <div className='sideBarOptions-subcontainer'>
        <span className={`${orderMenuOption === 'New Order' ? 'active' : ''}`} onClick={() => setorderMenuOption('New Order')}>New Order ({foodCartList ? foodCartList.length : 0})</span>
        <span className={`${orderMenuOption === 'Order History' ? 'active' : ''}`} onClick={() => setorderMenuOption('Order History')}>Order History (0)</span>
      </div>
      <div className='order-subcontainer'>
        {orderMenuOption === 'New Order' && foodCartList?.map((food: FoodModel, index: Number) => {
          return (
            <CartElement key={index} food={food} />
          )
        }
        )}
      </div>
      {orderMenuOption === 'Order History'}
    </div>
  );
};

const mapStateToProps = (state: any) => ({ foodCartList: state.orderMenuOption.foodCartList });

export default connect(mapStateToProps)(OrderMenu);
