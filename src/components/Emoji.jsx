import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartReducer";

const Emoji = ({ emoji }) => {
  // console.log(emoji);
  const dispatch = useDispatch();
  const { character, unicodeName } = emoji;

  return (
    <li>
      <h2>{character}</h2>
      <p>{unicodeName}</p>
      <button onClick={() => dispatch(addToCart(emoji))}>Add to cart</button>
    </li>
  );
};

export default Emoji;
