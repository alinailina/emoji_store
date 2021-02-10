import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

const Navbar = () => {
  const inCart = useSelector((state) => state.cart.length);

  return (
    <nav>
      <NavLink to="/">Emoji store</NavLink>
      <Search />
      <NavLink to="/cart">
        Cart<sup>{inCart}</sup>
      </NavLink>
    </nav>
  );
};

export default Navbar;
