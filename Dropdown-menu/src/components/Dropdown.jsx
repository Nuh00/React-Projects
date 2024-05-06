import React, { useState } from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";

function Dropdown() {
  const [clicked, setClicked] = useState(false);
  function changeClick() {
    setClicked(!clicked);
  }

  return (
    <ul
      onClick={changeClick}
      className={clicked ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {menuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path} className={item.cName}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
