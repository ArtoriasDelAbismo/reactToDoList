import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoButton } from "./components/TodoButton";
import React from "react";

const defaultTodos = [
  {
    text: "Conseguir placa de desarrollo para armar estacion terrestre",
    completed: false,
  },
  { text: "Comprar pava electrica", completed: true },
  { text: "Comprar pizarra", completed: true },
  { text: "Apoya pies para silla de pc", completed: false },

];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return(
      todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
    )
  })

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
          />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;
