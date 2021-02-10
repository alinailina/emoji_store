import React from "react";
import { setFilter } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("ALL"))}
        />{" "}
        All
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("SMILEYS"))}
        />{" "}
        Smileys & emotion
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("PEOPLE"))}
        />{" "}
        People & body
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("NATURE"))}
        />{" "}
        Animals & nature
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("FOOD"))}
        />{" "}
        Food & drink
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("ACTIVITIES"))}
        />{" "}
        Activities
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("TRAVELLING"))}
        />{" "}
        Travelling
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("OBJECTS"))}
        />{" "}
        Objects
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("SYMBOLS"))}
        />{" "}
        Symbols
      </label>
      <label htmlFor="filter">
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(setFilter("FLAGS"))}
        />{" "}
        Flags
      </label>
    </div>
  );
};

export default Filter;
