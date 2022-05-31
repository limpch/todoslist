import { FC } from "react";
import "./customButton.scss";

interface ICButtonProps {
  value: string;
  style?: string;
  className?: string;
}

export const CustomButton: FC<ICButtonProps> = ({
  value,
  style,
  className,
}) => {
  const classes = ["cbtn", style, className];
  return <button className={classes.join(" ")}>{value}</button>;
};
