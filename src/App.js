import { useState } from "react";
import ToDo from "./components/Todo.js";
import ToDoForm from "./components/ToDoForm.js";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = () => {};
  const removeTask = () => {};
  const handleToggle = () => {};
  return (
    <div className="App">
      <header>
        <h1>Список задач : {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
