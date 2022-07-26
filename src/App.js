// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/products/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar/>      
      <ProductCard/>
    </div>
  );
}

export default App;
