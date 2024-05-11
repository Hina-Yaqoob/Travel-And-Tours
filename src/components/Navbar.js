import "./NavbarStyle.css";
// import { Components } from "react";
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);

  function handleClicked() {
    setShow(false);
  }

  return (
    <>
      <nav className="NavbarItems fixed">
        <h1 className="navbar-logo">Hepta</h1>
        <div className="menu-icons" onClick={handleClicked}>
          <i className={show ? "fas fa-bars" : "fas fa-times"}></i>
        </div>

        <ul className={show ? "nav-menu" : "nav-menu active"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
