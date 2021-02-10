import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Emoji from "./Emoji";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);

  return (
    <div id="cart">
      <ul>
        {cart.length ? (
          cart.map((emoji) => <Emoji key={emoji.slug} emoji={emoji} />)
        ) : (
          <div>
            <p>Your bag is empty</p>
            <Link to="/">Continue shopping</Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Cart;
