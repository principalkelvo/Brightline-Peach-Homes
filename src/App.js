// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/products/ProductCard';
import ProductView from './components/products/ProductView';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductCard/>
      <Products/>
      <ProductView/>
    </div>
  );
}

export default App;
