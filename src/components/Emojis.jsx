import React from "react";
import { useSelector } from "react-redux";

import Filter from "./Filter";
import Emoji from "./Emoji";

const Emojis = () => {
  // Categories
  const emojis = useSelector((state) => {
    switch (state.filter) {
      case "ALL":
        return state.emojis;
      case "SMILEYS":
        return state.emojis.filter((e) => e.group === "smileys-emotion");
      case "PEOPLE":
        return state.emojis.filter((e) => e.group === "people-body");
      case "NATURE":
        return state.emojis.filter((e) => e.group === "animals-nature");
      case "FOOD":
        return state.emojis.filter((e) => e.group === "food-drink");
      case "ACTIVITIES":
        return state.emojis.filter((e) => e.group === "activities");
      case "TRAVELLING":
        return state.emojis.filter((e) => e.group === "travel-places");
      case "OBJECTS":
        return state.emojis.filter((e) => e.group === "objects");
      case "SYMBOLS":
        return state.emojis.filter((e) => e.group === "symbols");
      case "FLAGS":
        return state.emojis.filter((e) => e.group === "flags");
      default:
        return state.emojis;
    }
  });

  // Search
  const query = useSelector((state) => state.search);
  let searchResults = emojis.filter((e) => e.unicodeName.includes(query));
  // console.log(searchResults);

  return (
    <main>
      <aside>
        <Filter />
      </aside>
      <ul className="emojis">
        {searchResults.length > 0
          ? searchResults.map((emoji) => (
              <Emoji key={emoji.slug} emoji={emoji} />
            ))
          : null}
      </ul>
    </main>
  );
};

export default Emojis;
