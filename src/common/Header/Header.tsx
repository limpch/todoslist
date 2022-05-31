import { Link } from "react-router-dom";
import { CustomLink } from "../../components/CustomLink/CustomLink";
import { Nav } from "../Nav/Nav";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="_container">
        <div className="header__container">
          <Link to="/" className="header__logo">
            Todos
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
};
