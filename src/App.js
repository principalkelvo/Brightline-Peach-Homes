// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/home/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";
import ProductView from "./components/products/ProductView";
import Form from "./components/Contact/Form";

function App() {
  // Initialize states for all components
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setactiveFilter] = useState(true);

  //get items from the server and update  the state accordingly
  const fetchHomes = () => {
    fetch("http://localhost:4000/homes")
      .then((r) => r.json())
      .then((homes) => setData(homes));
  };

  //add useEffect to setData
  useEffect(() => {
    fetchHomes();
  }, []);

  //set filtered to a copy of all the data
  useEffect(() => {
    setFiltered(data);
  }, [data]);

  //filter data with the featured ones
  useEffect(() => {
    if (activeFilter === true) {
      setFiltered(data);
      return;
    }
    const featured = data.filter((estate) => estate.featured === activeFilter);
    setFiltered(featured);
    console.log("featured", featured);
  }, [activeFilter, data]);



  return (
    <div className="App">
      <Navbar setactiveFilter={setactiveFilter} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Hero
              data={data}
              estates={filtered}
              setFiltered={setFiltered}
              activeFilter={activeFilter}
              setactiveFilter={setactiveFilter}
            />
          }
        />
        <Route
          exact
          path="/buying"
          element={
            <Products
              data={data}
              estates={filtered}
              setFiltered={setFiltered}
              activeFilter={activeFilter}
              setactiveFilter={setactiveFilter}
            />
          }
        />
        <Route
          exact
          path="/selling"
          element={
            <Form
              
            />
          }
        />
        {/* <Route exact path="/renting" element={<Products />} />
        <Route exact path="/about" element={<Products />} />
        <Route exact path="/contact" element={<Products />} /> */}
        <Route
          exact
          path="/product/:id"
          element={<ProductView estates={data} />}
        />
      </Routes>
    </div>
  );
}

export default App;
