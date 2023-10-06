import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-base-200 p-3">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
