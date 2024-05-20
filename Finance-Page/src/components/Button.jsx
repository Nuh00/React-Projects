import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <>
      <Link to="signIn">
        <button className="btn">Sign In</button>
      </Link>
    </>
  );
}

export default Button;
