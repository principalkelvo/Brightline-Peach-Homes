import React from "react";
import SearchBarCSS from "./SearchBar.module.css";

function SearchBar() {
  return (
    <>
      <input
        className={SearchBarCSS.input}
        type="search"
        placeholder="Search"
      ></input>
    </>
  );
}
export default SearchBar;
