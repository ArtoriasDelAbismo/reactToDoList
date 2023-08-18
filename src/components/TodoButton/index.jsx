import "./TodoButton.css";
import React from "react";

function TodoButton({ openModal, setOpenModal }) {
  return (
    <div className="todoButton">
      <button
        onClick={(event) => {
          console.log(event);
          setOpenModal(!openModal);
        }}
        className="button"
      ></button>
    </div>
  );
}

export { TodoButton };
