import React, { useState, useEffect } from "react";
import "../styles/_navbar.scss";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  // const [isScrolled, setScrolled] = useState(false);

  // function handleScroll() {
  //   const scrollTop = window.scrollY;
  //   scrollTop > 40 ? setScrolled(true) : setScrolled(false);
  // }

  function handleMenuClick() {
    setMenuActive(!menuActive);
    console.log(menuActive);
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });


  return (
    <nav className="navbar-wrapper">
      {/* <ul className={`navbar-list ${isScrolled ? "is-scrolled" : ""}`}> */}
      <ul className={`navbar-list`}>
        <li className="logo">LOGO</li>
        <li className="hamburger-item" onClick={handleMenuClick}>
          <button className={`hamburger hamburger--arrow ${menuActive ? "is-active" : ""}`} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

        </li>
        <li className="navbar-items">
          <ul className="navbar-items-list">
            <li>Home</li>
            <li>Documentation</li>
            <li>About</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
