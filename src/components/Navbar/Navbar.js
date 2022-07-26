import NavbarCSS from "./Navbar.module.css";
import React from "react";
import Hero from "./Hero";

function Navbar() {
  return (
    <nav className={NavbarCSS.navHero}>
      {/* navbar  */}
      <div className={NavbarCSS.navbar}>
        <div className={NavbarCSS.navbarItems}>
          <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
          </ul>
        </div>
        <div className={NavbarCSS.navbarItems + " " + NavbarCSS.logo}>
          Brightline Peach Homes
        </div>
        <div className={NavbarCSS.navbarItems}>
          <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <hr />
      <Hero />
    </nav>
  );
}

export default Navbar;
