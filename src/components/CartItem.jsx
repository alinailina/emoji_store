import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  addToCart,
  removeFromCart,
} from "../reducers/emojis";
import { seeDetails } from "../reducers/emojis";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const CartItem = ({ emoji }) => {
  const dispatch = useDispatch();
  const { character, unicodeName, slug, inCart, count } = emoji;
  const name = unicodeName.replace(/\s+/g, "-");
  const add = () => {
    dispatch(addToCart(slug));
  };

  const remove = () => {
    dispatch(removeFromCart(slug));
  };

  return (
    <li>
      <h2>{character}</h2>
      <Link
        onClick={() => dispatch(seeDetails(slug))}
        to={{
          pathname: `/${name}`,
        }}
      >
        <p>{unicodeName}</p>
      </Link>
      <div>
        <button onClick={() => dispatch(decrementCount(slug))}>
          <AiOutlineMinus />
        </button>
        <p>{count}</p>
        <button onClick={() => dispatch(incrementCount(slug))}>
          <AiOutlinePlus />
        </button>
      </div>
      <button onClick={inCart ? remove : add}>
        <GrClose />
      </button>
    </li>
  );
};

export default CartItem;
