import React, { useState, useEffect } from "react";
import "../styles/_navbar.scss";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  function handleScroll() {
    const scrollTop = window.scrollY;
    scrollTop > 40 ? setScrolled(true) : setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className="navbar-wrapper">
      <ul className={`navbar-list ${isScrolled ? "is-scrolled" : ""}`}>
        <li className="logo">LOGO</li>
        <li className={`hamburger`}>X</li>
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
