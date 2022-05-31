import { FC } from "react";
import { Link, useMatch } from "react-router-dom";
import "./customLink.scss";

interface ICLinkProps {
  path: string;
  title: string;
  className?: string;
}

export const CustomLink: FC<ICLinkProps> = ({ path, title, className }) => {
  const isOpenLink = useMatch({
    path,
    end: true,
  });
  const classes = ["link", className, isOpenLink && "active"];

  return (
    <Link className={classes.join(" ")} to={path}>
      {title}
    </Link>
  );
};
