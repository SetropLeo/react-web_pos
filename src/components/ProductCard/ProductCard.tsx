import React from 'react';
import './ProductCard.css'

type Products = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductCard: React.FC = () => {
  const [foods, setFoods] = React.useState<Products[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(responseJSON => setFoods(responseJSON))
  })

  return (
    <div className='productcards-main-container'>
      <div className='foods-container'>
        {foods.length > 0 && foods.map((product: Products) => {
          return (
            <div key={product.name} className="food-card">
              <img src={product.image} alt={product.name} className="productImage" />
              <div className='infos-subcontainer'>
                <p className="productName">{product.name}®</p>
                <p className="productDescription">{product.description}</p>
                <p className="productPrice">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
