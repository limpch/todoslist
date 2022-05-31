import React from "react";
import { Header } from "../Header/Header";
import "./../../assets/styles/nullstyle.scss";
import "./../../assets/styles/style.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
