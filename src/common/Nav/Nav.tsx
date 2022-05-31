import { CustomLink } from "../../components/CustomLink/CustomLink";
import nav from "../navObject";
import "./nav.scss";

export const Nav = () => {
  return (
    <ul className="nav">
      {nav.map((link) => (
        <CustomLink
          className="nav-link"
          path={link.path}
          title={link.title}
          key={link.path + link.title}
        />
      ))}
    </ul>
  );
};
