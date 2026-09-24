import './ProductCard.css';
// ProductCard.jsx
function ProductCard() {
  // Components are just functions
  return (
    // This looks like HTML but it's JSX
    <div className="product-card">
      <div className="product-header">
        <img 
          src="https://placehold.co/40x40" 
          alt="User avatar" 
          className="avatar"
        />
        <div className="user-info">
          <h3 className="username">AlexTech</h3>
          <span className="timestamp">2 hours ago</span>
        </div>
      </div>
      <p className="product-content">
        Just shipped my first React component! 🚀 The future is component-based.
      </p>
      <div className="product-actions">
        <button className="action-btn">👍 Like</button>
        <button className="action-btn">💬 Comment</button>
        <button className="action-btn">🔄 Share</button>
      </div>
    </div>
  );
}

// Every component file must export the component
export default ProductCard;