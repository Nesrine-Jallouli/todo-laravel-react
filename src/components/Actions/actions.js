import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from "./actionsTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const editTodo = (payload) => {
  return { type: EDIT_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const completeTodo = (payload) => {
  return { type: COMPLETE_TODO, payload };
};
