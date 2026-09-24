import './App.css'
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import ProductCard from './assets/components/ProductCard';
import Footer from './assets/components/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <h1>BuzzBoard Feed</h1>
      <ProductCard /> 
      <ProductCard /> 
      <ProductCard /> 
      <Footer />
    </div>
  );
}
export default App;