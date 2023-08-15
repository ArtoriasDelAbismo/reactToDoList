import './TodoButton.css';

function TodoButton() {
  return (
    <div className="todoButton">
      <button
        onClick={(event) => {
            console.log(event)
        }}
        className="button"
      ></button>
    </div>
  );
}

export { TodoButton };
