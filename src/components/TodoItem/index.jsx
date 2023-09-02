import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  
  return (
    <div className="list-items">
      <span
        onClick={ props.onComplete }  
        className={`icon icon-check ${
          props.completed && "icon-check--completed"
        }`}
      ></span>
      <p className={`todoItem-p ${props.completed ? "todoItem-p--completed" : "todoItem-p"}`}>
        {props.text}
      </p>
      <span 
      onClick={props.onDelete}
      className="sign close-sign"></span>
    </div>
  );
}

export { TodoItem };
