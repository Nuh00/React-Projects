import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import "./navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function changeClick() {
    setClicked(!clicked);
  }

  function closeMobileMenu() {
    setClicked(false);
  }
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Invent
        </Link>
        <div className="menu-icon" onClick={changeClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-In" className="nav-links-mobile" onClick={closeMobileMenu}>
              SignIn
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
