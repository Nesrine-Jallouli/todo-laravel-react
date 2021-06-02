import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from "../Actions/actionsTypes";

const initialState = {
  todoList: [
    { text: "My First todo", id: 0, isDone: false },
    { text: "My Second todo", id: 1, isDone: false },
    { text: "My third todo", id: 2, isDone: true },
  ],

  
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo, i) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
