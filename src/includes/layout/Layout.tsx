import React, { ReactNode } from "react";
import Header from "../Header/Header";
import "./Layout.scss";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
interface DynamicLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<DynamicLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <CategoryNav />
      <div className="col-12_sm-11_md-11_lg-11 layout">{props.children}</div>
    </>
  );
};

export default Layout;
