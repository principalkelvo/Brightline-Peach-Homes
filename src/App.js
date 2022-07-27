// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route exact path="/buying" element={<Products />} />
        <Route exact path="/selling" element={<Products />} />
        <Route exact path="/renting" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
