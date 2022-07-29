// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/home/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  const [data, setData] = useState([]);

  const fetchHomes = () =>{
    fetch("http://localhost:4000/homes")
      .then((r) => r.json())
      .then((homes) => setData(homes));
  }
  //add useEffect to setData
  useEffect(() => {
    fetchHomes()
  }, []);
  console.log("homes",data);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/buying" element={<Products estates={data} />} />
        {/* <Route exact path="/selling" element={<Products />} />
        <Route exact path="/renting" element={<Products />} />
        <Route exact path="/about" element={<Products />} />
        <Route exact path="/contact" element={<Products />} /> */}
      </Routes>
    </div>
  );
}

export default App;
