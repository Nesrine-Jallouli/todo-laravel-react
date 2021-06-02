import React from "react";
import { completeTodo, deleteTodo } from "../Actions/actions";
import EditModal from "../EditTodo/EditModal";
import { useDispatch } from "react-redux";
import './todocard.css'


const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-card" key={todo.id}>
      <span
        className="todo-text"
        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
        onClick={() => dispatch(completeTodo(todo.id))}
      >
        {todo.text}
      </span>
      <button
        className="my-btn btn-danger"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>

      <EditModal todo={todo} />
    </li>
  );
};

export default TodoCard;
