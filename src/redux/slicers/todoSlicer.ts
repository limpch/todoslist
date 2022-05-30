import { createSlice } from "@reduxjs/toolkit";
import ITodo from "../../types/todo";
import {
  setTodosFromLocalStorage,
  addTodos,
  removeTodos,
} from "./../reducers/todoReducers";

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
    setTodosFromLocalStorage,
    addTodos,
    removeTodos,
  },
  extraReducers: {},
});

export default todoSlicer.reducer;
