import './Header.css';

// Header.jsx
function Header({ storeName = "Content Corner", cartCount = 0 }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="store-name">{storeName}</h1>
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}
 
export default Header;