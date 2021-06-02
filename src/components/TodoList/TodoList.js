import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../TodoCard/TodoCard";
import "./todolist.css";

const TodoList = ({ status, filteredTask }) => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      {status === "Done Tasks" || status === "Undone Tasks" ? (
        filteredTask.map((todo) => (
          <ul className="todo-list">
            <TodoCard todo={todo} key={todo.id} />
          </ul>
        ))
      ) : (
        <ul className="todo-list">
          {todoList.map((todo) => (
            <TodoCard todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
