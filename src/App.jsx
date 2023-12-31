import React from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoButton } from "./components/TodoButton";
import { useLocalStorage } from "./hooks/LocalStorage";
import { TodoLoading } from "./components/TodoLoading";
import { TodoError } from "./components/TodoError";
import { TodoEmpty } from "./components/TodoEmpty";
import { Modal } from "./components/Modal/Modal";
import { TodoForm } from "./components/TodoForm"

export default function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("LISTA01", []);

  const [openModal, setOpenModal] = React.useState(false)
  const [newTodoValue, setNewTodoValue] = React.useState("");


  const completedTodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList loading={loading} error={error}>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && searchedTodos.length === 0 && <TodoEmpty />}


        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!loading && <TodoButton openModal={openModal} setOpenModal={setOpenModal}/>}

      {openModal && (
      <Modal  >
        <TodoForm addTodo={addTodo} newTodoValue={newTodoValue} setNewTodoValue={setNewTodoValue} setOpenModal={setOpenModal}/>
      </Modal>)}
    </>
  );
}
