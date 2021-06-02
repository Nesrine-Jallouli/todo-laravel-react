import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./filtertodo.css";

const FilterTodo = ({ filteredTask, setFilteredTask, status, setStatus }) => {
  const todoList = useSelector((state) => state.todoList);

  useEffect(() => {
    filterTask();
  }, [status, todoList]);

  const filterTask = () => {
    switch (status) {
      case "All":
        return setFilteredTask(todoList);
      case "Done Tasks":
        return setFilteredTask(todoList.filter((task) => task.isDone === true));
      case "Undone Tasks":
        return setFilteredTask(
          todoList.filter((task) => task.isDone === false)
        );
      default:
        return todoList;
    }
  };

  return (
    <div className="filter-btns">
      <button type ="button" class="btn btn-secondary btn-lg" onClick={() => setStatus("All")}>
        All Tasks
      </button>
      <button
        class="btn btn-secondary btn-lg"
        onClick={() => setStatus("Done Tasks")}
      >
        Done Tasks
      </button>
      <button
        class="btn btn-secondary btn-lg"
        onClick={() => setStatus("Undone Tasks")}
      >
        Undone Tasks
      </button>
    </div>
  );
};

export default FilterTodo;
