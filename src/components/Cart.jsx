import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

import CartItem from "./CartItem";

const Cart = () => {
  const inCart = useSelector((state) =>
    state.emojis.emojis.filter((e) => e.inCart === true)
  );

  const counts = inCart
    .map((e) => e.count)
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const confused = useSelector((state) =>
    state.emojis.emojis.find((e) => e.slug === "confused-face")
  );

  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#dee1e6" : "white",
  };

  return (
    <div id="cart" style={themeStyles}>
      <ul>
        {inCart.length ? (
          inCart.map((emoji) => <CartItem key={emoji.slug} emoji={emoji} />)
        ) : (
          <li className="empty">
            <h2>{confused.character}</h2>
            <p>Your bag is empty</p>
            <Link to="/">Continue shopping</Link>
          </li>
        )}
      </ul>
      {inCart.length ? (
        <div>
          <p>Total: {counts}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
