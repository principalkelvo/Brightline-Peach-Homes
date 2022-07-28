// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/homes")
      .then((r) => r.json())
      .then((homes) => {
        setData(homes);
      });
  }, []);
  console.log("data", data);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/buying" element={<Products />} />
        {/* <Route exact path="/selling" element={<Products />} />
        <Route exact path="/renting" element={<Products />} />
        <Route exact path="/about" element={<Products />} />
        <Route exact path="/resources" element={<Products />} />
        <Route exact path="/contact" element={<Products />} /> */}
      </Routes>
    </div>
  );
}

export default App;
