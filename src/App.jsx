import './App.css'
import { useState } from 'react';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import ProductCard from './assets/components/ProductCard';
import CartItem from './assets/components/CartItem';
import Footer from './assets/components/Footer';


function App() {
  const [cart, setCart] = useState([]);
  const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
];
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Added ${product.name} to cart`);
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter((item, index) => index !== cart.findIndex(p => p.id === productId)));
  };
  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <Hero />
      <h1>BuzzBoard Feed</h1>
      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
        </div>

     <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} onRemove={() => removeFromCart(index)} />
            ))}
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;