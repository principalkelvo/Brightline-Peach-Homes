import NavbarCSS from "./Navbar.module.css";
import React from "react";
import Hero from "../home/Hero";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={NavbarCSS.navHero}>
      {/* navbar  */}
      <div className={NavbarCSS.navbar}>
        <div className={NavbarCSS.navbarItems}>
          <ul>
            <li>
              <NavLink to="/buying" exact className={NavbarCSS.linkStyles}>
                Buying
              </NavLink>
            </li>
            <li>
              <NavLink to="/selling" exact className={NavbarCSS.linkStyles}>
                Selling
              </NavLink>
            </li>
            <li>
              <NavLink to="/renting" exact className={NavbarCSS.linkStyles}>
                Renting
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={NavbarCSS.navbarItems + " " + NavbarCSS.logo}>
          Brightline Peach Homes
        </div>
        <div className={NavbarCSS.navbarItems}>
          <ul>
            <li>
              <NavLink to="/about" exact className={NavbarCSS.linkStyles}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" exact className={NavbarCSS.linkStyles}>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" exact className={NavbarCSS.linkStyles}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <Hero />
    </nav>
  );
}

export default Navbar;
