import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

const Navbar = () => {
  return (
    <div>
      <ul className=" flex justify-center gap-5">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/content"}>content</NavLink>
      <NavLink to={"/dashboard"}>dashboard</NavLink>
      <NavLink to={"*"}>COntent</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
