import { PayloadAction } from "@reduxjs/toolkit";
import ITodo from "../../types/todo";

const setTodosFromLocalStorage = (state: ITodo[]): ITodo[] => {
  const todosString: string = localStorage.getItem("todos") || "";
  state = JSON.parse(todosString);
  return state;
};

const updateLocalStorage = (todos: ITodo[]): void => {
  const todosString = JSON.stringify(todos);
  localStorage.setItem("todos", todosString);
};

const addTodos = (state: ITodo[], action: PayloadAction<ITodo>): ITodo[] => {
  state.push(action.payload);
  updateLocalStorage(state);
  return state;
};

const removeTodos = (
  state: ITodo[],
  action: PayloadAction<string>
): ITodo[] => {
  state = state.filter((todo) => todo.id !== action.payload);
  updateLocalStorage(state);
  return state;
};

export { setTodosFromLocalStorage, addTodos, removeTodos };
