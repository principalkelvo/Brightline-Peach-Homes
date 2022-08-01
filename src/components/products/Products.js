// import ProductsCSS from './Products.module.css'
import React from "react";
import ProductCard from "./ProductCard";
import ProductCss from "./Products.module.css";
import SearchBar from "../Navbar/SearchBar";

function Products({
  estates,
  // setFiltered,
  activeFilter,
  // setactiveFilter,
  // data,
}) {
  console.log("estates");
  // useEffect(() => {
  //   setactiveFilter(true);
  // },[])

  return (
    <section className={activeFilter ? ProductCss.product : " "}>
      {activeFilter ? (
        <div className={ProductCss.productSearch}>
          <SearchBar />{" "}
        </div>
      ) : null}
      <ProductCard
        estates={estates}
        // data={data}
        // setFiltered={setFiltered}
        activeFilter={activeFilter}
        // setactiveFilter={setactiveFilter}
      />
    </section>
  );
}
export default Products;
