import React from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../reducers/searchReducer";

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return <input type="text" onChange={handleChange} />;
};

export default Search;
