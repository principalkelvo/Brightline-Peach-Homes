import HeroCSS from "./Hero.module.css";

import React from "react";
import SearchBar from "../Navbar/SearchBar"
import image from "../../logo.svg"

function Hero() {
  return (
    <header className={HeroCSS.section + " " + HeroCSS.hero}>
      <div className="columns">
        <div className="column is-6 text-left" >
          <h1 className={HeroCSS.title}>
          EVERYONE CAN OWN A HOUSE ONLY WITH BRIGHTLINE
          </h1>
         <SearchBar/>
        </div>
        <div className="column is-6">
          <div className={HeroCSS.image}>
            <img alt="new" src={image}></img>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
