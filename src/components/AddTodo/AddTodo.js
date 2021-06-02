import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Actions/actions";
import './addtodo.css'


const AddTodo = () => {
  const [textTodo, setTextTodo] = useState("");
  const [todos, setTodos] = useState("");
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      text: textTodo,
      id: Math.random(),
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    dispatch(addTodo(newTodo));
    setTextTodo("");
  };
  return (
    <form className="add-todo-form" onSubmit={submitTodo}>
      <h1>Todo-APP!</h1>

      <div className="input-container">
        <input
          type="text"
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
        />
        <button className="my-btn btn-primary" onClick={submitTodo}>
          ADD
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
