import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Navbar />
      <div className="top-1 sticky shadow w-full border-b"></div>
      <main className="relative">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
