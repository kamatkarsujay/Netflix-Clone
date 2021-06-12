import React from "react";
import "./css/Navbar.css";
import Avatar from "./img/netflixavatar.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        className="nav__logo"
        alt="Netflix logo"
      />
      <img src={Avatar} className="nav__avatar" alt="Avatar" />
    </nav>
  );
};

export default Navbar;
