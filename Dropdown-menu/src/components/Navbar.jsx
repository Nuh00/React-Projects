import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Dropdown from "./Dropdown";
import Button from "./Button";

import "./navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function changeClick() {
    setClicked(!clicked);
  }

  function closeMobileMenu() {
    setClicked(false);
  }

  const toggleDropdown = (event) => {
    // Prevent link navigation when toggling dropdown
    event.preventDefault();
    // Toggle only if on a smaller screen
    if (window.innerWidth < 960) {
      setDropdown(!dropdown);
    } else {
      // Navigate on larger screens without a dropdown
      navigate("/services");
    }
  };
  const navigate = useNavigate();

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Gost <i className="fas fa-star"></i>
        </Link>
        <div className="menu-icon" onClick={changeClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/services" className="nav-links" onClick={toggleDropdown}>
              Services
              <i className="fas fa-caret-down"></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
