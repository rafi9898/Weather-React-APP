import React from "react";
import "./Search.css";

const Search = props => {
  return (
    <div className="container">
      <input
        onChange={props.getDetails}
        type="text"
        className="form-control text-center"
        placeholder="Your location..."
      />
    </div>
  );
};

export default Search;
