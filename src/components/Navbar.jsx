import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <h1>Emoji store</h1>
      <Search />
      <p>
        Cart<sup>0</sup>
      </p>
    </nav>
  );
};

export default Navbar;
