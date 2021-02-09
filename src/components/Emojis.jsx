import React from "react";
import { useSelector } from "react-redux";

import Emoji from "./Emoji";

const Emojis = () => {
  const emojis = useSelector((state) => state.emojis);
  return (
    <ul className="emojis">
      {emojis.slice(0, 50).map((emoji) => (
        <Emoji key={emoji.character} emoji={emoji} />
      ))}
    </ul>
  );
};

export default Emojis;
