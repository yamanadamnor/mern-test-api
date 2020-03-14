// TODO: include react spring for animations

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/_navbar.scss';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function handleMenuClick() {
    setMenuActive(!menuActive);
  }

  const styleProps = useSpring({
    height: '15rem',
  });

  return (
    <nav className="navbar-wrapper">
      <animated.ul
        className={`navbar-list ${menuActive ? 'menu-active' : ''} `}
      >
        {/* <animated.ul className={`navbar-list`}> */}
        <li className="logo">LOGO</li>
        <li className="hamburger-item">
          <button
            onClick={handleMenuClick}
            className={`hamburger hamburger--minus ${
              menuActive ? 'is-active' : ''
            }`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </li>
        <animated.li
          style={menuActive ? styleProps : null}
          className="navbar-items"
        >
          <ul className="navbar-items-list">
            <li>Home</li>
            <li>Documentation</li>
            <li>About</li>
          </ul>
        </animated.li>
      </animated.ul>
    </nav>
  );
}

export default Navbar;
