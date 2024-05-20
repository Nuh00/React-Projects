import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const isHome = location.pathname === "/";
  return (
    <>
      <nav className="navbar">
        {isHome ? (
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            Invent
          </ScrollLink>
        ) : (
          <Link to="/" className="navbar-logo">
            Invent
          </Link>
        )}
        <div className="menu-icon" onClick={changeClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="discover"
              smooth={true}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Discover
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="signUp"
              smooth={true}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              SignUp
            </ScrollLink>
          </li>
          <li className="nav-item">
            <Link
              to="signIn"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
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
