import React from "react";
import Products from "../products/Products";
import SearchResultsCSS from "./SearchResults.module.css";
import SearchBar from "./SearchBar";

function searchResults({ searchResults, data, setSearchResults }) {
  return (
    <>
      <section className={SearchResultsCSS.section}>
        <SearchBar setSearchResults={setSearchResults} data={data} />

        <h1>Searched Homes...</h1>
        <h6>The best investment on earth is earth</h6>
        {searchResults?.length ? (
          <Products estates={searchResults} />
        ) : (
          <p className={SearchResultsCSS.noResults}>No Matching Homes</p>
        )}
      </section>
    </>
  );
}

export default searchResults;
