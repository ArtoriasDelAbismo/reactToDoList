import React from "react";
import "./TodoForm.css";

function TodoForm({ setOpenModal, addTodo, newTodoValue, setNewTodoValue }) {

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <div className="form-container">
      <form>
        <label>Add a new task</label>
        <div className="division"></div>
        <textarea
        value={newTodoValue}
        onChange={onChange}
        
        ></textarea>

        <div className="Button-container">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="TodoForm-button TodoForm-button--cancel"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="TodoForm-button--add"
            type="button"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
