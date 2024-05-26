import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function changeClick() {
    setClicked(!clicked);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && clicked) {
        setClicked(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [clicked]);

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto  px-4  text-white">
      <h1 className="  text-3xl font-bold text-mint-green"> Flow. </h1>

      <ul className=" hidden md:flex gap-3 ">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">company</Link>
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

      <div
        onClick={changeClick}
        className="text-xl text-mint-green block md:hidden"
      >
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div
        className={
          clicked
            ? "fixed left-0 top-0  w-[60%] h-full border-r-gray-300 bg-[#000300] transition-all duration-500 ease-in-out"
            : "fixed left-[-100%] transition-all duration-500 "
        }
      >
        <h1 className=" text-3xl font-bold text-mint-green p-4 mt-4">Flow.</h1>
        <ul className="pt-10 uppercase">
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about">company</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about">Resources</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
