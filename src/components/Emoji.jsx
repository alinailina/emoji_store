import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/emojis";
import { seeDetails } from "../reducers/emojis";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Emoji = ({ emoji }) => {
  const dispatch = useDispatch();
  const { character, unicodeName, slug, inCart } = emoji;

  const add = () => {
    dispatch(addToCart(slug));
  };

  const remove = () => {
    dispatch(removeFromCart(slug));
  };
  const name = unicodeName.replace(/\s+/g, "-");
  return (
    <li>
      <Link
        onClick={() => dispatch(seeDetails(slug))}
        to={{
          pathname: `/${name}`,
        }}
      >
        <h2>{character}</h2>

        <p>{unicodeName}</p>
      </Link>
      <button onClick={inCart ? remove : add}>
        {inCart ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </li>
  );
};

export default Emoji;
