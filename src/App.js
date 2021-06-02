import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import FilterTodo from "./components/FilterTodo/FilterTodo";
function App() {
  const [filteredTask, setFilteredTask] = useState([]);
  const [status, setStatus] = useState("all");
  return (
    <div>
      <AddTodo />
      <FilterTodo
        filteredTask={filteredTask}
        setFilteredTask={setFilteredTask}
        status={status}
        setStatus={setStatus}
      />
      <TodoList status={status} filteredTask={filteredTask} />
    </div>
  );
}

export default App;
