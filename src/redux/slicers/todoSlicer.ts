import { createSlice } from "@reduxjs/toolkit";
import ITodo from "../../types/todo";
import { addTodos, removeTodos } from "./../reducers/todoReducers";

const initialState: ITodo[] = [
  {
    title: "Сделать чай",
    completed: false,
    createTime: Date.now(),
    id: Date.now().toString(),
  },
  {
    title: "Сделать чай2",
    completed: false,
    createTime: Date.now(),
    id: Date.now().toString(),
  },
  {
    title: "Сделать чай3",
    completed: false,
    createTime: Date.now(),
    id: Date.now().toString(),
  },
];

const todoSlicer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodosAction: addTodos,
    removeTodosAction: removeTodos,
  },
  extraReducers: {},
});

export const { addTodosAction, removeTodosAction } = todoSlicer.actions;

export default todoSlicer.reducer;
