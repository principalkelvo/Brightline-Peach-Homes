import HeroCSS from "./Hero.module.css";

import React, { useEffect } from "react";
import SearchBar from "../Navbar/SearchBar";
import Products from "../products/Products";

function Hero({
  setSearchResults,
  estates,
  setFiltered,
  activeFilter,
  setactiveFilter,
  data,
  popular,
}) {
  useEffect(() => {
    setactiveFilter(false);
  }, [setactiveFilter]);
  return (
    <>
      <nav className={HeroCSS.navHero}>
        <header className={HeroCSS.section + " " + HeroCSS.hero}>
          <div className="columns">
            <div className="column is-6 text-left">
              <h1 className={HeroCSS.title}>
                EVERYONE CAN OWN A HOUSE ONLY WITH BRIGHTLINE
              </h1>
              <SearchBar setSearchResults={setSearchResults} data={data} />
            </div>
            <div className="column is-6">
              <div className={HeroCSS.image}>
                <img
                  alt="new"
                  src="https://images.unsplash.com/photo-1633119712778-30d94755de54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                ></img>
              </div>
            </div>
          </div>
        </header>
      </nav>
      <section className={HeroCSS.section}>
        <h1>Featured Homes</h1>
        <h6>Condos! affordable Condos! Bail jumpers welcome</h6>
        <Products
          estates={estates}
          data={data}
          setFiltered={setFiltered}
          activeFilter={activeFilter}
          setactiveFilter={setactiveFilter}
        />
        <h1>popular Homes</h1>
        <h6>Helping people get their dream home</h6>
        <Products
          estates={popular}
          data={data}
          setFiltered={setFiltered}
          activeFilter={activeFilter}
          setactiveFilter={setactiveFilter}
        />
      </section>
    </>
  );
}
export default Hero;
