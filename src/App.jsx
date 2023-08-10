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
  { text: "Comprar pava electrica", completed: false },
  { text: "Comprar pizarra", completed: false },
  { text: "Apoya pies para silla de pc", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <TodoCounter completed={0} totalTodos={4} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {defaultTodos.map((todo) => (
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
