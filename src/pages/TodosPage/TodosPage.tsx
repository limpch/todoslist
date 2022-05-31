import { AddTodoForm } from "./AddTodoForm/AddTodoForm";
import "./todosPage.scss";

export const TodosPage = () => {
  return (
    <div className="todos-page">
      <div className="_container">
        <AddTodoForm />
      </div>
    </div>
  );
};
