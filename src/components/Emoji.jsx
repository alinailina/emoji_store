import React from "react";

const Emoji = ({ emoji }) => {
  // console.log(emoji);
  const { character, unicodeName } = emoji;
  return (
    <li>
      <h2>{character}</h2>
      <p>{unicodeName}</p>
    </li>
  );
};

export default Emoji;
