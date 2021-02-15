import React from "react";
import { useSelector } from "react-redux";
import { setFilter } from "../reducers/filter";
import { useDispatch } from "react-redux";
import { useTheme } from "../contexts/ThemeContext";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#dee1e6" : "white",
  };

  return (
    <aside style={themeStyles}>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("ALL"))}
          checked={filter === "ALL" ? true : false}
        />{" "}
        All
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("SMILEYS"))}
          checked={filter === "SMILEYS" ? true : false}
        />{" "}
        Smileys & emotion
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("PEOPLE"))}
          checked={filter === "PEOPLE" ? true : false}
        />{" "}
        People & body
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("NATURE"))}
          checked={filter === "NATURE" ? true : false}
        />{" "}
        Animals & nature
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("FOOD"))}
          checked={filter === "FOOD" ? true : false}
        />{" "}
        Food & drink
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("ACTIVITIES"))}
          checked={filter === "ACTIVITIES" ? true : false}
        />{" "}
        Activities
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("TRAVELLING"))}
          checked={filter === "TRAVELLING" ? true : false}
        />{" "}
        Travelling
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("OBJECTS"))}
          checked={filter === "OBJECTS" ? true : false}
        />{" "}
        Objects
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("SYMBOLS"))}
          checked={filter === "SYMBOLS" ? true : false}
        />{" "}
        Symbols
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("FLAGS"))}
          checked={filter === "FLAGS" ? true : false}
        />{" "}
        Flags
      </label>
    </aside>
  );
};

export default Filter;
