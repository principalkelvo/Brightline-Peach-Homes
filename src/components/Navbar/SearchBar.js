import React from "react";
import SearchBarCSS from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function SearchBar({ setSearchResults, data }) {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    navigate("/searchresults");

    console.log("handleSearch");
  }

  function handleSearchChange(e) {
    if (!e.target.value) return setSearchResults(data);

    const resultsArray = data.filter((data) =>
      data.title.includes(e.target.value)
    );

    setSearchResults(resultsArray);

    console.log("search results", resultsArray);
  }
  return (
    <>
      <form className={SearchBarCSS.search} onSubmit={handleSearch}>
        <input
          className={SearchBarCSS.input}
          type="text"
          placeholder="Search"
          onChange={handleSearchChange}
        ></input>
        <button className={SearchBarCSS.searchInput}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
}
export default SearchBar;
