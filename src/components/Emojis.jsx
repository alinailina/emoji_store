import React from "react";
import { useSelector } from "react-redux";

import Filter from "./Filter";
import Emoji from "./Emoji";

import { useTheme } from "../contexts/ThemeContext";

const Emojis = () => {
  // Categories
  const emojis = useSelector((state) => {
    switch (state.filter) {
      case "ALL":
        return state.emojis.emojis;
      case "SMILEYS":
        return state.emojis.emojis.filter((e) => e.group === "smileys-emotion");
      case "PEOPLE":
        return state.emojis.emojis.filter((e) => e.group === "people-body");
      case "NATURE":
        return state.emojis.emojis.filter((e) => e.group === "animals-nature");
      case "FOOD":
        return state.emojis.emojis.filter((e) => e.group === "food-drink");
      case "ACTIVITIES":
        return state.emojis.emojis.filter((e) => e.group === "activities");
      case "TRAVELLING":
        return state.emojis.emojis.filter((e) => e.group === "travel-places");
      case "OBJECTS":
        return state.emojis.emojis.filter((e) => e.group === "objects");
      case "SYMBOLS":
        return state.emojis.emojis.filter((e) => e.group === "symbols");
      case "FLAGS":
        return state.emojis.emojis.filter((e) => e.group === "flags");
      default:
        return state.emojis;
    }
  });

  // Search
  const query = useSelector((state) => state.search);
  let searchResults = emojis.filter((e) => e.unicodeName.includes(query));

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? "#dee1e6" : "white",
  };

  return (
    <section id="emojis" style={themeStyles}>
      <Filter />
      <div>
        {query.length > 2 ? (
          <ul className="emojis">
            {searchResults.map((emoji) => (
              <Emoji key={emoji.slug} emoji={emoji} />
            ))}
          </ul>
        ) : (
          <ul className="emojis">
            {emojis.map((emoji) => (
              <Emoji key={emoji.slug} emoji={emoji} />
            ))}
            <li className="empty-flex-item"></li>
            <li className="empty-flex-item"></li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Emojis;
