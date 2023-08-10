import React from "react";
import "../styles/TodoSearch.css";

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
        placeholder="Tarea aqui"
        value={searchValue}
      />
    </div>
  );
}

export { TodoSearch };
 