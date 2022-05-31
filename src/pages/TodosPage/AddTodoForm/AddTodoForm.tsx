import { ChangeEvent, FormEvent, useState } from "react";
import { CustomButton } from "../../../components/CustomButton/CustomButton";
import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addTodosAction } from "../../../redux/slicers/todoSlicer";
import ITodo from "../../../types/todo";
import "./addTodoForm.scss";

export const AddTodoForm = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [validateErrorText, setValidateErrorText] = useState<string>("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      setValidateErrorText("Поле не должно быть пустым");
      return;
    } else if (value.trim().length < 3) {
      setValidateErrorText("Минимум 3 символа");
      return;
    }
    const todo: ITodo = {
      id: Date.now().toString(),
      title: value,
      completed: false,
      createTime: Date.now(),
    };
    setValidateErrorText("");
    setValue("");
    dispatch(addTodosAction(todo));
  };

  return (
    <form className="add-todo-form" onSubmit={submitHandler}>
      <CustomInput
        onInput={inputHandler}
        value={value}
        errorText={validateErrorText}
        placeholder="Я сделаю...."
      />
      <CustomButton value="Добавить" style="blue" className="addnewtodo-bnt" />
    </form>
  );
};
