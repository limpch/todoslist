import { ChangeEvent, FC, FocusEvent, FormEvent } from "react";
import "./customInput.scss";

interface ICInputProps {
  placeholder?: string;
  errorText?: string;
  name?: string;
  type?: string;
  inputClass?: string;
  inputId?: string;
  inputContainerClass?: string;
  inputContainerId?: string;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<ICInputProps> = ({
  placeholder,
  errorText,
  name,
  type = "text",
  inputClass,
  inputId,
  inputContainerClass,
  inputContainerId,
  onInput,
  onBlur,
  onFocus,
  value,
}) => {
  return (
    <label
      className={`input__container ${inputContainerClass}`}
      id={inputContainerId}
    >
      <input
        placeholder={placeholder}
        onInput={onInput}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`input__input ${inputClass}`}
        id={inputId}
        name={name}
        type={type}
        value={value}
      />
      <span className="input__warning">{errorText}</span>
    </label>
  );
};
