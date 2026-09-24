import './Header.css';

// Header.jsx
function Header({ storeName = "Content Corner" }) {
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
      </div>
    </header>
  );
}
 
export default Header;