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
              <NavLink to="/buying" className={NavbarCSS.linkStyles}>
                Buying
              </NavLink>
            </li>
            <li>
              <NavLink to="/selling" className={NavbarCSS.linkStyles}>
                Selling
              </NavLink>
            </li>
            <li>
              <NavLink to="/renting" className={NavbarCSS.linkStyles}>
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
              <NavLink to="/about" className={NavbarCSS.linkStyles}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className={NavbarCSS.linkStyles}>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={NavbarCSS.linkStyles}>
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
