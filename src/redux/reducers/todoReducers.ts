import { PayloadAction } from "@reduxjs/toolkit";
import ITodo from "../../types/todo";

const addTodos = (state: ITodo[], action: PayloadAction<ITodo>): ITodo[] => {
  state.push(action.payload);
  return state;
};

const removeTodos = (
  state: ITodo[],
  action: PayloadAction<string>
): ITodo[] => {
  state = state.filter((todo) => todo.id !== action.payload);
  return state;
};

export { addTodos, removeTodos };
