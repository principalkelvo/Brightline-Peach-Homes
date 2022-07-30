// import ProductsCSS from './Products.module.css'
import React from "react";
import ProductCard from "./ProductCard";
function Products({
  estates,
  setFiltered,
  activeFilter,
  setactiveFilter,
  data,
}) {
  console.log("estates");
  // useEffect(() => {
  //   setactiveFilter(true);
  // },[])

  return (
    <section>
      <ProductCard
        estates={estates}
        data={data}
        setFiltered={setFiltered}
        activeFilter={activeFilter}
        setactiveFilter={setactiveFilter}
      />
    </section>
  );
}
export default Products;
