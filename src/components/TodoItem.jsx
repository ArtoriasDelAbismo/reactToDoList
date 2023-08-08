import "../styles/TodoItem.css";

function TodoItem(props) {
  return (
    <div className="list-items">
      <span className="check-sign"></span>
      <p>{props.text}</p>
      <span className="close-sign"></span>
    </div>
  );
}

export { TodoItem };
