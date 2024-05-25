import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function changeClick() {
    setClicked(!clicked);
  }

  return (
    <div className=" flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className=" text-3xl font-bold text-mint-green"> THRIVE </h1>

      <ul className="flex hidden">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">Company</Link>
        </li>
        <li className="p-4">
          <Link to="/about">Resources</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/about">Contact</Link>
        </li>
      </ul>

      <div onClick={changeClick}>
        <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
}

export default Navbar;
