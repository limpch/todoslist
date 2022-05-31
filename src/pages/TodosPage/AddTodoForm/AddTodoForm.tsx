import { ChangeEvent, FormEvent, useState } from "react";
import { CustomButton } from "../../../components/CustomButton/CustomButton";
import { CustomInput } from "../../../components/CustomInput/CustomInput";
import "./addTodoForm.scss";

export const AddTodoForm = () => {
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
    setValidateErrorText("");
    console.log(value);
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
