import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/emojis";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useTheme } from "../contexts/ThemeContext";

const DetailView = (props) => {
  const slug = props.history.location.pathname.substring(1);
  const emojis = useSelector((state) => state.emojis.emojis);
  const dispatch = useDispatch();
  const emoji = emojis.find((emoji) => emoji.slug === slug);
  const add = () => {
    dispatch(addToCart(slug));
  };

  const remove = () => {
    dispatch(removeFromCart(slug));
  };
  const { character, group, codePoint, unicodeName, subGroup, inCart } = emoji;

  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#dee1e6" : "white",
  };

  return (
    <div id="detail-view" style={themeStyles}>
      <div>
        <h1>{character}</h1>
        <div>
          <p>Unicode name: {unicodeName}</p>
          <p>Code point: {codePoint}</p>
          <p>Group: {group}</p>
          <p>Subgroup: {subGroup}</p>
        </div>
        <button onClick={inCart ? remove : add}>
          {inCart ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
    </div>
  );
};

export default DetailView;
