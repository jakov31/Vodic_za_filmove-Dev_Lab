import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AboutUs from "../pages/AboutUs";
import Custom from "../pages/Custom";
import Home from "../pages/Home/Home";
import List from "../pages/List/List";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/Signin";
import UserProfile from "../pages/UserProfile/UserProfile";
import ModalWindow from "../pages/UI/ModalWindow";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path:"home",element: <Home />, index: true },
      { path: "movies", element: <List /> },
      { path: "custom", element: <Custom /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "userProfile", element: <UserProfile /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <SignIn /> },
  { path: "*", element: <p>404</p> },
  { path:"details", element:<ModalWindow/>}
]);

export default routes;
