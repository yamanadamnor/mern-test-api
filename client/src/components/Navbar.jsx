// TODO: include react spring for animations
// TODO: Refactor to use props.children
// TODO: Add Navitem component

import React, { useState, useRef } from 'react';
import { useSpring, animated, useChain } from 'react-spring';
import '../styles/_navbar.scss';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const springRef = useRef();
  const moreProps = useSpring({
    background: 'red',
    ref: springRef,
  });

  const transitionRef = useRef();

  function handleMenuClick() {
    setMenuActive(!menuActive);
  }

  const styleProps = useSpring({
    height: '13rem',
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
