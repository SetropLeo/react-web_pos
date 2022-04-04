import React from 'react';
import { connect } from 'react-redux';
import { Foods } from '../../models';
import './ProductCard.css'

const ProductCard: React.FC = ({ activeFood }: any) => {
  const [foods, setFoods] = React.useState<Foods[]>([]);
  const [modalFood, setModalFood] = React.useState<Foods>();
  const [amount, setAmount] = React.useState<number>(1);

  function closeModal() {
    setModalFood(undefined);
  }

  React.useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(responseJSON => setFoods(responseJSON))
  }, [])

  return (
    <div className='foodCards-container'>
      <div className='foodCards-grid'>
        {modalFood &&
          <div className='foodModal-container' onClick={() => closeModal()}>
            <div className='foodModal-content' onClick={(event) => event.stopPropagation()}>
              <div className='foodModal-left'>
                <img src={modalFood?.image} alt="" />
              </div>
              <div className='foodModal-right'>
                <div className='foodModal-right-content'>
                  <h1 className='foodModal-name'>{modalFood?.name}</h1>
                  <h2 className='foodModal-description'>{modalFood?.description}</h2>
                  <p className='foodModal-price'>${modalFood?.price}</p>
                  <div className="productAmount-subcontainer">
                    <p className="minus-sign" onClick={() => { if (amount > 1) setAmount(amount - 1) }}>
                      -
                    </p>
                    <p className="productAmount">{amount}</p>
                    <p className="plus-sign" onClick={() => setAmount(amount + 1)}>
                      +
                    </p>
                  </div>
                  <div className='addItems-container'>
                  <button className='cancel-button'>Cancel</button>
                  <button className='addToCart-button'>Add to cart +</button>
                  </div>
                  <h3 onClick={() => closeModal()}>CLOSE BUTTON</h3>
                </div>
              </div>
            </div>
          </div>}
        {foods.length > 0 && foods.map((food: Foods) => {
          if (food.category.includes(activeFood))
            return (
              <div key={food.name} className="food-card" onClick={() => setModalFood(food)}>
                <img src={food.image} alt={food.name} className="productImage" />
                <div className='foodInfos-subcontainer'>
                  <p className="foodName">{food.name}®</p>
                  <p className="foodDescription">{food.description}</p>
                  <p className="foodPrice">${food.price}</p>
                </div>
              </div>
            );
          else return null;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ activeFood: state.menuOption.activeFood });

export default connect(mapStateToProps)(ProductCard);
