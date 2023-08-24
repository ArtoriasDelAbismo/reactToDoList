import './TodoCounter.css'


function TodoCounter(props) {

  const total = props.totalTodos;
  const completed = props.completed;

  return (
    <div className="title">
      <h1>Task Manager</h1>
      <h2>
        Completed: {completed} de {total}
      </h2>
    </div>
  );
}

export { TodoCounter };
