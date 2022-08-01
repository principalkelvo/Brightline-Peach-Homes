import React from "react";
import SearchBarCSS from "./SearchBar.module.css";

function handleSearch() {
  console.log("handleSearch");
}

function handleSearchChange() {
  console.log("handleSearchChange");
}

function SearchBar() {
  return (
    <>
    <form className={SearchBarCSS.search} onSubmit={handleSearch}>
      <input
        className={SearchBarCSS.input}
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
      ></input>
      <button className={SearchBarCSS.searchInput}></button>
    </form>
    </>
  );
}
export default SearchBar;
