import './ProductCard.css';
import { useState } from 'react';
// ProductCard.jsx
function ProductCard({product, onAddToCart}) {
  const [likeCount, setLikeCount] = useState(0);
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="description">{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}
// Every component file must export the component
export default ProductCard;