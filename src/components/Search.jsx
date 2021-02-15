import React from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../reducers/search";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div id="search">
      <span>
        <BiSearch />
      </span>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Search;
