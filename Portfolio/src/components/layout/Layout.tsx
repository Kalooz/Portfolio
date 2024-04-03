import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import Contact from "../contact/Contact";
import Header from "../header/Header";
import Partition from "./Partition";
import Footer from "../footer/Footer";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  rows?: number;
  cols?: number;
}

const Layout: FC<LayoutProps> = ({
  children,
  className,
  rows,
  cols,
  ...props
}) => {
  const layoutClass = classNames(
    "grid grid-flow-col grid-rows-12 grid-cols-12 gap-2 p-2 w-screen h-screen",
    className,
    {
      [`row-span-${rows}`]: rows !== undefined,
    },
    {
      [`col-span-${cols}`]: cols !== undefined,
    }
  );

  return (
    <div className={layoutClass} {...props}>
      <Header></Header>
      <Contact></Contact>
      <Partition className="overflow-hidden" rows={12} cols={10}>
        <main className="main">{children}</main>
        <Footer></Footer>
      </Partition>
    </div>
  );
};

export default Layout;
