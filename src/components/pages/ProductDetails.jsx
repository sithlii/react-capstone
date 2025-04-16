import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../core/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="page-container">
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <div className="product-rating">
            <span>Rating: {product.rating.rate} ({product.rating.count} reviews)</span>
          </div>
          <div className="quantity-controls">
            <button onClick={handleDecrement}>-</button>
            <p>Quantity: {quantity}</p>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}