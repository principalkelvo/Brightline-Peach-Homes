// import ProductsCSS from './Products.module.css'
import React from "react";
import ProductCard from "./ProductCard";
function Products({estates}) {
  console.log("estates");
  return (
    <section>
      <h1>FOR SALE</h1>
      <ProductCard estates={estates}/>
    </section>
  );
}
export default Products;
