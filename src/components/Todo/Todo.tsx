import "./Todo.scss";
import ITodo from "./../../types/todo";
import React from "react";

export const Todo: React.FC<ITodo> = ({ id, createTime, title, completed }) => {
  return (
    <div className="todo">
      <p>{title}</p>
      <p>{createTime}</p>
    </div>
  );
};
