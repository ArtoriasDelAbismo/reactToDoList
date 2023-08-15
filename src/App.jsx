import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoButton } from "./components/TodoButton";
import { useLocalStorage } from "./hooks/LocalStorage";
import React from "react";

/*const defaultTodos = [
  {
    text: "Conseguir placa de desarrollo para armar estacion terrestre",
    completed: false,
  },
  { text: "Comprar pava electrica", completed: false },
  { text: "Comprar pizarra", completed: false },
  { text: "Apoya pies para silla de pc", completed: false },

];
localStorage.setItem('LISTA01', defaultTodos);
*/

//
// localStorage.removeItem('TASKLIST_01');



export default function App() {
  
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, saveTodos] = useLocalStorage('LISTA01', []);

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
  return (
    <>
      <TodoCounter completed={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
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

      <TodoButton />
    </>
  );
}
