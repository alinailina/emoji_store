import React, { useEffect } from "react";
import { seeDetails } from "../reducers/emojiReducer";
import { useDispatch } from "react-redux";

const Details = (props) => {
  const dispatch = useDispatch();

  console.log(props);
  const slug = props.history.location.state.slug;
  console.log(slug);

  useEffect(() => {
    dispatch(seeDetails(slug));
  }, [dispatch]);

  return (
    <div>
      <h4>Details</h4>
    </div>
  );
};

export default Details;
