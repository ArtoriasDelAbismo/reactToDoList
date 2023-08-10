import React from "react";
import "../styles/TodoItem.css";

function TodoItem(props) {

  return (
    <div className="list-items">
      <span onClick={(event)=> {console.log(event)}} className={`icon icon-check ${props.completed && "icon-check--completed"}`}></span>
      <p className={`todoItem-p ${props.completed &&"todoItem-p--completed"}`}>{props.text}</p>
      <span className="close-sign"></span>
    </div>
  );
}

export { TodoItem };
