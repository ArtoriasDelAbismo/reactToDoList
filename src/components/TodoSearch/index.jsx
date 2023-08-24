import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <div className="search-bar">
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setSearchValue(event.target.value);
        }}
        className="search-bar-input"
        type="text"
        placeholder="Filter"
        value={searchValue}
      />
    </div>
  );
}

export { TodoSearch };
 