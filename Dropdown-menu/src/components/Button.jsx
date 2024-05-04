import React from "react";

import "./button.css";
import { Link } from "react-router-dom";

function Button() {
  return(
    <Link to="/sign-up" className="btn-mobile">
      <button className="btn">Sign Up</button>
    </Link>

  );
}

export default Button;
