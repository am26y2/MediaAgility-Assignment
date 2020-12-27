import React from "react";
import "./../styles.css";
const Search = (props) => {
  return (
    <div className="search">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">city</span>
        </div>
        <input
          type="search"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          onChange={(event) => {
            props.handleSearch(event);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
