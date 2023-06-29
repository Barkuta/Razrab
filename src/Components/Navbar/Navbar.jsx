import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/info">Info</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
    </nav>
  );
};

export default Navbar;
