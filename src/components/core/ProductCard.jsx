import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCart } from './CartContext';

export default function ProductCard({ product }) {
    
    const {addToCart} = useCart();
    const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="product-card">
    <Link to={`/products/${product.id}`}>
    <div className="product-image">
        <img src={product.image} alt={product.title} />
    </div>
    </Link>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
        <div className="quantity-controls">
          <button 
            className="quantity-btn" 
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button 
            className="quantity-btn" 
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
} 