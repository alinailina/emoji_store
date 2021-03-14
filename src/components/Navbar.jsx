import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShopping } from "react-icons/ai";
import { RiHomeLine } from "react-icons/ri";

import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const inCart = useSelector(
    (state) => state.emojis.emojis.filter((e) => e.inCart === true).length
  );

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? "#dee1e6" : "white",
  };

  return (
    <nav style={themeStyles}>
      <div>
        <ThemeToggle />
        <NavLink to="/" id="nav-name">
          <RiHomeLine />
        </NavLink>
      </div>
      <Search />
      <NavLink to="/cart" id="nav-cart">
        <AiOutlineShopping />
        <sup>{inCart}</sup>
      </NavLink>
    </nav>
  );
};

export default Navbar;
