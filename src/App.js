// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/Buying" element={<Products />} />
        <Route exact path="/Selling" element={<Products />} />
        <Route exact path="/Renting" element={<Products />} />
      </Routes>
        <Products />
    </div>
  );
}

export default App;
