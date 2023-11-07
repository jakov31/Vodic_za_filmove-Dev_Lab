import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import List from "../pages/List/List";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/Signin";
import UserProfile from "../pages/UserProfile/UserProfile";
import ModalWindow from "../pages/UI/ModalWindow";
import {
  AdminRoute,
  ProtectedRoute,
  PublicRoute,
} from "./ProtectedAndPublicRoutes";
import AdminPage from "../Admin/AdminPage";
import AddShowForm from "../Admin/AddShowForm";
import EditShowForm from "../Admin/EditShowForm";

const routes = createBrowserRouter([
  { path: "login", element: <PublicRoute element={<Login />} /> },
  { path: "register", element: <PublicRoute element={<SignIn />} /> },

  {
    path: "/",
    element: <ProtectedRoute element={<Layout />} />,
    children: [
      { path: "", element: <Home />, index: true },
      { path: "movies", element: <List /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "userProfile", element: <UserProfile /> },
      {
        path: "adminPage",
        element: <AdminRoute element={<AdminPage />} />,
      },
      { path: "edit/:id", element: <AdminRoute element={<EditShowForm />} /> },
      { path: "new", element: <AdminRoute element={<AddShowForm />} /> },
    ],
  },
  { path: "*", element: <p>404</p> },
  { path: "details", element: <ModalWindow /> },
]);

export default routes;
