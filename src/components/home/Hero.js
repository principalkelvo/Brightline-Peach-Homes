import HeroCSS from "./Hero.module.css";

import React, { useEffect } from "react";
import SearchBar from "../Navbar/SearchBar";
import image from "../../logo.svg";
import Products from "../products/Products";

function Hero({ estates, setFiltered, activeFilter, setactiveFilter,data}) {
 
  useEffect(() => {
    setactiveFilter(false)
  },[setactiveFilter]);
  return (
    <>
      <nav className={HeroCSS.navHero}>
        <header className={HeroCSS.section + " " + HeroCSS.hero}>
          <div className="columns">
            <div className="column is-6 text-left">
              <h1 className={HeroCSS.title}>
                EVERYONE CAN OWN A HOUSE ONLY WITH BRIGHTLINE
              </h1>
              <SearchBar />
            </div>
            <div className="column is-6">
              <div className={HeroCSS.image}>
                <img alt="new" src={image}></img>
              </div>
            </div>
          </div>
        </header>
      </nav>
      <section>
        <h1>Featured</h1>
        <Products estates={estates}
      data={data}
        setFiltered={setFiltered}
        activeFilter={activeFilter}
        setactiveFilter={setactiveFilter}/>
      </section>
    </>
  );
}
export default Hero;
