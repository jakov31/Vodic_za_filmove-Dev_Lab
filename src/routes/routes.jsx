import { createBrowserRouter } from "react-router-dom";
// import Header from "../layout/Header";
import Layout from "../layout/Layout";
import AboutUs from "../pages/AboutUs";
import Custom from "../pages/Custom";
import Home from "../pages/Home";
import List from "../pages/List";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "list", element: <List /> },
      { path: "custom", element: <Custom /> },
      { path: "aboutUs", element: <AboutUs /> },
    ],
  },
]);

export default routes;
