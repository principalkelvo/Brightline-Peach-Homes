// import ProductsCSS from './Products.module.css' 
import React from 'react'

import SearchBar from '../Navbar/SearchBar'
import ProductCard from "./ProductCard"
function Products(){
    return(
        <section>
         <SearchBar/>
        <ProductCard/>
        </section>
    )
}
export default Products;